import './AdminPanel.scss';
import moment from 'moment';
import { Component, FormManager } from "../../../core";
import { storageService, articleService } from "../../../services";
import '../../atoms/Preloader';


export class AdminPage extends Component {
   constructor() {
      super();
      this.state = {
         isLoading: false,
      }
      this.form = new FormManager();
   }

   createArticle = (data) => {
      this.toggleIsLoading()
      storageService
         .uploadPoster(data.poster)
         .then((snapshot) => {
            storageService.getDownloadURL(snapshot.ref).then((url) => {
               articleService
                  .addArticle({
                     ...data,
                     poster: url,
                  })
                  .catch((error) => {
                     console.log(error);
                  })
                  .finally(() => {
                     this.toggleIsLoading()
                  })
            });
         })
   };

   toggleIsLoading() {
      this.setState((state) => {
         return {
            ...state,
            isLoading: !state.isLoading,
         };
      });
   }

   generateDate = () => {
      return moment().format('D.MM.YYYY')
   }

   scrollToTop() {
      window.scroll({
         left: 0,
         top: 0,
      })
   }

   componentDidMount() {
      this.scrollToTop()
      this.addEventListener("submit", this.form.handleSubmit(this.createArticle));
   }

   render() {
      return `
         <gastro-preloader is-loading="${this.state.isLoading}">
            <div class="admin-panel">
               <div class="container">
                  <div class="admin-panel-container">
                     <form id="send-data">

                        <div class="mb-3">
                           <label class="form-label">Название блога</label>
                           <input class="form-control" type="text" name="title">
                        </div>

                        <div class="mb-3">
                           <label class="form-label">Загрузить обложку</label>
                           <input class="form-control" type="file" id="formFile" name="poster">
                        </div>

                        <div class="mb-3">
                           <label class="form-label">Дата</label>
                           <input
                              class="form-control"
                              type="text" 
                              name="date"
                              value=${this.generateDate()}
                           >
                        </div>

                        <div class="mb-3">
                           <label
                              for="exampleFormControlTextarea1" 
                              class="form-label"
                           >
                              Содержание статьи
                           </label>
                           <textarea
                              name="description" 
                              class="form-control"
                              id="exampleFormControlTextarea1"
                           ></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">
                           Send
                        </button>
                     </form>
                  </div>   
               </div>
            </div>
         </gastro-preloader>
    `;
   }
}

customElements.define("gastro-admin-page", AdminPage);
