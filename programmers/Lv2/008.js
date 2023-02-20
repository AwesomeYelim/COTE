// Lv2. 시소 짝꿍
const weights = [100, 180, 360, 100, 270];

// 시간초과 걸림
function solution(weights) {
  const divi = [1, 2, 3 / 2, 4 / 3];
  let count = 0;
  weights
    .sort((a, b) => b - a)
    .forEach((el_1, i) => {
      weights.forEach((_, j) => {
        return i <= j && divi.includes(el_1 / weights[j + 1]) && count++;
      });
    });
  return count;
}

// 다른 사람 풀이
// function solution(weights) {
//   let answer = 0;
//   const store = {};
//   const cases = [1, 3/2, 2, 4/3];
//   weights.sort((a,b)=> b - a).forEach((w) => {
//       let s;
//       cases.forEach((i)=>{
//           if( s = w * i, store[s] ){
//             answer += store[s];
//           }
//         });
//         if (!store[w]) store[w] = 1;
//         else store[w]++;
//   });
//   return answer;
// }

console.log(solution(weights));
