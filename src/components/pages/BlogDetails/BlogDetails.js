import { Component } from "../../../core";

export class BlogDetailsPage extends Component {
    constructor() {
        super();
    }

    render() {
        return `
        <h1>Blog Details page</h1>
    `;
    }
}

customElements.define('gastro-blog-details-page', BlogDetailsPage)