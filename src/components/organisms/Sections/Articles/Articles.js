import './Articles.scss'
import * as core from '../../../../core'
import '../../../molecules/Article'

export class Articles extends core.Component {
    constructor() {
        super()
    }

    static get observedAttributes() {
        return ['items']
    }

    render() {
        return `
        <section class="articles">
            <div class="container">
                <div class="articles-container">
                ${JSON.parse(this.props.items).map((item) => (`
                    <gastro-articles-item
                        article='${JSON.stringify(item)}'
                    >
                    </gastro-articles-item>
                `)).join('')}
                </div>
            </div>
            <div class="articles__circle-bg"></div>
        </section>
        `
    }
}

customElements.define('gastro-articles', Articles);