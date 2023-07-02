import Vue from 'vue'
import { Editor, EditorContent } from 'tiptap'


const Tiptap = {
    install(Vue) {
      Vue.component('tiptap-editor', Editor)
      Vue.component('tiptap-editor-content', EditorContent)
    }
  }
  
  Vue.use(Tiptap)