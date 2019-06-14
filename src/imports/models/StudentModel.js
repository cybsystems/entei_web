import BaseModel from "./BaseModel";


export default class StudentsModel extends BaseModel {
    constructor(props) {
         
        super({ resources:props, key: 'Students' })
    }
}