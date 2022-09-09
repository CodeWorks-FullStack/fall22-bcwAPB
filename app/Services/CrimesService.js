import { appState } from "../AppState.js";
import { Crime } from "../Models/Crime.js"
import { saveState } from "../Utils/Store.js";

class CrimesService {
    deleteCrime(crimeId) {
        let crimes = appState.crimes.filter(c => c.id != crimeId);
        appState.crimes = crimes
        saveState('crimes', appState.crimes)
    }
    createCrime(newCrime) {
        let crime = new Crime(newCrime)
        console.log('new crime', crime);
        appState.crimes = [crime, ...appState.crimes]
        console.log(appState.crimes);
        saveState('crimes', appState.crimes)
    }

}

export const crimesService = new CrimesService