// Lv2. 두 원 사이의 정수 쌍

const r = [9, 11];

function solution(r1, r2) {
  if (r1 === r2) return 0;
  let answer = 0;
  let s = Math.min(r1, r2);
  let d = Math.abs(r1 - r2);
  while (d > 0) {
    if (s > 0) {
      answer += 4 * (s * 2 - 1) + 4;
      //   console.log(answer);
      if (d === 1) {
        answer += 4;
      }
      s++;
      d--;
    }
  }

  return answer;
}

console.log(solution(...r));
