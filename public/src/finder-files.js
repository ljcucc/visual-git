const html = (e)=>e.join("").trim();
const template = html`
<div id="finder-files">
  <div class="title">
    commit: 432ab0
  </div>
  <div class="files">
    <div v-for="file in files" class="file">
      <div class="icon"></div>
      {{file}}
    </div>
  </div>
</div>
`;

export default {
  data() {
    return {
      files: ["README.md", ".gitignore"]
    };
  },
  template
};