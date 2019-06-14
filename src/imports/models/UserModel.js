import BaseModel from "./BaseModel";


export default class User extends BaseModel {
    constructor(props) {
        super({ resources:props, key: 'Users' })
    }
}