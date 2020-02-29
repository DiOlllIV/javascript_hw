class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    };

    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`);
    };

    setAge(value) {
        if (value < 0)
            return false;

        this.age = value;

        if (value >= 25)
            return this.requestNewPhoto();

        return values;
    };

    static createEmpty() {
        return new this('', null);
    }
};



export { User };