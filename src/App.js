import { Component } from './core'
import './components'
import { EVENTS } from './components/constants'

export class App extends Component {
   constructor() {
      super()
      this.state = {
         overlayOn: false,
         isMenuOpened: false,
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
         <gastro-burger-menu
            doopenmenu="${this.state.isMenuOpened}"
         >
         </gastro-burger-menu>
         <div
            class="overlay ${this.state.overlayOn ? 'overlay-on' : ''}"
         >
         </div>
      `
   }
}

customElements.define('gastro-app', App)