import './Phone.scss'
import { Component } from '../../../core'

export class Phone extends Component {
   constructor() {
      super()
   }

   static get observedAttributes() {
      return ['classname', 'hasphoneicon']
   }
   render() {
      return `
      <a href="tel: +380689494919" class="${this.props.classname ?? ''} phone-button">
         <span class="${this.props.classname ?? 'phone'}-num">
            +38 (068) 949 - 49 -19
         </span>
         ${JSON.parse(this.props.hasphoneicon) ?
            `
            <img 
               class="${this.props.classname}-icon"
               src="../../../assets/images/header/phone.svg"
               alt="Phone icon"
            />
            `
            :
            ''
         }
      </a>
      `
   }
}

customElements.define('gastro-phone', Phone)