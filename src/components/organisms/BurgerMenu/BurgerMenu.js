import './BurgerMenu.scss'
import { Component } from '../../../core'
import '../../atoms'
import '../../molecules'
import { APP_EVENTS } from '../../../constants'

export class BurgerMenu extends Component {
   constructor() {
      super()
      this.state = {
         navItems: [
            {
               href: '#',
               label: 'Программы питания',
            },
            {
               href: '#',
               label: 'Бизнес-ланчи',
            },
            {
               href: '#',
               label: 'Gastro Shop',
            },
            {
               href: '#',
               label: 'О нас',
            },
            {
               href: '#',
               label: 'Блог',
            },
         ]
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
                     classname="burger">
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
