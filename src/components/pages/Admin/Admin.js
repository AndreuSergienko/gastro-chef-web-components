import './AdminPanel.scss';
import moment from 'moment';
import { togglePreloader } from '../../../utils';
import { Component, FormManager, eventBus } from "../../../core";
import { storageService, articleService, authService } from "../../../services";
import '../../atoms/Preloader';
import { APP_ROUTES, APP_EVENTS } from '../../../constants';


export class AdminPage extends Component {
   constructor() {
      super();
      this.state = {
         isLoading: false,
      }
      this.form = new FormManager();
   }

   createArticle = (data) => {
      togglePreloader(this)
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
                     togglePreloader(this)
                  })
            });
         })
   };

   generateDate = () => {
      return moment().format('D.MM.YYYY')
   }

   scrollToTop() {
      window.scroll({
         left: 0,
         top: 0,
      })
   }

   checkUser() {
      if (!authService.user && window.location.pathname === APP_ROUTES.adminPage) {
         eventBus.emit(APP_EVENTS.changeRoute, {
            target: APP_ROUTES.signInPage,
         });
      }
   }

   componentDidMount() {
      this.checkUser()
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
