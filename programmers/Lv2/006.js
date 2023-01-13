// Lv2. 귤 고르기

// const [...fruits] = [6, [1, 3, 2, 5, 4, 5, 2, 3]];
// const [...fruits] = [4, [1, 3, 2, 5, 4, 5, 2, 3]]
const [...fruits] = [2, [1, 1, 1, 1, 2, 2, 2, 3]];

function solution(k, tangerine) {
  let obj = {};
  tangerine.forEach((n) => {
    obj[n] = ++obj[n] || 1;
  });
  let arr = Object.values(obj).sort((a, b) => b - a);

  let answer = 0;
  while (k > 0) {
    answer++;
    k -= arr.splice(0, 1)[0];
  }

  return answer;
}

console.log(solution(...fruits));
