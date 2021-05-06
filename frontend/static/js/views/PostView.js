import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params){
        super(params);
        this.postsid = params.id;
        this.setTitle("Viewing Post");
    }
    
    async getHTML(){
        console.log(this.params.id);
        return `
            <h1>Posts</h1>
            <p>You are viewing ${this.postsid} the posts!</p>
        `;
    }
}