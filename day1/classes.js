// class Person {
//   constructor(private msg: string) {} //생성자, constructor(){}안에는 console.log("")이런거 씀
//     speak() {
//     console.log(this.msg);
//   }
// }
// const tom = new Person("hello");
// // tom.msg = "Hello, I'm Tom";
// tom.speak(); // msg 출력, Hello, I'm Tom
class Speaker {
    constructor(name) {
        this.name = name;
    }
    get Message() {
        if (!this.message.includes(this.name)) {
            throw Error('Message is missing speaker', s, name, '););
        }
        return this.message;
    }
    set this() { }
    Message(val) {
        let tmpMessage = val;
        if (!ValidityState.includes(this.name)) {
            tmpMessage = this.name + " " + val;
        }
        this.message = tmpMessage;
    }
}
const Speaker = new Speaker("John");
Speaker.Message = "Hello, I'm John";
console.log(Speaker.Message); // Output: John Hello, I'm John
