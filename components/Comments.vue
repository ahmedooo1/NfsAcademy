<template>
  <div class="mt-8 comments-section">
    <h2 class="relative mb-4 text-2xl font-semibold">Commentaires</h2>
    <form
      @submit.prevent="submitComment"
      class="m-4"
      v-if="$store.getters.isLoggedIn"
    >
      <label for="comment-text" class="block mt-4 mb-2">Commentaire :</label>
      <textarea
        id="comment-text"
        v-model="text"
        class="w-full h-24 p-2 border border-gray-300"
      ></textarea>
      <button
        type="submit"
        class="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
      >
        Envoyer
      </button>
    </form>
    <div class="mb-4" v-if="comments.length > 0">
      <div
        v-for="comment in comments"
        :key="comment._id"
        class="flex flex-col flex-wrap h-auto p-2 mb-2 bg-slate-200 w-96"
      >
        <p class="font-semibold" v-if="comment.userId">
          {{ comment.userId.name }}
        </p>
        <p
          v-if="comment.content"
          class="w-full overflow-auto break-words md:w-3/4"
        >
          {{ comment.content }}
        </p>
        <div v-if="canEditOrDeleteComment(comment.userId._id)" class="flex">
          <button
            @click="editComment(comment)"
            class="px-2 py-1 mr-2 text-white bg-yellow-500 rounded"
          >
            Modifier
          </button>
          <button
            @click="deleteComment(comment)"
            class="px-2 py-1 text-white bg-red-500 rounded"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Aucun commentaire pour l'instant. Soyez le premier à commenter !</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [],
      author: "",
      text: "",
    };
  },

  props: {
    guideId: {
      type: String,
      required: true,
    },
  },

  async created() {
    await this.fetchComments();
  },

  computed: {
    currentUser() {
      return this.$store.state.user;
    },
  },

  methods: {
    async editComment(comment) {
      this.text = comment.content;
      this.editingCommentId = comment._id;
    },
    async updateComment() {
      try {
        const updatedComment = {
          content: this.text,
          stuffId: this.guideId,
          userId: this.currentUser._id,
        };
        const { data } = await this.$axios.put(
          `api/v1/comments/${this.editingCommentId}`,
          updatedComment
        );
        if (data.success) {
          this.text = "";
          this.editingCommentId = null;
          this.refreshComments();
          await this.$toast.success(
            "Votre commentaire a été modifié avec succès"
          );
        } else {
          console.error("Failed to update comment:", data);
        }
      } catch (error) {
        console.error(error);
      }
    },

    async deleteComment(comment) {
      try {
        const { data } = await this.$axios.delete(
          `api/v1/comments/${comment._id}`
        );
        if (data.success) {
          this.refreshComments();
          await this.$toast.success(
            "Le commentaire a été supprimé avec succès"
          );
        } else {
          console.error("Failed to delete comment:", data);
        }
      } catch (error) {
        console.error(error);
      }
    },
    canEditOrDeleteComment(commentUserId) {
      return (
        this.currentUser &&
        (this.currentUser.role === "admin" ||
          this.currentUser._id === commentUserId)
      );
    },
    async fetchComments() {
      try {
        // Assurez-vous de passer stuffId en tant que paramètre de requête
        const response = await this.$axios.get(
          `/api/v1/comments?stuffId=${this.guideId}`
        );
        if (response.data.success && Array.isArray(response.data.data)) {
          this.comments = response.data.data;
        } else {
          console.error("API response is not an array:", response.data);
        }
      } catch (error) {
        console.error(error);
      }
    },

    async refreshComments() {
      try {
        const response = await this.$axios.get(
          `/api/v1/comments?stuffId=${this.guideId}`
        );
        if (response.data.success && Array.isArray(response.data.data)) {
          this.comments = response.data.data;
        } else {
          console.error("API response is not an array:", response.data);
        }
      } catch (error) {
        console.error(error);
      }
    },

    async submitComment() {
      try {
        if (this.editingCommentId) {
          await this.updateComment();
        } else {
          const newComment = {
            content: this.text,
            stuffId: this.guideId,
            userId: this.currentUser._id,
          };
          const { data } = await this.$axios.post(
            "api/v1/comments",
            newComment
          );
          if (data.success) {
            this.text = "";
            this.refreshComments(); // Ajoutez cette ligne pour rafraîchir les commentaires
            await this.$toast.success("Vous avez bien ajouté un commentaire");
          } else {
            console.error("Failed to submit comment:", data);
          }
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
