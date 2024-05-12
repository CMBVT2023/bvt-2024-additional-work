export function Person(name, age) {
    this.userName = name;
    this.userAge = age;
    this.logName = function () {
        console.log(`I am ${this.userName} and I am ${this.userAge}!`)
    }
}