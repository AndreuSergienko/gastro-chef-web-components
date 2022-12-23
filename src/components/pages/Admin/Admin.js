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
         blogData: null,
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
                  .then(() => this.getData())
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

   getData() {
      togglePreloader(this)
      articleService.getArticles()
         .then((data) => {
            this.setState((state) => {
               return {
                  ...state,
                  blogData: data
               }
            })
         })
         .finally(() => togglePreloader(this))
   }

   onRemove({ detail }) {
      togglePreloader(this)
      articleService.removeArticle(detail.id)
         .then(() => {
            this.getData()
         })
         .finally(() => togglePreloader(this))
   }

   componentDidMount() {
      this.checkUser()
      this.getData();
      this.scrollToTop()
      this.addEventListener(APP_EVENTS.removeArticle, this.onRemove)
      this.addEventListener("submit", this.form.handleSubmit(this.createArticle));
   }

   componentWillUnmount() {
      this.removeEventListener(APP_EVENTS.removeArticle, this.onRemove)
      this.removeEventListener("submit", this.form.handleSubmit(this.createArticle));
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
                     ${this.state.blogData?.length ? `
                     <div class="admin-panel__blog-control-w mt-5">
                     <h3 class="admin-panel__blog-control-title">
                        Управление блогом
                     </h3>
                     <table class="table admin-panel__blog-control mt-3">
                        <thead>
                           <tr>
                              <th class="blog-control__id" scope="col">
                                 ID
                              </th>
                              <th class="blog-control__title" scope="col">
                                 Название блога
                              </th>
                              <th class="blog-control__date" scope="col">
                                 Дата создания
                              </th>
                              <th class="blog-control__action" scope="col">
                                 Действие
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                        ${this.state.blogData?.map(({ title, date, id }, index) => (`
                           <tr>
                              <th scope="row">${index + 1}</th>
                              <td>${title}</td>
                              <td class="admin-panel__date">${date}</td>
                              <td>
                              <gastro-button
                                 evt-type="${APP_EVENTS.removeArticle}"
                                 classname="admin-panel__delete-btn"
                                 content="Delete"
                                 id="${id}"
                              >
                              </gastro-button>
                              </td>

                           </tr>`)).join('')}
                        </tbody>
                     </table>
                     </div>
                     `: '<h2 class="mt-5 fs-4 fw-semibold">Данных нет</h2>'}
                  </div>   
               </div>
            </div>
         </gastro-preloader>
    `;
   }
}

customElements.define("gastro-admin-page", AdminPage);
