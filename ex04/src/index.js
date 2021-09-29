// Only change code below this line
class Pets{
    constructor(name, legs) {
        this.name = name;
        this.legs = legs;
    }
}
class Dog extends Pets {
    
    constructor(name, legs){
        super(name,legs);
    }
    
    walk(name, legs){
        this.name = name;
        this.legs = legs;
        var numberOfLegs = this.name + " is walking on " + this.legs + " legs";
        return numberOfLegs;
    }
    bark(name){
        this.name = name;
        var dogSay = this.name + " says WUF-WUF";
        return dogSay;
    }
    
}
// Only change code above this line
let dog = new Dog("Pujdo", 4);
console.log(dog.walk("Pujdo", 4));
console.log(dog.bark("Pujdo"));

module.exports = {
    Pets,
    Dog
}