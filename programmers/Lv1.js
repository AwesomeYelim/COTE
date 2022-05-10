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

function solution(s) {
  var answer = 0;
  return answer;
}