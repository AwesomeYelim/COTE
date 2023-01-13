//  Lv1. 크기가 작은 부분 문자열

let num = "3141592";
let p = "271";

function solution(inum, p) {
  let numLength = inum.length;
  let pLength = p.length;
  inum.split("");
  let answer = 0;
  for (let i = 0; i <= numLength - pLength + 1; i++) {
    const slice = inum.slice(i, i + pLength);
    if (+slice <= +p && slice.length === pLength) answer += 1;
  }
  return answer;
}

console.log(solution(num, p));
