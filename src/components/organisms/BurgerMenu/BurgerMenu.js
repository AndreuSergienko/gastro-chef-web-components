import './BurgerMenu.scss'
import { Component, eventBus } from '../../../core'
import '../../atoms'
import '../../molecules'
import { APP_EVENTS, APP_ROUTES } from '../../../constants'

export class BurgerMenu extends Component {
   constructor() {
      super()
      this.state = {
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
      }
   }

   static get observedAttributes() {
      return ['is-open', 'is-user-logged']
   }

   onClick(evt) {
      if (evt.target.closest('.close-burger')) {
         this.dispatch(APP_EVENTS.toggleMenu)
      }
      if (evt.target.closest('.sign-out-link')) {
         eventBus.emit(APP_EVENTS.userLoggedOut)
      }
   }

   componentDidMount() {
      this.addEventListener('click', this.onClick)
   }

   render() {
      return `
         <div
            class="burger__menu ${JSON.parse(this.props['is-open']) ? 'open' : 'closed'}"
         >
               <div class="burger__top">
                  <gastro-navigation 
                     items='${JSON.parse(this.props['is-user-logged']) ?
            JSON.stringify(this.state.navItemsWithUser) :
            JSON.stringify(this.state.navItemsWithoutUser)}'
                     classname="burger"
                     active-link-path="${this.state.activeLinkPath}"
                     >
                  </gastro-navigation>
                  <div class="burger__controls">
                     <gastro-button
                        classname="burger__button-close action-button close-burger"
                        src="header/burger-close.svg"
                        evttype="${APP_EVENTS.closeMenu}"
                     >
                     </gastro-button>
                     <gastro-language classname="burger">
                     </gastro-language>
                  </div>
               </div>
               <div class="burger__bottom">
                  <gastro-phone classname="burger__phone" hasphoneicon="false">
                  </gastro-phone>
               </div>
         </div>
      `
   }
}

customElements.define('gastro-burger-menu', BurgerMenu)
