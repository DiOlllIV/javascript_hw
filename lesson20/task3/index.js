class Wallet {
    _balance = 0;

    getBalance() {
        return this._balance;
    }

    deposite(amount) {
        this._balance += amount;
    }

    withdraw(amount) {
        if (amount > this._balance) {
            console.log('No enough funds');
            return false;
        }

        this._balance -= amount;
    }
}



export { Wallet };