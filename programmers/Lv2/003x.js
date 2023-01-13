// Lv 2. 마법의 엘레베이터

let storey = 16;


// function solution(storey) {
//   if(storey < 5) return storey;
//   const num = [...storey.toString()].reverse().reduce((acc, el, i, arr) => {
//     [el, acc] = [+el, +acc];
//     if (el === 5 && arr[i + 1] > 5) {
//       acc += 1;
//       el = 10 - el;
//     } else {
//       el = el;
//     }
//     return acc + el;
//   }, 0);
//   return num;
// }

// 개지리는 방법
function solution(storey) {
    if (storey < 5) return storey;
    const r = storey % 10;
    const m = (storey - r) / 10;
    return Math.min(r + solution(m), 10 - r + solution(m + 1));
}

console.log(solution(storey));
// solution(storey)


