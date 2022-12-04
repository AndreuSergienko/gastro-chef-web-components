import { Component } from '../../../../core';
import '../../../atoms/AdvantagesItem';
import './Advantages.scss';

export class Advantages extends Component {
   constructor() {
      super();
   }

   static get observedAttributes() {
      return ['items'];
   }

   render() {
      return `
      <section class="advantages">
			<div class="container">
				<div class="advantages-container">
            ${JSON.parse(this.props.items)
            .map(({ img, info }) => (`
               <gastro-advantages-item
                  img='${JSON.stringify(img)}'
                  info="${info}"
               >
               </gastro-advantages-item>
            `))
            .join('')}	
				</div>
			</div>
		</section>
        `
   }
}

customElements.define('gastro-advantages', Advantages);