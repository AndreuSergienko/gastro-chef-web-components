import { Component } from "../../../core";
import { articleService } from '../../../services'
import { togglePreloader } from "../../../utils";
import '../../atoms/Preloader'
import './BlogDetails.scss';

export class BlogDetailsPage extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            blog: {},
        }
    }

    static get observedAttributes() {
        return ['id']
    }

    getArticle() {
        togglePreloader(this);
        articleService.getArticle(this.props.id)
            .then((data) => {
                this.setState((state) => ({
                    ...state,
                    blog: data
                }))
            })
            .finally(() => togglePreloader(this))
    }


    componentDidMount() {
        this.getArticle()
    }

    render() {
        return `
        <gastro-preloader is-loading="${this.state.isLoading}">
            <section class="blog-details">
                <div class="container">
                    <div class="blog-details-container">
                            <div class="blog-details__info">
                                <div class="blog-details__header">
                                    <h2 class="blog-details__title">
                                        ${this.state.blog.title || 'Title is not found'}
                                    </h2>
                                    <span class="blog-details__date">
                                        ${this.state.blog.date ?? '...date'}
                                    </span>
                                </div>
                                <p class="blog-details__text">
                                    ${this.state.blog.description || 'No description added'}
                                </p>
                            </div>
                    </div>
                </div>
            </section>
        </gastro-preloader>
    `;
    }
}

customElements.define('gastro-blog-details-page', BlogDetailsPage)