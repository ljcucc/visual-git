import { WebContainer } from '@webcontainer/api';

export default class Sandbox {
  container;

  async init() {
    this.container = await WebContainer.boot();
  }
}