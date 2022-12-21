import './Header.scss';
import { eventBus, Component } from '../../../core';
import '../../atoms';
import '../../molecules';
import { APP_EVENTS, APP_ROUTES } from '../../../constants';

export class Header extends Component {
   constructor() {
      super();
      this.state = {
         isLoading: false,
         navItemsWithoutUser: [
            {
               to: `${APP_ROUTES.blogPage}`,
               label: 'Блог',
            },
            {
               to: `${APP_ROUTES.aboutPage}`,
               label: 'О нас',
            },
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
         ],
         navItemsWithUser: [
            {
               to: `${APP_ROUTES.blogPage}`,
               label: 'Блог',
            },
            {
               to: `${APP_ROUTES.aboutPage}`,
               label: 'О нас',
            },
            {
               to: `${APP_ROUTES.adminPage}`,
               label: 'Админ',
            },
            {
               signOutModifier: 'sign-out-link',
               label: 'Выйти',
            },
         ],
         activeLinkPath: window.location.pathname,
      };
   }

   static get observedAttributes() {
      return ['is-user-logged']
   }


   toggleIsLoading = () => {
      this.setState((state) => {
         return {
            ...state,
            isLoading: !state.isLoading,
         };
      });
   };

   onClick(evt) {
      if (evt.target.closest('.burger-button')) {
         evt.preventDefault();
         this.dispatch(APP_EVENTS.toggleMenu)
      }
      if (evt.target.closest('.sign-out-link')) {
         evt.preventDefault();
         eventBus.emit(APP_EVENTS.userLoggedOut)
      }
   }

   componentDidMount() {
      this.addEventListener('click', this.onClick);
   }

   componentWillUnmount() {
      this.removeEventListener('click', this.onClick)
   }

   render() {
      return `
         <gastro-preloader is-loading="${this.state.isLoading}">
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
                        items='${JSON.parse(this.props['is-user-logged']) ?
            JSON.stringify(this.state.navItemsWithUser) :
            JSON.stringify(this.state.navItemsWithoutUser)}'
                        active-link-path="${this.state.activeLinkPath}"
                        classname="header"
                     >
                     </gastro-navigation>
                     <gastro-language 
                        classname="header"
                     >
                     </gastro-language>
                     <gastro-phone 
                        hasphoneicon="true" 
                        classname="header__phone">
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
         </gastro-preloader>
      `;
   }
}

customElements.define('gastro-header', Header);
