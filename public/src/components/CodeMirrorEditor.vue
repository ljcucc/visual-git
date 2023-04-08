<template>
  <div class="editor" ref="editor"></div>
</template>

<style>
.codemirror,
.cm-editor {
  /* background: #242750; */
  background: rgba(0, 0, 0, 0.35);
}

.codemirror * {
  font-size: 14px;
  font-family: 'Roboto mono', monospace;
}

.cm-editor,
.editor {
  height: 100% !important;
}

.cm-gutters {
  background:linear-gradient(0deg, rgba(255, 255, 255, 0.0) -10%, rgba(255, 255, 255, 0.15) 200%) !important;
  /* background-color: rgba(255, 255, 255, 0.05) !important; */
}

.cm-activeLineGutter {
  background-color: rgba(255, 255, 255, 0.15) !important;
}

.cm-cursorLayer {
  background-color: rgba(255, 255, 255, 0.5) !important;
}

.cm-selectionBackground {
  background-color: rgba(255, 255, 255, 0.15) !important;
  background: rgba(255, 255, 255, 0.15) !important;
}

.cm-activeLine {
  background-color: red;
  background: red;
}

.cm-cursor {
  background-color: rgba(255, 255, 255, 0.5) !important;
  border-left: 2px solid rgba(255, 255, 255, .35) !important;
}

.cm-cursor{
  box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.8);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.8);
  -moz-box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.8);
}
</style>

<script>
import { basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { EditorView, highlightActiveLine, keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { javascript } from "@codemirror/lang-javascript";

export default {
  created() {

  },
  mounted() {
    let theme = EditorView.theme({
    }, { dark: true });
    this.startState = EditorState.create({
      doc: "test",
      extensions: [
        basicSetup,
        keymap.of(defaultKeymap),
        theme,
        javascript(),
        highlightActiveLine()
      ]
    });
    this.view = new EditorView({
      state: this.startState,
      parent: this.$refs.editor,
      // contentHeight: 100,
    });
    this.view.darkTheme = true;

  },
  beforeUnmount() {
    this.view.destroy()
  },

  data() {
    return {
      startState: null,
      view: null
    };
  },
}
</script>