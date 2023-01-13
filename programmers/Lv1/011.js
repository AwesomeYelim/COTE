// Lv1. 가장 가까운 같은 글자

let words = "banana";

// function solution(words) {
//   let arr = [];
//   let num = [];

//   words.split("").forEach((el) => {
//     if (!arr.includes(el)) {
//       num.push(-1);
//     }
//     if(arr.includes(el)){
//       const rev = [...arr].reverse().indexOf(el) + 1
//       num.push(rev);
//     }
//     arr.push(el);
//     return num
//   });

//   return num
// }


// 디른 풀이
const solution = (s) =>
  [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
    return count < 0 ? count : i - count;
  });

console.log(solution(words));
