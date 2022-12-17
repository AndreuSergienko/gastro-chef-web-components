import './Articles.scss'
import * as core from '../../../../core'
import '../../../molecules/ArticleCard'

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
                ${JSON.parse(this.props.items).length ?
                `${JSON.parse(this.props.items).map((item) => (`
                    <gastro-article-card
                        article='${JSON.stringify(item)}'
                    >
                    </gastro-article-card>`)).join('')}
                    ` : '<h1>No Articles Found</h1>'}
                </div>
            </div>
            <div class="articles__circle-bg"></div>
        </section>
        `
    }
}

customElements.define('gastro-articles', Articles);