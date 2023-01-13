// Lv1. 내적
let a = [1, 2, 3, 4];
let b = [-3, -1, 0, 2];

// 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
function solution(a, b) {
  let answer = a.reduce((x, y, i) => {
    return x += y * b[i];
  }, 0);

  return answer;
}
console.log(solution(a, b));
