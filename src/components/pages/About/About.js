import { Component } from "../../../core";
import '../../organisms/Sections'

export class AboutPage extends Component {
    constructor() {
        super();
    }

    scrollToTop() {
        window.scroll({
            left: 0,
            top: 0,
        })
    }

    componentDidMount() {
        this.scrollToTop()
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