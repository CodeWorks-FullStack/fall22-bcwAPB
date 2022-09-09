import { generateId } from "../Utils/generateId.js"

export class Crime {
    constructor(data) {
        this.id = data.id || generateId()
        this.description = data.description
        this.bulletinId = data.bulletinId
    }


    get Template() {
        return `      <div class="d-flex justify-content-between align-items-baseline crime-border">
            <p class="px-2 mb-1">${this.description}</p>
            <i onclick="app.crimesController.deleteCrime('${this.id}')" class="mdi mdi-close selectable"></i>
          </div>`
    }

}