import { store } from "../store";

export default class BaseModel {
    constructor(props) {
        this.props = props

    }
    save = () => {
         
        store.dispatch({ type: 'ADD', model: this.props.key, resource:  this.props.resources })

    }
}