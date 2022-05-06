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
  let obj2 = {};
  report = report.map((x) => x.split(" "));
  let reported = new Set(report.map((x) => x[1]));
  reported = [...reported];
  console.log(reported);
  let count = 0;
  let before = [];
  let answer = [];

  for (let i = 0; i < id_list.length; i++) {
    for (let id of id_list) {
      obj[id] = report
        .map((x) => (x[0] == id ? x[1] : 0))
        .filter((x) => x !== 0);
      console.log(obj);
      if (obj[id].includes(id_list[i])) {
        count += 1;
      }
    }
    if (count <= k) {
      before.push(count);
      count = 0;
    }
  }
  for(let i in before) {
    obj2[id_list[i]] = before[i]
  }

  return obj2;
}

console.log(solution(id_list, report, k));
