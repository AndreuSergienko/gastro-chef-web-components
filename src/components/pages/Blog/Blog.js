import { Component } from "../../../core";
import '../../organisms/Sections'

export class BlogPage extends Component {
    constructor() {
        super();
        this.state = {
            articlesItems: [
                {
                    poster: 'article-01.png',
                    title: 'Как поменять свои пищевые привычки?',
                    date: '15.12.2022',
                },
                {
                    poster: 'article-02.png',
                    title: 'Как поменять свои пищевые привычки?',
                    date: '15.12.2022',
                },
                {
                    poster: 'article-03.png',
                    title: 'Как поменять свои пищевые привычки?',
                    date: '15.12.2022',
                },
                {
                    poster: 'article-01.png',
                    title: 'Как поменять свои пищевые привычки?',
                    date: '15.12.2022',
                },
                {
                    poster: 'article-02.png',
                    title: 'Как поменять свои пищевые привычки?',
                    date: '15.12.2022',
                },
                {
                    poster: 'article-03.png',
                    title: 'Как поменять свои пищевые привычки?',
                    date: '15.12.2022',
                },
                {
                    poster: 'article-01.png',
                    title: 'Как поменять свои пищевые привычки?',
                    date: '15.12.2022',
                },
                {
                    poster: 'article-02.png',
                    title: 'Как поменять свои пищевые привычки?',
                    date: '15.12.2022',
                },
                {
                    poster: 'article-03.png',
                    title: 'Как поменять свои пищевые привычки?',
                    date: '15.12.2022',
                },
            ],
            headerModificator: 'circle-bg',
        }
    }

    componentDidMount() {

    }

    render() {
        return `
        <gastro-articles items='${JSON.stringify(this.state.articlesItems)}'>
        </gastro-articles>
    `;
    }
}

customElements.define('gastro-blog-page', BlogPage)