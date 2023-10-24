const plans = [
  ["korean", "11:40", "30"],
  ["english", "12:10", "20"],
  ["math", "12:30", "40"],
];
// const plans = [
//   ["science", "12:40", "50"],
//   ["music", "12:20", "40"],
//   ["history", "14:00", "30"],
//   ["computer", "12:30", "100"],
// ];
// const plans = [["aaa", "12:00", "20"], ["bbb", "12:10", "30"], ["ccc", "12:40", "10"]]

// 정확성: 45.8
// function solution(plans) {
//   let an = [];
//   let l = [];
//   const t = (el) => {
//     const [h, m] = el[1].split(":");
//     const n = +h * 60 + +m;
//     return n;
//   };
//   plans
//     .sort((a, b) => {
//       return t(a) - t(b);
//     })
//     .forEach((el, i, arr) => {
//       const [n, s, p] = el;
//       let d = n !== arr.at(-1)[0] ? t(arr[i + 1]) - t(el) : p;
//       if (d < +p) {
//         l.push(n);
//       } else {
//         an.push(n);
//       }
//     });
//   if (l.length) {
//     an = [...an, ...l.reverse()];
//   }
//   return an;
// }

// function solution(plans) {
//   const t = (el) => {
//     const [h, m] = el[1].split(":");
//     const n = +h * 60 + +m;
//     return n;
//   };
//   plans
//     .sort((a, b) => {
//       return t(a) - t(b);
//     })
//     .forEach((el) => {
//       el[1] = t(el);
//     });

//   let i = 0;
//   const s = [];
//   const f = [];

//   for (let t = 1; t < 1440; t++) {
//     if (s.length !== 0) {
//       let [n, _, p] = s.at(-1);
//       p--;
//       if (p === 0) {
//         s.pop();
//         f.push(n);
//       }
//     }

//     if (t === plans[i]?.[1]) {
//       s.push(plans[i][0]);
//       i++;
//     }
//   }

//   const answer = [...f, ...s.reverse()];
//   return answer;
// }

function solution(plans) {
  const np = plans
    .map(([n, s, p]) => {
      const [h, m] = s.split(":").map((str) => Number(str));
      const t = h * 60 + m;
      return { n, s: t, p: +p };
    })
    .sort((a, b) => a.s - b.s);

  let i = 0;
  const s = [],
    f = [];

  for (let t = 0; t < 1440; t++) {
    if (s.length !== 0) {
      const lp = s[s.length - 1];
      lp.p--;
      if (lp.p === 0) {
        s.pop();
        f.push(lp.n);
      }
    }

    if (t === np[i]?.s) {
      s.push(np[i]);
      i++;
    }
  }

  const uf = s.reverse().map(({ n }) => n);
  const a = [...f, ...uf];
  return a;
}

console.log(solution(plans));
