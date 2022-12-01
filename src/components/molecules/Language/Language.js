import './Language.scss'
import { Component } from '../../../core'

export class Language extends Component {
   constructor() {
      super()
   }

   static get observedAttributes() {
      return ['classname']
   }

   render() {
      return `
      <div class="${this.props.classname}__lang">
         <button class="${this.props.classname}__lang-item lang-item">RU</button>
         <button class="${this.props.classname}__lang-item lang-item">UA</button>
         <button class="${this.props.classname}__lang-item lang-item">EN</button>
      </div>
      `
   }
}

customElements.define('gastro-language', Language)