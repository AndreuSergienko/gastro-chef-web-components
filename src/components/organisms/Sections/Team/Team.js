import './Team.scss'
import { Component } from '../../../../core'

export class Team extends Component {
    constructor() {
        super()
    }

    render() {
        return `
        <section class="team">
            <img
                class="team__img"
                src="../../../../assets/images/story/team.jpg"
                alt="team"
            />
        </section>
        `
    }
}

customElements.define('gastro-team', Team);