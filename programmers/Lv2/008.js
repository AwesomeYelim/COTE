// Lv2. 시소 짝꿍
const weights = [100, 180, 360, 100, 270];

function solution(weights) {
  let [count, right, left] = [0, 0, 0];
  while (right < weights.length) {
    // 최대공약수 구하기
    const factor = (a, b) => {
        return b === 0 ? a : factor(b, a % b)
    };
    
    ++right;
    // console.log(right, left);
  }
}

console.log(solution(weights));
