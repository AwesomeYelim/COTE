// 1000.

// let a = Number(prompt())
// let b = Number(prompt())

// if(a > 0 && b < 10){
//     console.log(a+b)
// }

// 문제 1. 신고결과 받기
// https://programmers.co.kr/learn/courses/30/lessons/92334

// 내가푼답
// let id_list = ["muzi", "frodo", "apeach", "neo"];
// let report = [
//   "muzi frodo",
//   "apeach frodo",
//   "frodo neo",
//   "muzi neo",
//   "apeach muzi",
// ];
// let k = 2;

// function solution(id_list, report, k) {
//   let obj = {};
//   report = report.map((x) => x.split(" "));
//   let reported = new Set(report.map((x) => x[1]));
//   reported = [...reported];
//   let count = 0;
//   let answer = [];
//   console.log(reported);

//   for (let el of reported) {
//     for (let id of id_list) {
//       obj[id] = report
//         .map((x) => (x[0] == id ? x[1] : 0))
//         .filter((x) => x !== 0);

//       if (obj[id].includes(el)) {
//         count += 1;
//       }
//     }
//     if (count <= k) {
//       answer.push(count);
//       count = 0;
//     }
//     // if (count === 0) {
//     //   answer.push(count);
//     // }
//   }

//   return answer;
// }

// console.log(solution(id_list, report, k));

// 구글링 참고하여 푼답
// function solution(id_list, report, k) {
//     const answer = new Array(id_list.length).fill(0);
//     const report_list = {} // answer 배열을 id_list의 크기만큼 할당하고 fill함수를 사용하여 0으로 초기화한다.

//     id_list.map((user)=>{
//         report_list[user] = [] // report_list 객체에 key는 uesr의 id 값을 value는 신고한 사람을 담기위한 빈 배열을 추가한다.
//     })

//     report.map((user)=>{
//         const [user_id, report_id] = user.split(' ')
//         if(!report_list[report_id].includes(user_id)){
//             report_list[report_id].push(user_id)
//         }
//     })

//     for(const key in report_list){
//         if(report_list[key].length >= k){ //이용정지 유저
//             report_list[key].map((user)=>{
//                 answer[id_list.indexOf(user)] += 1
//             })
//         }
//     }
//     return answer;
// }

// const id_list = ["muzi", "frodo", "apeach", "neo"]
// const report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
// const k = 2

// console.log(solution(id_list, report, k))

// 다른사람푼답
// function solution(id_list, report, k) {
//     let reports = [...new Set(report)].map(a=>{return a.split(' ')});
//     let counts = new Map();
//     for (const bad of reports){
//         counts.set(bad[1],counts.get(bad[1])+1||1)
//     }
//     let good = new Map();
//     for(const report of reports){
//         if(counts.get(report[1])>=k){
//             good.set(report[0],good.get(report[0])+1||1)
//         }
//     }
//     let answer = id_list.map(a=>good.get(a)||0)
//     return answer;
// }

// const id_list = ["muzi", "frodo", "apeach", "neo"]
// const report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
// const k = 2

// console.log(solution(id_list, report, k))

// X (배껴옴)

// 문제 2. 로또의 최고 순위와 최저 순위

// 내가푼답
// function solution(lottos, win_nums) {
//   let zero = lottos.filter((a) => 0 === a).length;
//   let origin = lottos.filter((a) => win_nums.includes(a)).length;

//   let best = 7 - (zero + origin);
//   let worst = 7 - origin;

//   if(best === 7){
//       best = 6;
//   }
//   if(worst === 6){
//       worst = 6;
//   }

//   var answer = [];
//   answer.push(best, worst);
//   return answer;
// }

// const lottos = [44, 1, 0, 0, 31, 25];
// const win_nums = [31, 10, 45, 1, 6, 19];

// console.log(solution(lottos, win_nums));

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

// O (상태가 안좋아서 그지같이품)

// 문제 3. 신규 아이디 추천

// 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
// 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
//      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
// 내가푼답
// function solution(new_id) {

//     let lv1 = new_id.toLowerCase();
//     let lv2 = lv1.replace(/[^\w-._]+/g,'');
//     let lv3= lv2.replace(/\.{2,}/g, '.');
//     let lv4 = lv3.replace(/^\.|\.$/g, '');
//     let lv5 = lv4.replace(/^$/, 'a');
//     let lv6 = lv5.slice(0, 15).replace(/\.$/, '');
//     let lv7 = lv6.length > 2 ? lv6 : lv6 + lv6.charAt(lv6.length - 1).repeat(3 - lv6.length)

//     return lv7;
// }

// let new_id = 'z-+.^.'
// console.log(solution(new_id))

// 1. 다른사람풀이

