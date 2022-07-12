class DonutMaker {
    constructor(donuts, autoClickers, multiplier) {
        this._donuts = donuts;
        this._autoClickers = autoClickers;
        this._multiplier = multiplier;
        this._autoClickersCost = 20;
        this._multiplierCost = 10;
    }

    get donuts() {
        return parseFloat((this._donuts).toFixed(4));
    }
    set donuts(value) {
        this._donuts = value;
    }
    get autoClickers() {
        return parseFloat((this._autoClickers).toFixed(4));
    }
    get multiplier() {
        return parseFloat((this._multiplier).toFixed(4));
    }
    get autoClickersCost() {
        return parseFloat((this._autoClickersCost).toFixed(4));
    }
    get multiplierCost() {
        return parseFloat((this._multiplierCost).toFixed(4));
    }

    makeDonuts() {
        if (this._multiplier >= 1) {
            this._donuts += Math.pow(1.2, this._multiplier);
        } else {
            this._donuts++;
        }
    }

    makeDonutsWithAutoClickers() {
        if (this._multiplier >= 1 && this._autoClickers >=1) {
            this._donuts += this._autoClickers + Math.pow(1.2, this._multiplier);
        } else {
            this._donuts += this._autoClickers;
        }

    }
    donutsPerClicks() {
        return parseFloat(Math.pow(1.2, this._multiplier).toFixed(4));
    }

    buyAutoClicker() {
        if (this._donuts >= this._autoClickersCost) {
            this._autoClickers++;
            this._donuts -= this._autoClickersCost;
            this._autoClickersCost += this._autoClickersCost * 0.1;
        }
    }

    buyMultiplier() {
        if (this._donuts >= this._multiplierCost) {
            this._multiplier++;
            this._donuts -= this._multiplierCost;
            this._multiplierCost += this._multiplierCost * 0.1;
        }
    }

}
export default DonutMaker;