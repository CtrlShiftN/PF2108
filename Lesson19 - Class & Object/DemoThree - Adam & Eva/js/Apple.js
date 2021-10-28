class Apple {
    constructor() {
        this.weight = 10;
    }
    isEmpty() {
        return this.weight == 0;
    }
    decrease() {
        if(!this.isEmpty()){
            this.weight--;
        }
    }
    getWeight() {
        return this.weight;
    }
}