const wallet = {
    transactions: [33, 565, 678, 23, 55, 77, 7],

    getMax() {
        return Math.max(...this.transactions);
    },

    getMin() {
        return Math.min(...this.transactions);
    },
};


export { wallet };