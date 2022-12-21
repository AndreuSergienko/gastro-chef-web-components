import { Component, eventBus } from "../core";
import { authService } from "../services";
import { APP_EVENTS, APP_ROUTES } from "../constants";

export class PrivateRoute extends Component {

    static get observedAttributes() {
        return ["path", "component", "title"];
    }

    checkUser() {
        if (!authService.user && this.props.path === window.location.pathname) {
            eventBus.emit(APP_EVENTS.changeRoute, {
                target: APP_ROUTES.signInPage,
            });
        }
    }

    componentDidMount() {
        this.checkUser()
    }

    render() {
        return `
        <gastro-route 
            path="${this.props.path}" 
            component="${this.props.component}" 
            title="${this.props.title}"
        >
        </gastro-route>`;
    }
}

customElements.define("gastro-private-route", PrivateRoute);
