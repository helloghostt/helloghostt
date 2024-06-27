var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
// const jill: Person = { name: "Jill" };
var jill = {
    name: "jill",
};
var person = jill;
console.log(person); //{name: "jill"} 출력
