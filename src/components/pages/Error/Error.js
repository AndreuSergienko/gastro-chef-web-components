import { Component } from "../../../core";

export class ErrorPage extends Component {
    constructor() {
        super();

    }

    render() {
        return `
        <h1>Error page</h1>
    `;
    }
}

customElements.define('gastro-error-page', ErrorPage)