import './Navigation.scss'
import { Component } from '../../../core'

export class Navigation extends Component {
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
                           <a href="${item.href ?? '#'}" class="${this.props.classname}__list-link">
                              ${item.label ?? 'link label'}
                           </a>
                     </li>
                     `
                  ))
                  .join('')
               }
            </ul>
         </nav>
      `
   }
}

customElements.define('gastro-navigation', Navigation)