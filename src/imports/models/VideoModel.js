import BaseModel from "./BaseModel";


export default class VideoModel extends BaseModel {
    constructor(props) {
         
        super({ resources:props, key: 'Videos' })
    }
}