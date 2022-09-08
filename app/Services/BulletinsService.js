import { appState } from "../AppState.js"
import { Bulletin } from "../Models/Bulletin.js"
import { saveState } from "../Utils/Store.js";

class BulletinsService {
    createBulletin(newAPB) {
        console.log('new bulletin', newAPB);
        let bulletin = new Bulletin(newAPB)
        appState.bulletins = [bulletin, ...appState.bulletins]
        saveState('bulletins', appState.bulletins)
        console.log(appState.bulletins);
    }

}

export const bulletinsService = new BulletinsService