// const solution = (new_id) => {
//     const id = new_id
//         .toLowerCase()
//         .replace(/[^\w\d-_.]/g, '')
//         .replace(/\.{2,}/g, '.')
//         .replace(/^\.|\.$/g, '')
//         .padEnd(1, 'a')
//         .slice(0, 15)
//         .replace(/^\.|\.$/g, '')
//     return id.padEnd(3, id[id.length-1])
// }

// // 2. 다른사람 풀이 (정규식 없이 품)

// function solution(nid) {
//   var ans = "";
//   for (let i = 0; i < nid.length; i++) {
//     let c = nid[i].toLowerCase();
//     if ("0123456789abcdefghijklmnopqrstuvwxyz.-_".indexOf(c) === -1) continue;
//     if (c === "." && ans[ans.length - 1] === "." && nid[i - 1]) continue;
//     ans += c;
//   }
//   if (ans[0] === ".") ans = ans.slice(1);
//   ans = ans.slice(0, 15);
//   if (ans[ans.length - 1] === ".") ans = ans.slice(0, ans.length - 1);
//   if (!ans) ans = "a";
//   while (ans.length < 3) ans += ans[ans.length - 1];
//   return ans;
// }

// 문제 4. 숫자 문자열과 영단어

// 내가푼답
// const num = "23four5six7";

// function solution(answer) {
//   const obj = {
//     0: "zero",
//     1: "one",
//     2: "two",
//     3: "three",
//     4: "four",
//     5: "five",
//     6: "six",
//     7: "seven",
//     8: "eight",
//     9: "nine",
//   };

//   for (let key in obj) {
//     if (answer.includes(obj[key]) && answer[0] !== 0 && answer[0] !== "z") {
//       answer = answer.replace(obj[key], key);
//     }
//   }
//   answer = Number(answer);
//   return answer;
// }

// console.log(solution(num));

//다른사람 풀이

// const str = "23four5six7";

// function solution(s) {
//   let num = [
//     "zero",
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine"
//   ];
//   let answer = s;

//   for(let i = 0; i < num.length; i++) {
//     let arr = answer.split(num[i]);
//     answer = arr.join(i);
//   }

//   return Number(answer);
// }

// console.log(solution(str))

// 문제 5. 키패드 누르기
// 내가푼답
// const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
// const hand = "right";

// function solution(numbers, hand) {
//   var answer = "";
//   let arr = Array(2).fill(0);

//   for (let i of numbers) {
//     let 차1 = Math.abs(arr[0] - i);
//     let 차2 = Math.abs(arr[1] - i);
//     // console.log(차1, 차2)

//     console.log(arr);
//     if (i % 3 === 1) {
//       // 1, 4, 7
//       answer += "L";
//       arr[0] = i;
//     } else if (i % 3 === 0) {
//       // 3, 6, 9
//       answer += "R";
//       arr[1] = i;
//     } else if (i % 3 === 2 || i === 0) {
//       // 2, 5, 8, 0

//       if ((차1 === 차2 && 차1 === 3) || 차2 === 3) {
//         if (hand === "right") {
//           answer += "R";
//         } else if (hand === "left") {
//           answer += "L";
//         }
//       } else if (차1 > 차2) {
//         answer += "R";
//         arr[1] = i;
//       } else if (차1 < 차2) {
//         answer += "L";
//         arr[0] = i;
//       }
//     }
//   }

//   return answer;
// }

// console.log(solution(numbers, hand));

// // 다른사람풀이

// function solution(numbers, hand) {
//   hand = hand[0] === "r" ? "R" : "L"
//   let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2]
//   let h = { L: [1, 1], R: [1, 1] }
//   return numbers.map(x => {
//     if (/[147]/.test(x)) {
//       h.L = [position[x], 1]
//       return "L"
//     }
//     if (/[369]/.test(x)) {
//       h.R = [position[x], 1]
//       return "R"
//     }
//     let distL = Math.abs(position[x] - h.L[0]) + h.L[1]
//     let distR = Math.abs(position[x] - h.R[0]) + h.R[1]
//     if (distL === distR) {
//       h[hand] = [position[x], 0]
//       return hand
//     }
//     if (distL < distR) {
//       h.L = [position[x], 0]
//       return "L"
//     }
//     h.R = [position[x], 0]
//     return "R"
//   }).join("")
// }

// 문제 6. 크레인 인형뽑기 게임

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
  moves = moves.map((x) => x - 1);
  let answer = 0;
  let arr = [];

  for (let i in board) {
    for (let j in board[i]) {
      console.log(board[j][i]);
    }
  }

  
  console.log(moves);
  // for (let i of board) {
  //   for (let j of moves) {
  //     j = j-1
  //     console.log(i[j]);
  //   }
  // }

  return answer;
}

solution(board, moves);
