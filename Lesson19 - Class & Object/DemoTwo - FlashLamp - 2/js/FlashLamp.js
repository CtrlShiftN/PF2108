class FlashLamp {
    // constructor(){}

    constructor(status, bettery) {
        this.status = status;
        this.bettery = bettery;
    }

    setBettery(bettery) { // Bettery
        this.bettery = bettery;
    }
    getStatus(){
        return this.status;
    }

    getBatteryInfo() {
        return this.bettery.getEnergy();
    }

    light() {
        if (this.status) {
            console.log('Lighting');
        } else {
            console.log('Not lighting');
        }
    }

    turnOn() {
        this.status = true;
        this.bettery.decreaseEnergy();
    }

    turnOff() {
        this.status = false;
    }
}