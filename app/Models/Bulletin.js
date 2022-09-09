import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Bulletin {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.mugshot = data.mugshot || 'https://images.hobbydb.com/processed_uploads/subject_photo/subject_photo/image/53617/1575911974-10955-8820/jeffrey-tambor_large.jpg'
  }

  get Template() {
    return /*html*/` <div class="col-12 col-md-4 p-2">
          <div class="elevation-5 rounded bg-light">
            <div class=" bg-danger p-2 rounded-top d-flex text-white">
              <img class="sus-img img-fluid" src="${this.mugshot}" alt="">
              <div class="d-flex flex-column w-100 justify-content-center">
                <div class="d-flex justify-content-center flex-wrap">
                ${this.wantedLevel}
                </div>
                <h1 class="text-outline text-center bulletin-font">${this.name}</h1>
              </div>
            </div>
            <div class="px-3">
              <h2 class="text-danger text-center py-2 bulletin-font">CRIMES:</h2>
              <div id="crimes" class="pb-3">
              ${this.Crimes}
              </div>
              <form onsubmit="app.crimesController.createCrime('${this.id}')"  class="py-2">
                <div class="form-group d-flex justify-content-between border-bottom border-2 border-danger">
                  <input class="crime-input" type="text" name="description"  placeholder="Add Crime...">
                  <button class="btn" type="submit"><i class="mdi mdi-plus"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>`
  }

  get Crimes() {
    let template = ''
    let crimes = appState.crimes.filter(c => c.bulletinId == this.id)
    crimes.forEach(c => template += c.Template)
    return template
  }

  get wantedLevel() {
    let template = ''
    let crimes = appState.crimes.filter(c => c.bulletinId == this.id)
    crimes.forEach(c => {
      if (crimes.length <= 5) {
        template += ' <i class="mdi mdi-star fs-2 text-outline"></i>'
      } else {
        template += '<i class="mdi mdi-skull fs-1 text-warning text-outline"></i>'
      }
    })
    return template
  }
}