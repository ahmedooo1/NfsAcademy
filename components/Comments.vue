<template>
  <div class="w-full mt-8">
    <h2
      class="relative mb-4 text-2xl font-semibold text-gray-600 dark:text-slate-200 dark:bg-slate-900"
    >
      Commentaires
    </h2>
    <form
      @submit.prevent="submitComment"
      class="flex items-center px-3 py-2 rounded-lg shadow-md bg-gray-50 dark:text-slate-200 dark:bg-slate-900"
      v-if="$store.getters.isLoggedIn"
    >
      <textarea
        v-model="text"
        id="chat"
        rows="1"
        class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white border dark:text-slate-200 dark:bg-slate-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        placeholder="Votre commentaire..."
      ></textarea>
      <button
        type="submit"
        class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-slate-200 dark:bg-slate-900"
      >
        <svg class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
          ></path>
        </svg>
      </button>
    </form>
    <div v-if="comments.length > 0" class="">
      <!-- Envelopper la boucle v-for dans une div séparée -->
      <div>
        <div
          v-for="(comment, index) in comments.slice().reverse()"
          :key="comment._id"
          class="flex flex-col flex-wrap w-full h-auto p-2 mt-1 rounded-lg shadow-md bg-gray-50 dark:text-slate-200 dark:bg-slate-900"
          v-if="index < numOfCommentsToShow"
        >
          <p class="mb-1 font-bold">{{ comment.userId.name }}</p>
          <p
            v-if="comment.content"
            class="w-full overflow-auto break-words md:w-3/4"
          >
            {{ comment.content }}
          </p>
          <div
            v-if="canEditOrDeleteComment(comment.userId._id)"
            class="flex justify-between mt-2"
          >
            <button
              @click="editComment(comment)"
              class="flex items-center justify-around px-2 py-1 mr-2 text-white bg-yellow-500 rounded hover:bg-yellow-600"
            >
              <svg
                class="w-4 m-2 text-white fill-current"
                viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"
                />
              </svg>
            </button>
            <button
              @click="deleteComment(comment)"
              class="flex items-center justify-around px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
            >
              <svg
                class="w-4 m-2 text-white fill-current"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M432 80h-82.38l-34-56.75C306.1 8.827 291.4 0 274.6 0H173.4C156.6 0 141 8.827 132.4 23.25L98.38 80H16C7.125 80 0 87.13 0 96v16C0 120.9 7.125 128 16 128H32v320c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128h16C440.9 128 448 120.9 448 112V96C448 87.13 440.9 80 432 80zM171.9 50.88C172.9 49.13 174.9 48 177 48h94c2.125 0 4.125 1.125 5.125 2.875L293.6 80H154.4L171.9 50.88zM352 464H96c-8.837 0-16-7.163-16-16V128h288v320C368 456.8 360.8 464 352 464zM224 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S208 183.2 208 192v208C208 408.8 215.2 416 224 416zM144 416C152.8 416 160 408.8 160 400V192c0-8.844-7.156-16-16-16S128 183.2 128 192v208C128 408.8 135.2 416 144 416zM304 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S288 183.2 288 192v208C288 408.8 295.2 416 304 416z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-gray-600">
      <p>Aucun commentaire pour l'instant.</p>
    </div>
    <div v-if="numOfCommentsToShow < comments.length" class="mt-2 text-center">
      <button
        @click="numOfCommentsToShow += 6"
        class="text-blue-600 underline hover:text-blue-800 focus:text-blue-800"
      >
        Lire la suite
      </button>
    </div>
  </div>
</template>

<script>
import { VueScrollTo } from "vue-scrollto";

export default {
  data() {
    return {
      comments: [],
      author: "",
      text: "",
      numOfCommentsToShow: 6, // Nombre de commentaires à afficher initialement
      INCREMENT_BY: 3, // Nombre de commentaires à afficher de plus à chaque clic sur "Lire la suite"
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
        const response = await this.$axios.get(
          `/api/v1/comments?stuffId=${this.guideId}`
        );
        if (response.data.success && Array.isArray(response.data.data)) {
          this.comments = response.data.data.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
          );
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
