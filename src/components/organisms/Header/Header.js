import './Header.scss';
import { Component } from '../../../core';
import '../../atoms';
import '../../molecules';
import { EVENTS } from '../../../constants';

export class Header extends Component {
   constructor() {
      super();
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
         ],
      };
   }

   onClick(evt) {
      if (evt.target.closest('.burger-button')) {
         this.dispatch(EVENTS.openMenu)
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
                  <gastro-logo 
                     href="#" 
                     classname="header" 
                     src="header/logo.png"
                  >
                  </gastro-logo>
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
                     evttype="${EVENTS.openMenu}"
                  >
                  </gastro-button>
               </div>
            </div>
         </header>
      `;
   }
}

customElements.define('gastro-header', Header);
