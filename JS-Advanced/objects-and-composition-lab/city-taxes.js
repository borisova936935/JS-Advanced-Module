function cityTaxes(name, population, treasury) {   //first way
    let record = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            percentage /=  100;
            this.population *= percentage + 1;
        },
        applyRecession(percentage) {
            percentage /=  100;
            this.treasury *= 1 - percentage;
        }
    };

    return record;
}

//....................................................................

function cityTaxes(name, population, treasury) {   //second way
    const result = {
        name,
        population,
        treasury,
    };
    return result;
}