// Lv2. 요격 시스템

const target = [
  [4, 5],
  [4, 8],
  [10, 14],
  [11, 13],
  [5, 12],
  [3, 7],
  [1, 4],
];

function solution(targets) {
  targets.sort((a, b) => b[0] - a[0]);
  let answer = 1;
  let [[point]] = targets;
  for (let item of targets) {
    const [s, e] = item;
    if (e <= point) {
      point = s;
      answer++;
    }
  }

  return answer;
}

console.log(solution(target));
