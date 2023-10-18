// Lv2. 두 원 사이의 정수 쌍

const r = [4, 6];

// 4, 6, 68
// 2, 4, 40
// 9, 20, 1008
// 10, 20, 952
// 999999, 1000000, 6281440

// function solution(r1, r2) {
//   if (r1 === r2) return 0;
//   let answer = 0;
//   let s = Math.min(r1, r2);
//   let d = Math.abs(r1 - r2);
//   while (d > 0) {
//     if (s > 0) {
//       answer += (s * 2 - 1) * 4;
//       if (d === 1) {
//         answer += 8;
//         break;
//       }
//       s++;
//       d--;
//     }
//   }

//   return answer;
// }
function solution(r1, r2) {
  var answer = 0;
  let s = Math.min(r1, r2);
  let b = Math.max(r1, r2);
  let ssqr = s * s;
  let bsqr = b * b;

  for (let x = 0; x <= b; x++) {
    let yMin;
    if (ssqr - x * x <= 0) yMin = 1;
    else yMin = Math.ceil(Math.sqrt(ssqr - x * x));
    let yMax = parseInt(Math.sqrt(bsqr - x * x));
    answer += yMax - yMin + 1;
  }

  return answer * 4;
}
console.log(solution(...r));
