// const input = prompt();
// if (!input) {
//   console.log("입력값이 없습니다");
// } else {
//   console.log(input);
// }

// 데이터 가져오는 함수 fetch
// const result = fetch("http://jsonplaceholder.typicode.com/posts/1");
// console.log(result);

// fetch("http://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => res.json()) // 가져온 것을 받아서 json으로 변환 후 반환
//   .then(console.log);
// console.log("test");

// &&연산자
// const me = {
//   name: "유예빈",
//   age: 26,
//   gender: "male",
// };

// const someone = {
//   name: "홍길순",
//   age: 27,
//   gender: "female",
// };

// function addMilitaryStateIfMale(person) {
//   if (person.gender === "male") {
//     // 객체 남자는 militaryState를 false 값 넣기
//     person.militaryState = false;
//   }
// }

// addMilitaryStateIfMale(me);
// addMilitaryStateIfMale(someone);

// function parseBoolean(value) {
//   if (value == true) {
//     return "참";
//   } else if (value === false) {
//     return "거짓";
//   }
// }

// if (me.militaryState !== undefined) {
//   console.log(parseBoolean(me.militaryState));
// }

// if (someone.militaryState !== undefined) {
//   console.log(parseBoolean(someone.militaryState));
// }
// me.militaryState !== undefined && console.log(parseBoolean(me.militaryState));

// console.log(parseBoolean(someone.militaryState));

// || 연산자
// const input = prompt();

// console.log(input || "입력값이 없습니다");

// if (input === "") {
//   console.log(input || "입력값이 없습니다");
// } else {
//   console.log(input);
// }

// 비구조화 할당
// const me = {
//   name: "유예빈",
//   age: 26,
// };

// // const name = me.name;
// const { name } = me;

// console.log(name);
// console.log(me.name);
// console.log(me.name);
// console.log(me.name);

// Rest
const me = {
  name: "유예빈",
  age: 26,
  militaryState: false,
};

const { militaryState, ...another } = me;

console.log(another);

const numbers = [0, 1, 2, 3, 4, 5, 6];

const [zero, ...rest] = numbers;
console.log(zero);
console.log(rest);

// const militaryMe = {
//   ...me,
//   militaryState: false,
// };

// console.log(militaryMe);

// const animals = ["개", "고양이"];
// const anotherAnimals = [...animals, "참새"];

// console.log(anotherAnimals);
