// Lv2. 오픈채팅방

let record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

// // 내가푼답
function solution(record) {
  let info = record.map((x) => x.split(" "));
  let obj = {};
  let answer = [];
  for (let i of info) {
    if (0 < i[1].length < 11 || 0 < i[2].length < 11) {
      obj[i[1]] = i[2];
    }
  }
  for (let i of info) {
    if (i[0] === "Enter") {
      answer.push(`${obj[i[1]]}님이 들어왔습니다.`);
    }
    if (i[0] === "Leave") {
      answer.push(`${obj[i[1]]}님이 나갔습니다.`);
    }
  }
  // let id = answeray.from(new Set(answer))
  // console.log(id)

  return answer;
}

console.log(solution(record));

// // 다른사람 풀이(숏코딩)
// function solution(record) {
//   var nick = {},
//     a = record.map((v) => v.split(" "));
//   a.slice()
//     .reverse()
//     .forEach((v) => {
//       if (v[2] && !nick[v[1]]) {
//         nick[v[1]] = v[2];
//       }
//     });
//   return a
//     .filter((v) => {
//       return v[0] !== "Change";
//     })
//     .map((v) => {
//       return v[0] === "Enter"
//         ? nick[v[1]] + "님이 들어왔습니다."
//         : nick[v[1]] + "님이 나갔습니다.";
//     });
// }

// O