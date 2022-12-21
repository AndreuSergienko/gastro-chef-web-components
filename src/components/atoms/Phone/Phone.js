import './Phone.scss'
import { Component } from '../../../core'
import { setParentClass } from '../../../utils'

export class Phone extends Component {
   constructor() {
      super()
   }

   componentDidMount() {
      setParentClass(this)
   }

   static get observedAttributes() {
      return ['classname', 'hasphoneicon', 'parent-class']
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