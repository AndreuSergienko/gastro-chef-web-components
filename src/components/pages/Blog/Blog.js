import { Component } from "../../../core";
import { articleService } from "../../../services";
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

    toggleIsLoading() {
        this.setState((state) => {
            return {
                ...state,
                isLoading: !state.isLoading,
            };
        });
    }

    getArticles() {
        this.toggleIsLoading()
        articleService.getArticles()
            .then((data) => {
                this.setState((state) => {
                    return {
                        ...state,
                        articles: data
                    }
                })
            }).finally(() => {
                this.toggleIsLoading()
            })
    }

    componentDidMount() {
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