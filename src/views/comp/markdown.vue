<template>
  <div class="app-container">
    <!-- <mavon-editor v-model="content" ref="md" @change="change" style="min-height: 600px" /> -->
    <div id="editor">
      <textarea :value="input" @input="update"></textarea>
      <!-- <div class="mermaid"></div> -->
      <div v-html="html"></div>
    </div>
  </div>
</template>

<script>
// Create reference instance
// import marked from 'marked';
import markdownIt from 'markdown-it';
// import { mavonEditor } from 'mavon-editor';
// import 'mavon-editor/dist/css/index.css';
import markdownItMermaid from 'markdown-it-mermaid';
// const markdownIt = mavonEditor.getMarkdownIt();
const mdi = markdownIt();
mdi.use(markdownItMermaid);
// markdownIt.use(markdownItMermaid);
// import mermaid from 'mermaid';
// mermaid.mermaidAPI.initialize({ startOnLoad: false });

export default {
  // 注册
  components: {
    // mavonEditor
  },

  data() {
    return {
      input: '',
      // content: '', // 输入的markdown
      html: '' // 及时转的html
    };
  },
  created() {
    // let renderer = new marked.Renderer();
    // renderer.code = function(code, language) {
    //   console.log(code);
    //   if (code.match(/^flowchart/) || code.match(/^graph/)) {
    //     return '<div class="mermaid">' + code + '</div>';
    //   } else {
    //     return '<pre><code>' + code + '</code></pre>';
    //   }
    // };
    // // Set options
    // // `highlight` example uses https://highlightjs.org
    // marked.setOptions({
    //   renderer,
    //   // highlight: function(code, lang) {
    //   //   const hljs = require('highlight.js');
    //   //   const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    //   //   return hljs.highlight(code, { language }).value;
    //   // },
    //   highlight: function(code) {
    //     const hljs = require('highlight.js');
    //     return hljs.highlightAuto(code).value;
    //   },
    //   langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
    //   pedantic: false,
    //   gfm: true,
    //   breaks: false,
    //   sanitize: false,
    //   smartLists: true,
    //   smartypants: false,
    //   xhtml: false
    // });
  },
  mounted() {},
  methods: {
    // 所有操作都会被解析重新渲染
    change(value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render;
    },
    update(e) {
      this.input = e.target.value;
      // this.mermaid(this.input);
      // this.html = marked.parse(this.input);
      this.html = mdi.render(this.input);
    }
    // mermaid(values) {
    //   try {
    //     let element = document.querySelector('.mermaid');
    //     const insertSvg = function(svgCode, bindFunctions) {
    //       element.innerHTML = svgCode;
    //     };
    //     mermaid.mermaidAPI.render('mermaid', values, insertSvg);
    //   } catch (error) {
    //     error;
    //   }
    // }
  }
};
</script>
<style lang="scss" scoped>
textarea,
#editor div {
  display: inline-block;
  width: 49%;
  height: 1000px;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
