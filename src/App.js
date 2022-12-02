import { Component } from './core'
import './components'
import { EVENTS } from './constants'

export class App extends Component {
   constructor() {
      super()
      this.state = {
         overlayOn: false,
         isMenuOpened: false,
         asideItems: [
            {
               href: '#',
               content: 'Ккал',
               sign: 'Программы'
            },
            {
               href: '#',
               icon: {
                  src: 'fish.svg',
                  title: 'Море продукты'
               },
               sign: 'Fish'
            },
            {
               href: '#',
               modificator: 'veggle',
               icon: {
                  src: 'carrot.svg',
                  title: 'Овощи',
               },
               sign: 'Veggle'
            },
            {
               href: '#',
               modificator: 'bottle',
               icon: {
                  src: 'bottle.svg',
                  title: 'Напитки',
               },
               sign: 'Detox'
            },
            {
               href: '#',
               icon: {
                  src: 'meat.svg',
                  title: 'Мясные изделия',
               },
               sign: 'Keto'
            },
            {
               href: '#',
               content: '5',
               icon: {
                  src: 'table.svg',
                  title: '5 стол',
               },
               sign: '5 стол'
            },
         ]
      }
   }

   onOpenMenu() {
      this.setState((state) => ({
         ...state,
         isMenuOpened: true,
         overlayOn: true,
      }))
   }

   onCloseMenu() {
      this.setState((state) => ({
         ...state,
         isMenuOpened: false,
         overlayOn: false,
      }))
   }

   onOverlay(e) {
      if (e.target.closest('.overlay')) {
         this.setState((state) => ({
            ...state,
            overlayOn: false,
            isMenuOpened: false
         }))
      }
   }

   componentDidMount() {
      this.addEventListener(EVENTS.openMenu, this.onOpenMenu)
      this.addEventListener(EVENTS.closeMenu, this.onCloseMenu)
      this.addEventListener('click', this.onOverlay)
   }

   render() {
      return `
         <gastro-header></gastro-header>
         <gastro-burger-menu doopenmenu="${this.state.isMenuOpened}">
         </gastro-burger-menu>
         <gastro-aside 
            items='${JSON.stringify(this.state.asideItems)}'
         >
         </gastro-aside>
         <div class="overlay ${this.state.overlayOn ? 'overlay-on' : ''}">
         </div>
      `
   }
}

customElements.define('gastro-app', App)