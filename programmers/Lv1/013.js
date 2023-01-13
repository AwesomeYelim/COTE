// Lv 1. 믄지열 나누기

const str = "banana";
// const str = 'abracadabra'
// const str = "aaabbaccccabba";

function solution(s) {
  let obj = {};
  let count = 1;
  [...s].forEach((el) => {
    let first = Object.keys(obj)[0];
    if (!Object.keys(obj).includes(el)) {
      obj[el] = 0;
    }
    let acc = Object.values(obj).reduce((acc, el) => acc + el);

    if (acc === obj[first] * 2) {
      count += 1;
      obj = {};
      obj[el] = 0;
    }

    obj[el] += 1;
  });
  return count;
}

// 재야의 고수
// function solution(s, count = 0) {
//   if (!s) return count;
//   let [first, ...rest] = s.split("");
//   let countSame = 1;
//   let countInSame = 0;
//   let i = 0;
//   for (; i < rest.length; i++) {
//     if (rest[i] === first) countSame++;
//     else countInSame++;
//     if (countSame === countInSame) break;
//   }
//   return solution(rest.slice(i + 1).join(""), count + 1);
// }

console.log(solution(str));
