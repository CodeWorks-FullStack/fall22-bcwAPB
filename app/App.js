import { BulletinsController } from "./Controllers/BulletinsController.js";
import { CrimesController } from "./Controllers/CrimesController.js";


class App {
  bulletinsController = new BulletinsController
  crimesController = new CrimesController
}

window["app"] = new App();
