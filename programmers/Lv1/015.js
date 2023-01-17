// Lv.1 과일 장수

// const [...item] = [3, 4, [1, 2, 3, 1, 2, 3, 1]];
const [...item] = [4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]];

function solution(k, m, score) {
  score = score
    .sort()
    .map((el, i) => {
      el = i % m || score.slice(i, i + m);
      el = el.length === m && Math.max(...el) <= k && Math.min(...el) * m;
      return el && el;
    })
    .reduce((acc, el) => acc + el);
  return score;
}


// 재야의 고수
// solution = (_, m, s) => s.sort().filter((_, i) => !((s.length - i) % m)).reduce((a, v) => a + v, 0) * m


console.log(solution(...item));
