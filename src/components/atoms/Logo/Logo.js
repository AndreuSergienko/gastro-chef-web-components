import './Logo.scss'
import { Component } from '../../../core'

export class Logo extends Component {
   constructor() {
      super()
   }

   static get observedAttributes() {
      return ['to', 'classname', 'src']
   }

   render() {
      return `
         <div
            href="${this.props.to ?? '/'}"
            class="${this.props.classname}__logo"
         >
            <img
             src="../../../assets/images/${this.props.src}"
             class="${this.props.classname}__logo-img" 
             alt="Logo"
            />
            <span class="${this.props.classname}__logo-sign">healthy ration</span>
         </div>
      `
   }
}

customElements.define('gastro-logo', Logo)