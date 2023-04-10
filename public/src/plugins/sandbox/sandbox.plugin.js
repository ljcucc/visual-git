import Sandbox from "./sandbox.js"

export default {
  async install(app, options){
    app.config.globalProperties.$sandbox = new Sandbox();
  }
}