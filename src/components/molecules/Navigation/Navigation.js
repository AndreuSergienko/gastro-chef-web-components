import './Navigation.scss'
import * as core from '../../../core'

export class Navigation extends core.Component {
   constructor() {
      super()
   }

   static get observedAttributes() {
      return ['items', 'classname']
   }

   render() {
      return `
         <nav class="${this.props.classname}__nav" >
            <ul class="${this.props.classname}__list">
            ${JSON.parse(this.props.items)
            .map((item) => (
               `
               <li class="${this.props.classname}__list-item">
                  <gastro-nav-link
                     to="${item.to}"
                  >
                     <span class="${this.props.classname}__list-link">
                        ${item.label}
                     </span>
                  </gastro-nav-link>
               </li>
                `
            ))
            .join('')}
            </ul>
         </nav>
      `
   }
}

customElements.define('gastro-navigation', Navigation)