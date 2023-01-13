// Lv 1. 로또의 최고 순위와 최저 순위

// 내가푼답
function solution(lottos, win_nums) {
  let zero = lottos.filter((a) => 0 === a).length;
  let origin = lottos.filter((a) => win_nums.includes(a)).length;

  let best = 7 - (zero + origin);
  let worst = 7 - origin;

  if(best === 7){
      best = 6;
  }
  if(worst === 6){
      worst = 6;
  }

  var answer = [];
  answer.push(best, worst);
  return answer;
}

const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];

console.log(solution(lottos, win_nums));

// 다른사람푼답
// function solution(lottos, win_nums) {
//     const rank = [6, 6, 5, 4, 3, 2, 1];

//     let minCount = lottos.filter(v => win_nums.includes(v)).length;
//     let zeroCount = lottos.filter(v => !v).length;

//     const maxCount = minCount + zeroCount;

//     return [rank[maxCount], rank[minCount]];
// }
// const lottos = [44, 1, 0, 0, 31, 25];
// const win_nums = [31, 10, 45, 1, 6, 19];

// console.log(solution(lottos, win_nums));

// O 