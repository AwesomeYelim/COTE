// let graph = {
//   A: ["B", "C"],
//   B: ["A", "D", "E"],
//   C: ["A", "F"],
//   D: ["B"],
//   E: ["B", "F"],
//   F: ["C", "E"],
// };
// let graph_k = Object.keys(graph)
// // console.log(graph_k)

// function rotate(start, end, graph) {
//     let count = 0;

//     for(let key of graph_k){
//         let value = graph[key];
//         // console.log(value)
//         if(key === start){
//             count += 1;
//         }
        
//         for(let j in value){
//             // console.log(value[j])
//             if(value[j] === end){
//                 return count;
//             }
//             if(value[j] !== end){
//                 console.log(value[j])
//             }
//         }
//     }
// }
// let 입력 = 'A F'.split(' ')
// let start = 입력[0]
// let end = 입력[1]

// console.log(rotate(start, end, graph));


let graph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"],
  };
  
  function 최단경로(graph, start, end) {
    let count = -1;
    let 거쳐감 = [start];
    let 최종 = [start];
  
    while (거쳐감.length !== 0) {
      count += 1;
      let s = 거쳐감.length;
      for (let i = 0; i < s; i++) {
        let n = 거쳐감.splice(0, 1);
        if (n == end) {
          return count;
        }
        for (let j in graph[n]) {
          if (!최종.includes(graph[n][j])) {
            최종.push(graph[n][j]);
            거쳐감.push(graph[n][j]);
          }
        }
      }
    }
  }
  
  // let 입력 = prompt('입력쓰').split(' ');
  let 입력 = ["A", "F"];
  let start = 입력[0];
  let end = 입력[1];
  
  console.log(최단경로(graph, start, end));