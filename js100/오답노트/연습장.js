let graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};
let graph_k = Object.keys(graph)
// console.log(graph_k)

function rotate(start, end, graph) {
    let count = 0;

    for(let key of graph_k){
        let value = graph[key];
        // console.log(value)
        if(key === start){
            count += 1;
        }
        
        for(let j in value){
            // console.log(value[j])
            if(value[j] === end){
                return count;
            }
            if(value[j] !== end){
                console.log(value[j])
            }
        }
    }
}
let 입력 = 'A F'.split(' ')
let start = 입력[0]
let end = 입력[1]

console.log(rotate(start, end, graph));
