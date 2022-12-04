export class MaxIndex {
    constructor(name) {
        this.name=name
        if(localStorage.getItem(`max_index_${this.name}`)){
            this._index = localStorage.getItem(`max_index_${this.name}`);
        }else{
            this.index = "-1"
        }
    }
    get index() {
        return this._index;
    }
    set index(value) {
        localStorage.setItem(`max_index_${this.name}`,  value);
        this._index = value;
    }

}