import { appState } from "../AppState.js"
import { bulletinsService } from "../Services/BulletinsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"

function _draw() {
    let template = ''
    appState.bulletins.forEach(b => template += b.Template)
    setHTML('bulletins', template)
}
export class BulletinsController {
    constructor() {
        console.log('hello from the bulletin controller')
        appState.on('bulletins', _draw)
        appState.on('crimes', _draw)
        _draw()
    }

    createBulletin() {
        try {
            console.log('creating apb')
            window.event.preventDefault()
            const form = window.event.target
            let newAPB = getFormData(form)
            bulletinsService.createBulletin(newAPB)
            // @ts-ignore
            form.reset()
        } catch (error) {
            console.log(error)
        }
    }

}