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
    get autoClickers() {
        return this._autoClickers;
    }
    get multiplier() {
        return this._multiplier;
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

    donutsMultipliedPerClicks() {
        return parseFloat(Math.pow(1.2, this._multiplier).toFixed(4));
    }

    totalDonutsPerSecondToShow() {
        let multiplierVal = this.donutsMultipliedPerClicks();
        if (this._autoClickers == 0 && this._multiplier == 0) {
            return 0;
        }
        else if (this._autoClickers == 0) {
            return parseFloat(Math.pow(1.2, this._multiplier).toFixed(4));
        }
        else {
            return parseFloat((multiplierVal * this._autoClickers).toFixed(4));
        }
    }

    makeDonutsWithAutoClickers() {
        if (this._multiplier >= 1 && this._autoClickers >= 1) {
            this._donuts += this._autoClickers * Math.pow(1.2, this._multiplier);
        } else {
            this._donuts += this._autoClickers;
        }
    }

    resetAll() {
        this._donuts = 0;
        this._autoClickers = 0;
        this._autoClickersCost = 20;
        this._multiplier = 0;
        this._multiplierCost = 10;
    }
}
export default DonutMaker;