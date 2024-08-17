const Bank = {
    calculatePercents() {
        return this.calculatePercentsAlgorithm();
    },
    calculatePercentsAlgorithm() {},
};

const calculatePercentsByAge = () => {
    return 7 + 4;
}

const calculatePercentsByRegion = () => {
    return 3 + 6;
}

const calculatePercentsByMoney = () => {
    return 1 + 3;
} 

Bank.calculatePercentsAlgorithm = calculatePercentsByRegion;
console.log(Bank.calculatePercents());