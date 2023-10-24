// Lv2. 연속된 부분 수열의 합

const sk = [[1, 2, 3, 4, 5], 7]; // [2, 3]
// const sk = [[1, 1, 1, 2, 3, 4, 5], 5]; // [6, 6]
// const sk = [[2, 2, 2, 2, 2], 6];

// 정답률 44%
// function solution(s, k) {
//   let a = [];
//   if(s.includes(k)) {
//     const h = s.indexOf(k)
//     return [h, h]
//   }
//   for (let i in s) {
//     let p = 0;
//     a[0] = +i;
//     const r = s.slice(i, s.length);
//     for (let j in r) {
//       p += r[j];
//       if (p === k) {
//         a[1] = a[0]+ +j;
//         break;
//       }
//     }

//     if (a.length > 1) break;
//   }

//   return a;
// }

// 정답률 35%
// function solution(s, k) {
//   let arr = [];
//   let l = 0;
//   let r = 0;
//   let sum = s[r];

//   if (s.includes(k)) {
//     const i = s.indexOf(k);
//     arr = [i, i];
//     return arr;
//   }
//   while (s.length - 1 > r) {
//     if (sum == k) {
//       arr = [l, r];
//       break;
//     } else if (sum < k) {
//       r++;
//       if (l !== r) {
//         sum += s[r];
//       }
//     } else if (sum > k) {
//       sum -= s[l];
//       l++;
//     }
//   }
//   return arr;
// }

function solution(se, k) {
  var a = [];
  let p = [0];
  let m = Infinity;
  se.forEach((num, i) => {
    p.push(num + p[i]);
  });

  let l = 0;
  let r = 0;

  while (l <= r) {
    let s = p[r] - p[l];
    if (s === k) {
      let c = r - 1 - l;
      if (m > c) {
        a = [l, r - 1];
        m = c;
      }
    }
    if (s < k) {
      r++;
    } else l++;
  }

  return a;
}

console.log(solution(...sk));
