// Lv.2 뒤에 있는 큰 수 찾기

const numbers = [2, 3, 3, 5];
// const numbers = [9, 1, 5, 3, 6, 2];

// function solution(numbers) {
//   let answer = [];

//   numbers.forEach((el, i, arr) => {
//     const rest = [...arr].slice(i + 1, arr.length);
//     if (!rest.length) {
//       answer.push(-1);
//     } else if (rest.every((x) => x < el)) {
//       answer.push(-1);
//     } else {
//       for (let r of rest) {
//         if (r > el) {
//           answer.push(r);
//           break;
//         }
//       }
//     }
//   });
//   return answer;
// }

function solution(numbers) {
  const length = numbers.length;
  const a = Array.from({ length }, () => -1);
  const s = [];

  for (let i = length - 1; i >= 0; i--) {
    while (s.length !== 0 && numbers[i] >= s.at(-1)) s.pop();
    if (s.length !== 0) a[i] = s.at(-1);
    s.push(numbers[i]);
  }
  return a;
}

console.log(solution(numbers));
