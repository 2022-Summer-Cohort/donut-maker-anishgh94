class DonutMaker {
    constructor(donuts, autoClickers, multiplier) {
        this._donuts = donuts;
        this._autoClickers = autoClickers;
        this._multiplier = multiplier;
        this._autoClickersCost = 10;
        this._multiplierCost = 10;
    }

    get donuts() {
        return this._donuts;
    }
    set donuts(value) {
        this._donuts = value;
    }
    get autoClickers() {
        return this._autoClickers;
    }
    get multiplier() {
        return this._multiplier;
    }
    get autoClickersCost(){
        return this._autoClickersCost;
    }
    get multiplierCost(){
        return this._multiplierCost;
    }

    makeDonuts() {
        this._donuts++;
    }
    makeDonutsWithAutoClickers(){
        this._donuts+=this._autoClickers;
    }

    buyAutoClicker() {
        if (this._donuts >= this._autoClickersCost) {
            this._autoClickers++;
            this._donuts -= this._autoClickersCost;
            this._autoClickersCost += Math.floor(this._autoClickersCost*0.1);
        }
    }



}
export default DonutMaker;