import { createApp } from 'vue';
import App from "./App.vue";
import sandboxPlugin from './plugins/sandbox/sandbox.plugin';
// import VueOffline from 'vue-offline'


var app = createApp(App);
// app.use(VueOffline, {mixin: false})
app.use(sandboxPlugin);
app.mount('#app');