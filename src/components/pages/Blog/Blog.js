import { Component } from "../../../core";
import { articleService } from "../../../services";
import { togglePreloader } from "../../../utils";
import '../../organisms/Sections'
import '../../atoms/Preloader'

export class BlogPage extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            isLoading: false,
        }
    }

    getArticles() {
        togglePreloader(this)
        articleService.getArticles()
            .then((data) => {
                this.setState((state) => {
                    return {
                        ...state,
                        articles: data
                    }
                })
            }).finally(() => {
                togglePreloader(this)
            })
    }

    scrollToTop() {
        window.scroll({
            left: 0,
            top: 0,
        })
    }

    componentDidMount() {
        this.scrollToTop()
        this.getArticles()
    }

    render() {
        return `
        <gastro-preloader is-loading="${this.state.isLoading}">
            <gastro-articles
                items='${JSON.stringify(this.state.articles)}'
            >
            </gastro-articles>
        </gastro-preloader>
    `;
    }
}

customElements.define('gastro-blog-page', BlogPage)