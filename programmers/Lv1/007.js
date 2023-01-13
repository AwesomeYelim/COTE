// Lv1. 없는 숫자 더하기

// 내풀이
let numbers = [1, 2, 3, 4, 6, 7, 8, 0];

function solution(numbers) {
  let arr = [];
  let result = 0;

  for (let i = 0; i < 10; i++) {
    arr.push(i);
  }

  arr = arr.filter((x) => !numbers.includes(x));

  for (let i of arr) {
    result += i;
  }

  return result;
}

console.log(solution(numbers))

// 다른사람풀이

// function solution(numbers) {
//   return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
// }

// 0