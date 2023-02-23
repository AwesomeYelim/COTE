// Lv2. 숫자 변환하기

// const xyn = [10, 40, 5];
// const xyn = [10, 40, 30];
// const xyn = [2, 5, 4];
const xyn = [10, 100, 1];

// 오류 5개 걸림
// function solution(x, y, n) {
//   let count = 0;
//   while (y > 0) {
//     if (x === y) return 0;
//     if (!(y - (x + n))) {
//       count++;
//       if (!(y - (x + n))) return count;
//       continue;
//     }
//     if (Number.isInteger(y / (x * 3))) {
//       count += y / (x * 3);
//       y %= x * 3;
//       if (!(y %= x * 3)) return count;
//       continue;
//     }
//     if (Number.isInteger(y / (x * 2))) {
//       count += y / (x * 2);
//       y %= x * 2;
//       if (!(y %= x * 2)) return count;
//       continue;
//     }
//     count = -1;
//     return count;
//   }
//   return count;
// }

// 다른 사람 풀이
function solution(x, y, n) {
    if (x === y) return 0;
    const dp = {};
    dp[x] = 0;
    let data = [x];
    while (data.length) {
      const newData = [];
      for (const d of data) {
        for (const e of [d + n, d * 2, d * 3]) {
          if (e > y || dp[e]) continue;
          if (e === y) return dp[d] + 1;
          dp[e] = dp[d] + 1;
          newData.push(e);
        }
      }
      data = newData;
    }
    return -1;
  }

console.log(solution(...xyn));
