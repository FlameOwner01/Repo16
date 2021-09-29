// Only change code below this line
class Person {
    static display(message) {
    var message = "Static method is invoked from Person Class";
        return message;
    }
    show(){
    display();
    }
}
// Only change code above this line
var message = new Person();
message.show();
module.exports = Person;