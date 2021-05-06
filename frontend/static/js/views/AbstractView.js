export default class {
    constructor(params){
        this.params = params;
        console.log(params)
    }
    setTitle(title){
        document.title = title;
    }

    async getHTML() {
        return "";
    }
}