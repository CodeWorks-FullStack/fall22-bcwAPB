import { BulletinsController } from "./Controllers/BulletinsController.js";


class App {
  bulletinsController = new BulletinsController
}

window["app"] = new App();
