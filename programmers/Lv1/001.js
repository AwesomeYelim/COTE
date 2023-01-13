// Lv 1. 신고결과 받기
// https://programmers.co.kr/learn/courses/30/lessons/92334

// 내가푼답
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

// X 
