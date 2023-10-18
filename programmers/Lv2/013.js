// Lv. 연속된 부분 수열의 합

// const sk = [[1, 2, 3, 4, 5], 7]; // [2, 3]
// const sk = [[1, 1, 1, 2, 3, 4, 5], 5] // [6, 6]
const sk = [[2, 2, 2, 2, 2], 6]

// 정답률 44%
function solution(s, k) {
  let a = [];
  if(s.includes(k)) {
    const h = s.indexOf(k)
    return [h, h]
  }
  for (let i in s) {
    let p = 0;
    a[0] = +i;
    const r = s.slice(i, s.length);
    for (let j in r) {
      p += r[j];
      if (p === k) {
        a[1] = a[0]+ +j;
        break;
      }
    }

    if (a.length > 1) break;
  }

  return a;
}

// function solution(s, k) {
//   let a = [];
//   const sorted = [...s].sort((a, b) => b - a);
//   console.log(s, sorted);
//   for (let el of sorted) {
//     let c = k;
//     c -= el;
//     const i = s.indexOf(el);
//     if (!c) {
//       return [i, i];
//     } else {
//       if (i < s.length) {
//         c -= s[i + 1];
//         if (c === 0) return (a = [i, i + 1]);
//         c += s[i + 1];
//         c -= s[i - 1];
//         if (c === 0) return (a = [i - 1, i]);
//       } else {
//         c -= s[i - 1];
//         if (!c) return (a = [i - 1, i]);
//       }
//     }
//   }

//   return a;
// }

console.log(solution(...sk));
