export class MaxIndex {
    constructor() {
        if(localStorage.getItem("max_index")){
            this._index = localStorage.getItem("max_index");
        }else{
            this.index = "-1"
        }
    }
    get index() {
        return this._index;
    }
    set index(value) {
        localStorage.setItem("max_index",  value);
        this._index = value;
    }

}