import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Bulletin {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.img = data.img || 'https://images.hobbydb.com/processed_uploads/subject_photo/subject_photo/image/53617/1575911974-10955-8820/jeffrey-tambor_large.jpg'
  }

  get Template() {
    return /*html*/` <div class="col-12 col-md-4 p-2">
          <div class="elevation-5 rounded bg-light">
            <div class=" bg-danger p-2 rounded-top d-flex text-white">
              <img class="sus-img img-fluid" src="${this.img}" alt="">
              <div class="d-flex flex-column w-100 justify-content-center">
                <div class="d-flex justify-content-center flex-wrap">
                </div>
                <h1 class="text-outline text-center bulletin-font">${this.name}</h1>
              </div>
            </div>
            <div class="px-3">
              <h2 class="text-danger text-center py-2 bulletin-font">CRIMES:</h2>
              <div id="crimes" class="pb-3">
              </div>
              <form  class="py-2">
                <div class="form-group d-flex justify-content-between border-bottom border-2 border-danger">
                  <input class="crime-input" type="text"  placeholder="Add Crime...">
                  <button class="btn" type="submit"><i class="mdi mdi-plus"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>`
  }


}