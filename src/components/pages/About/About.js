import { Component } from "../../../core";
import '../../organisms/Sections'

export class AboutPage extends Component {
    constructor() {
        super();
    }

    render() {
        return `
        <gastro-greet></gastro-greet>
        <gastro-story></gastro-story>
        <gastro-team></gastro-team>
        <gastro-tagline></gastro-tagline>
        <gastro-dishes></gastro-dishes>
        <gastro-assistance></gastro-assistance>
        `;
    }
}

customElements.define('gastro-about-page', AboutPage)