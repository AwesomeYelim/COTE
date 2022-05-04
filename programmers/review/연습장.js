let id_list = ["muzi", "frodo", "apeach", "neo"];
let report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
let k = 2;

function solution(id_list, report, k) {
  let obj = {};
  report = report.map((x) => x.split(" "));
  let reported = new Set(report.map((x) => x[1]));
  reported = [...reported];
  let count = 0;
  let answer = [];
  console.log(reported);

  for (let el of reported) {
    for (let id of id_list) {
      obj[id] = report
        .map((x) => (x[0] == id ? x[1] : 0))
        .filter((x) => x !== 0);

      if (obj[id].includes(el)) {
        count += 1;
      } 
    }
    if (count <= k) {
      answer.push(count);
      count = 0;
    }
    // if (count === 0) {
    //   answer.push(count);
    // }
  }

  return answer;
}

console.log(solution(id_list, report, k));
