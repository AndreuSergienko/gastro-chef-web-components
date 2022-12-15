import './Article.scss'
import * as core from '../../../core';

export class Article extends core.Component {
    constructor() {
        super()
    }

    static get observedAttributes() {
        return ['article']
    }

    render() {
        const { poster, title, date } = JSON.parse(this.props.article)
        return `
        <div class="articles__item">
            <div class="articles__item-img">
            <img
                src="../../../../assets/images/articles/${poster}" alt="article">
            </div>
            <h4 class="articles__item-title">
                ${title}
            </h4>
            <div class="articles__item-footer">
            <span class="articles__item-date">
                ${date}
            </span>
            <gastro-nav-link
                classname="articles__item-link"
            >
                <div class="articles__item-more">
                    <span class="articles__item-more-text">
                        Подробнее
                    </span>
                    <i class="fa-solid fa-angle-right articles__item-more-icon">
                    </i>
                </div>
            </gastro-nav-link>
            </div>
        </div>
        `
    }
}

customElements.define('gastro-articles-item', Article);