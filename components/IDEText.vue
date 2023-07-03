<template>
  <div class="flex flex-col items-center justify-center bg-gray-100">
    <client-only>
      <editor-content :editor="editor" v-model="value" 
        class="w-full px-4 py-2 overflow-y-auto bg-gray-100 border border-gray-300 rounded-md editor-content max-h-96 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" 
        @input="onInput"
      />
    </client-only>
  </div>
</template>

<script>
import { Node, Editor, EditorContent } from '@tiptap/vue-2'
import { Document } from '@tiptap/extension-document';
import { Text } from '@tiptap/extension-text';
import { Heading } from '@tiptap/extension-heading';
import { Bold } from '@tiptap/extension-bold';
import { Italic } from '@tiptap/extension-italic';
import { Strike } from '@tiptap/extension-strike';
import { Underline } from '@tiptap/extension-underline';
import { Code } from '@tiptap/extension-code';
import { HorizontalRule } from '@tiptap/extension-horizontal-rule';
import { BulletList } from '@tiptap/extension-bullet-list';
import { OrderedList } from '@tiptap/extension-ordered-list';
import { ListItem } from '@tiptap/extension-list-item';
import { Blockquote } from '@tiptap/extension-blockquote';
import { HardBreak } from '@tiptap/extension-hard-break';
import { CodeBlock } from '@tiptap/extension-code-block';
import { TextAlign } from '@tiptap/extension-text-align';
import { Link } from '@tiptap/extension-link';
import { mergeAttributes } from '@tiptap/core'
import Toolbar from "./Toolbar.vue";

const CustomNode = Node.create({
  name: 'custom',
  group: 'block',
  content: 'text*',
  defining: true,
  parseDOM: [{ tag: 'p.custom' }],
  toDOM() {
    return ['p', { class: 'custom' }, 0]
  },
})

const ParagraphNode = Node.create({
  name: 'paragraph',
  group: 'block',
  content: 'text*',
  addAttributes() {
    return {
      class: {
        default: null,
      },
    }
  },
  parseHTML() {
    return [
      {
        tag: 'p',
        getAttrs(dom) {
          return {
            class: dom.getAttribute('class') || null,
          }
        },
      },
    ]
  },
  renderHTML({ HTMLAttributes }) {
    return ['p', mergeAttributes(HTMLAttributes), 0]
  },
})

export default {
  components: {
    EditorContent,
    Toolbar,
  },

  props: {
    guide: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      editor: null,
      value: this.guide && this.guide.description ? this.guide.description : '',
    }
  },

  mounted() {
    this.editor = new Editor({
      content: this.value,
      extensions: [
        Document,
        Text,
        Heading,
        Bold,
        Italic,
        Strike,
        Underline,
        Code,
        HorizontalRule,
        BulletList,
        OrderedList,
        ListItem,
        Blockquote,
        HardBreak,
        CodeBlock,
        TextAlign,
        Link,
        ParagraphNode,
      ],
      onUpdate: ({ editor }) => {
        this.value = editor.getHTML()
        const cleanedHTML = this.cleanHTML(this.value)
        this.$emit('input', cleanedHTML)
      }
    })
  },

  watch: {
    'guide.description': function(value) {
      this.value = value
      if (this.editor) {
        this.editor.commands.setContent(this.value)
      }
    }
  },

  beforeDestroy() {
    if (this.editor !== null) {
      this.editor.destroy()
    }
  },

  methods: {
 cleanHTML(html) {
  return html;
},

    onInput(event) {
      this.value = event.target.innerHTML
      const cleanedHTML = this.cleanHTML(this.value)
      this.$emit('input', cleanedHTML)
    },
  },
}
</script>
<style scoped>
.editor-content {
  white-space: pre-wrap; /* Ajoutez cette ligne pour préserver les espaces */
}
.ProseMirror{
    border : 1px solid blue !important
}
</style>