import './BurgerMenu.scss'
import { Component } from '../../../core'
import '../../atoms'
import '../../molecules'
import { APP_EVENTS, APP_ROUTES } from '../../../constants'

export class BurgerMenu extends Component {
   constructor() {
      super()
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
         activeLinkPath: window.location.pathname,
      }
   }

   static get observedAttributes() {
      return ['isopen', 'isclosed']
   }

   onClick(evt) {
      if (evt.target.closest('.close-burger')) {
         this.dispatch(APP_EVENTS.closeMenu)
      }
   }

   componentDidMount() {
      this.addEventListener('click', this.onClick)
   }

   render() {
      return `
         <div
            class="burger__menu ${JSON.parse(this.props.isopen) ? 'open' : ''}
            ${JSON.parse(this.props.isclosed) ? 'closed' : ''}"
         >
               <div class="burger__top">
                  <gastro-navigation 
                     items='${JSON.stringify(this.state.navItems)}'
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
                  <gastro-phone classname="burger" hasphoneicon="false">
                  </gastro-phone>
               </div>
         </div>
      `
   }
}

customElements.define('gastro-burger-menu', BurgerMenu)
