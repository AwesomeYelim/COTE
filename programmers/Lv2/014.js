// const plans = [
//   ["korean", "11:40", "30"],
//   ["english", "12:10", "20"],
//   ["math", "12:30", "40"],
// ];
const plans = [
  ["science", "12:40", "50"],
  ["music", "12:20", "40"],
  ["history", "14:00", "30"],
  ["computer", "12:30", "100"],
];
// const plans = [["aaa", "12:00", "20"], ["bbb", "12:10", "30"], ["ccc", "12:40", "10"]]

function solution(plans) {
  let answer = [];
  plans.sort((a, b) => {
    const t = (el) => {
      const [h, m] = el[1].split(":");
      const n = +h * 60 + +m;
      return n;
    };

    return t(a) - t(b);
  });

  console.log(plans);
  return answer;
}

console.log(solution(plans));
