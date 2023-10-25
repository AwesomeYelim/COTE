// Lv.2 뒤에 있는 큰 수 찾기

const numbers = [2, 3, 3, 5];
// const numbers = [9, 1, 5, 3, 6, 2];

// function solution(numbers) {
//   let answer = [];

//   numbers.forEach((el, i, arr) => {
//     const rest = [...arr].slice(i + 1, arr.length);
//     if (rest.length === 1 || rest.every((x) => (x ? x < el : false))) {
//       answer.push(-1);
//     }
//     for (let r of rest) {
//       if (r > el) {
//         answer.push(r);
//         break;
//       }
//     }
//   });
//   return answer;
// }

function solution(numbers) {
  let answer = [];

  numbers.forEach((el, i, arr) => {
    const rest = [...arr].slice(i + 1, arr.length);
    if (!rest.length) {
      answer.push(-1);
    } else if (rest.every((x) => x < el)) {
      answer.push(-1);
    } else {
      for (let r of rest) {
        if (r > el) {
          answer.push(r);
          break;
        }
      }
    }
  });
  return answer;
}

console.log(solution(numbers));
