import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

import MainLayout from "./main-layout.js";
import FinderPage from "./finder-page.js";
import FinderFiles from "./finder-files.js";

var app = createApp({
  data(){
    return {
    };
  }
});

app.component('main-layout', MainLayout);
app.component('finder-page', FinderPage);
app.component('finder-files', FinderFiles);

app.mount('#app');