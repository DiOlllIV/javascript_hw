/* ===> 1 <=== */
const student = {
    name: 'Tom',
};

export function sayName() {
    console.log(this.name);
}

// вызовите ф-цию sayName так, чтобы в консоль вывелось имя студента 
sayName.apply(student, [student.name]);


// вызовите ф-цию sayName так, чтобы в консоль вывелось имя 'Bruce' (используйте другой объект)
sayName.apply(new Object(student), [student.name = 'Bruce']);



/* ===> 2 <=== */
const company = {
    companyName: 'Microsoft'
};

export function greeting(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
}

// вызовите ф-цию greeting так, чтобы в консоль вывелось 
// 'Hello, Bob Marley. Welcome to the Microsoft'
// используйте объект company
greeting.apply(company, ['Bob', 'Marley', company.companyName]);


/* ===> 3 <=== */
const country = {
    countryName: 'Ukraine',
    capital: 'Kyiv'
};

export function getPopulation(population) {
    return `Population in ${this.countryName} is ${population}`;
}

// вызовите ф-цию getPopulation так, чтобы она вернула 
// 'Population in Ukraine is 43000'
// используйте объект country
getPopulation.apply(country, [43e3, country.countryName]);



/* ===> 4 <=== */
const transaction = {
    amount: 1200,
    operation: 'sell',
    currency: 'USD',
    exchange: 'NYSE',
    printTransaction() {
        console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
    }
}

const anotherTransaction = {
    amount: 400,
    operation: 'buy',
    currency: 'USD',
    exchange: 'NASDAQ',
};

// вызовите метод transaction.printTransaction так, чтобы в консоль вывелось
// '400 USD - buy on NASDAQ'
// используйте объект anotherTransaction как контекст
transaction.printTransaction.apply(anotherTransaction, [anotherTransaction.amount, anotherTransaction.currency, anotherTransaction.operation, anotherTransaction.exchange]);