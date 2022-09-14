class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year old`
    }
}

class Student extends Person {
    constructor(name, age, major = '') {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += `\nTheir major is ${this.major}`;
        }
        return description+`\nStudent.Description called`;
    }
}

class Traveler extends Person {
    constructor (name, age, homeLoc = '') {
        super(name,age);
        this.homeLoc = homeLoc;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLoc) {
            greeting += `, I am visiting from ${this.homeLoc}`;
        }
        return greeting;
    }

}


const me = new Traveler('Chisato',16, 'Tokyo');
console.log(me.getGreeting());
// console.log(me.hasMajor());


const other2 = new Traveler('Takina',17, 'Tenpo');
console.log(other2.getGreeting());
// console.log(other2.hasMajor());

const other = new Traveler('Minami',18);
console.log(other.getGreeting());
// console.log(other.hasMajor());
const other3 = new Traveler();
console.log(other3.getGreeting());


const renderApp = () => {
    const template = (
        <div>
            <h1>class1</h1>
        </div>);
    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');
renderApp();