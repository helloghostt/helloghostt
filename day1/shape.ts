class Person {
  // 클래스
  name: string;
}

// const jill: Person = { name: "Jill" };

const jill: { name: string } = {
  name: "jill",
};

const person: Person = jill;
console.log(person); //{name: "jill"} 출력
