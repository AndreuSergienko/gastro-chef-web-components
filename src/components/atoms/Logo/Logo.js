import './Logo.scss'
import { Component } from '../../../core'

export class Logo extends Component {
   constructor() {
      super()
   }

   static get observedAttributes() {
      return ['href', 'classname', 'src']
   }

   render() {
      return `
         <a href="${this.props.href ?? '#'}" class="${this.props.classname}__logo">
            <img
             src="../../../assets/images/${this.props.src}"
             class="${this.props.classname}__logo-img" 
             alt="Logo"
            />
            <span class="${this.props.classname}__logo-sign">healthy ration</span>
         </a>
      `
   }
}

customElements.define('gastro-logo', Logo)