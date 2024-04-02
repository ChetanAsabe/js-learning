// Vehicle class

class Vehicle {
    constructor(brand, type, model, engineType) {
        this.brand = brand;
        this.type = type;
        this.model = model;
        this.engineType = engineType;
    }

    display() {
        console.log();
        console.log(`Brand : ${this.brand}`);
        console.log(`Model : ${this.model}`);
        console.log(`Vehicle type : ${this.type} car`);
        console.log(`Engine type : ${this.engineType} engine.`);
        console.log();
        console.log('--------------------------');
    }
}

const BMW1 = new Vehicle("BMW", "Sports", "M5 Comptition", "V8");
const Audi = new Vehicle("Audi", "Sports", "A8", "V6");
const Mercedes = new Vehicle("Mercedes", "Sports", "AMG GT63", "V8");
const Lamborghini = new Vehicle("Lamborghini", "Sports", "Urus", "V8");
const BMW2 = new Vehicle("BMW", "Sports", "M4", "V8");


const arrayOfObjects = [BMW1, Audi, Mercedes, Lamborghini, BMW2];

console.log();
console.log('Vehicle details ->');

for (const Car of arrayOfObjects) {
    Car.display();
}

// College class

class College {    
    constructor(name, city, grade, type) {
        this.name = name;
        this.city = city;
        this.grade = grade;
        this.type = type;
    }

    display() {
        console.log(`Name : ${this.name}, City - ${this.city}, College Type - ${this.type}`);
    }
}

console.log();
console.log('College details ->');
console.log();
const COEP = new College("COEP", "Pune", "A+", "Autonomous");
COEP.display();

const Sinhgad = new College("Sinhgad", "Pune", "A+", "Private");
Sinhgad.display();

const MIT = new College("MIT", "Pune", "A+", "Autonomous");
MIT.display();

const Walchand = new College("Walchand", "Sangli", "A+", "Autonomous");
Walchand.display();
console.log();