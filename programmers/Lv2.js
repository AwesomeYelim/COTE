// 문제 1. 문자열 압축

// let str = "aabbaccc";
// let str = "ababcdcdababcdcd";
// let str = "abcabcdede";
// let str = 'abcabcabcabcdededededede'
// let str = 'xababcdcdababcdcd'

// 시도한답
// function sol(s) {
//   let answer = [];
//   let answer2 = [];
//   let answer3 = [];
//   let answer4 = [];
//   let answer5 = [];
//   let count = 1;

//   for (let i = 1; i < s.length + 1; i++) {
//     for (let j = 0; j < i; j++) {
//       let slice = s.slice(j, s.length + 1 - i);
//       if (slice.length !== 0 && slice.length !== s.length - 1) {
//         if (!answer.includes(slice) && slice[0] == s[0]) {
//           answer.push(slice);
//         }
//       }
//     }
//   }
//   console.log(answer);

//   for (let i of answer) {
//     let 나머지 = s.replace(i, "");

//     while (나머지.includes(i)) {
//       나머지 = 나머지.replace(i, "");
//       count += 1;
//       answer2.push(나머지);
//       answer4.push(i);
//     }

//     // while(!나머지.includes(i)){

//     // }
//   }
//   for (let i of answer2) {
//     i = i.length;
//     answer3.push(i);
//   }
//   for (let i of answer4) {
//     i = i.length;
//     answer5.push(i);
//   }
//   return Math.min.apply(null, answer3) + Math.max.apply(null, answer5);
// }

// console.log(sol(str));

// 다른사람풀이
// function sol(s) {
//     let min_len = s.length;

//     for (let i = 1; i <= parseInt(s.length / 2); i++) {
//         let prev = s.substr(0, i);
//         let count = 1;
//         let str = '';

//         for (let k = i; k < s.length; k += i) {
//             const cur = s.substr(k, i);
//             // console.log(cur)
//             if (prev === cur) count++;
//             else {
//                 str += (count > 1 ? String(count) : '') + prev;
//                 count = 1;
//                 prev = cur;
//             }
//         }
//         str += (count > 1 ? String(count) : '') + prev;

//         min_len = Math.min(min_len, str.length)
//     }

//     return min_len;
// }

// console.log(sol(str));

// 문제 2. 오픈채팅방

let record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

// 내가푼답
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

// 다른사람 풀이(숏코딩)
function solution(record) {
  var nick = {},
    a = record.map((v) => v.split(" "));
  a.slice()
    .reverse()
    .forEach((v) => {
      if (v[2] && !nick[v[1]]) {
        nick[v[1]] = v[2];
      }
    });
  return a
    .filter((v) => {
      return v[0] !== "Change";
    })
    .map((v) => {
      return v[0] === "Enter"
        ? nick[v[1]] + "님이 들어왔습니다."
        : nick[v[1]] + "님이 나갔습니다.";
    });
}
