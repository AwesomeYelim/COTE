// 1000.

// let a = Number(prompt())
// let b = Number(prompt())

// if(a > 0 && b < 10){
//     console.log(a+b)
// }

// 1. 신고결과 받기
// https://programmers.co.kr/learn/courses/30/lessons/92334

// 구글링 참고하여 푼답
// function solution(id_list, report, k) {
//     const answer = new Array(id_list.length);
//     answer.fill(0)
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





// 2. 로또의 최고 순위와 최저 순위

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