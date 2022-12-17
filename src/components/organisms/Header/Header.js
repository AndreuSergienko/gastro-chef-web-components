import './Header.scss';
import * as core from '../../../core';
import '../../atoms';
import '../../molecules';
import { APP_EVENTS, APP_ROUTES } from '../../../constants';

export class Header extends core.Component {
   constructor() {
      super();
      this.state = {
         navItems: [
            {
               to: `${APP_ROUTES.signInPage}`,
               label: 'Войти',
            },
            {
               to: `${APP_ROUTES.signUpPage}`,
               label: 'Регистрация',
            },
            {
               to: `${APP_ROUTES.adminPage}`,
               label: 'Админ',
            },
            {
               to: `${APP_ROUTES.aboutPage}`,
               label: 'О нас',
            },
            {
               to: `${APP_ROUTES.blogPage}`,
               label: 'Блог',
            },
         ],
      };
   }

   onClick(evt) {
      if (evt.target.closest('.burger-button')) {
         this.dispatch(APP_EVENTS.openMenu)
      }
   }

   componentDidMount() {
      this.addEventListener('click', this.onClick)
   }

   render() {
      return `
         <header class="header">
            <div class="container">
               <div class="header-container">
                  <gastro-nav-link to="${APP_ROUTES.homePage}">
                     <gastro-logo
                        classname="header" 
                        src="header/logo.png"
                     >
                     </gastro-logo>
                  </gastro-nav-link>
                  <gastro-navigation 
                     items='${JSON.stringify(this.state.navItems)}'
                     classname="header"
                  >
                  </gastro-navigation>
                  <gastro-language 
                     classname="header"
                  >
                  </gastro-language>
                  <gastro-phone hasphoneicon="true" classname="header">
                  </gastro-phone>
                  <gastro-button 
                     classname="header__burger-button action-button burger-button" 
                     src="header/burger.svg"
                     evttype="${APP_EVENTS.openMenu}"
                  >
                  </gastro-button>
               </div>
            </div>
         </header>
      `;
   }
}

customElements.define('gastro-header', Header);
