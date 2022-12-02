import './Aside.scss'
import { Component } from '../../../core'

export default class Aside extends Component {
   constructor() {
      super()
      this.state = {
         isAsideOn: false
      }
   }

   static get observedAttributes() {
      return ['items']
   }

   render() {
      return `
      <aside class="aside">
         <ul class="aside__list">
            ${JSON.parse(this.props.items)
            .map((item) => (
               `<li class="aside__list-item">
                     <a 
                        href="${item.href ?? '#'}"
                        class="aside__list-link ${item.modificator ?
                  `aside__list-link--${item.modificator}` : ''
               }"
                     >
                        ${item.content ? item.content : ''}
                        ${item.icon ?
                  `
                        <img 
                           src="../../../assets/images/aside/${item.icon.src}"
                           alt="${item.icon.title}"/
                        >
                  `
                  :
                  ''
               }
                     </a>
                     <span class="aside__list-sign">${item.sign}</span>
                  </li>`
            ))
            .join('')
         }
         </ul>
	   </aside>
      `
   }
};


customElements.define('gastro-aside', Aside)