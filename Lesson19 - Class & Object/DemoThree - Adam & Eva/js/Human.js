class Human {
    constructor() {
        this.weight = 50;
    }
    isMale() {
        return this.gender;
    }
    setGender(gender) {
        this.gender = gender;
    }
    checkApple(apple) {
        return apple.isEmpty() == false;
        // return apple.getWeight() > 0;
    }
    eat(apple) {
        if (this.checkApple(apple)) {
            this.weight++;
            apple.decrease();
        }
    }
    say(message) {
        console.log(this.name + ': ' + message);
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight = weight;
    }
}