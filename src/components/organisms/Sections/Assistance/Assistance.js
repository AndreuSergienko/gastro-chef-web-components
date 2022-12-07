import './Assistance.scss'
import { Component } from '../../../../core'
import '../../../molecules/AssistanceOrder'
import '../../../molecules/AssistanceFaq'

export class Assistance extends Component {
    constructor() {
        super()
        this.state = {
            orderForm: {},
            faqItems: [],
        }
    }

    render() {
        return `
        <section class="assistance">
        <div class="container-02">
            <div class="assistance-container">
                <gastro-assistance-order>
                </gastro-assistance-order>
                <gastro-assistance-faq>
                </gastro-assistance-faq>
            </div>
        </div>

        
        <div class="assistance__circle-md--transparent"></div>
        <div class="assistance__circle-md--filled"></div>
    </section>
        `
    }
}

customElements.define('gastro-assistance', Assistance)