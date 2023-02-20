// Lv2. 시소 짝꿍
const weights = [100, 180, 360, 100, 270];

function solution(weights) {
  let include = [2, 3, 4];
  let [count, left, right] = [0, 0, 0];
  while (left < weights.length) {
    // 최대공약수 구하기
    const factor = (a, b) => {
      return b === 0 ? a : factor(b, a % b);
    };
    // if (
    //   include.includes(weights[left] / factor(weights[left], weights[right])) &&
    //   include.includes(weights[right] / factor(weights[left], weights[right]))
    // ) {
    //   count++;
    // } else {
    //   ++right;
    // }
    ++left;
    // console.log(right, left);
  }
  return count;
}

console.log(solution(weights));
