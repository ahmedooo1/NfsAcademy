<template>
  <div class="toolbar">
    <button v-tippy content="Bold" @click="editor.chain().focus().toggleBold().run()">
      <i class="fas fa-bold"></i>
    </button>

    <button v-tippy content="Italic" @click="editor.chain().focus().toggleItalic().run()">
      <i class="fas fa-italic"></i>
    </button>

    <button v-tippy content="Underline" @click="editor.chain().focus().toggleUnderline().run()">
      <i class="fas fa-underline"></i>
    </button>

    <button v-tippy content="Strikethrough" @click="editor.chain().focus().toggleStrike().run()">
      <i class="fas fa-strikethrough"></i>
    </button>

    <button v-tippy content="Code" @click="editor.chain().focus().toggleCode().run()">
      <i class="fas fa-code"></i>
    </button>

    <button v-tippy content="Link" @click="showLinkDialog = true">
      <i class="fas fa-link"></i>
    </button>

    <template v-if="showLinkDialog">
      <div class="link-dialog">
        <input type="text" placeholder="URL" v-model="linkUrl" @keydown.enter.prevent="addLink">
        <button @click="addLink">Add</button>
        <button @click="showLinkDialog = false">Cancel</button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    editor: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      showLinkDialog: false,
      linkUrl: '',
    }
  },

  methods: {
    addLink() {
      if (this.linkUrl) {
        this.editor.chain().focus().extendMarkRange('link').setLink({ href: this.linkUrl }).run()
        this.showLinkDialog = false
        this.linkUrl = ''
      }
    },
  },
}
</script>

<style>
.toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    margin: 0.25rem;
    border-radius: 0.25rem;
    background-color: #fff;
    color: #555;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      background-color: #f2f2f2;
    }
    i {
      font-size: 1rem;
    }
  }
  .link-dialog {
    display: flex;
    align-items: center;
    input {
      flex: 1;
    }
    button {
      margin-left: 0.5rem;
    }
  }
}
</style>