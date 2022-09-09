import { crimesService } from "../Services/CrimesService.js"
import { getFormData } from "../Utils/FormHandler.js"

export class CrimesController {
    constructor() {
        console.log('hellooo from crimes controller')
    }

    createCrime(bulletinId) {
        try {
            // debugger
            console.log('committing  crime')
            window.event.preventDefault()
            const form = window.event.target
            let newCrime = getFormData(form)
            newCrime.bulletinId = bulletinId
            console.log('newly committed crime', newCrime);
            crimesService.createCrime(newCrime)
        } catch (error) {
            console.log(error);
        }
    }

    deleteCrime(crimeId) {
        console.log('community service', crimeId)
        try {
            crimesService.deleteCrime(crimeId)
        } catch (error) {
            console.log(error);
        }
    }
}