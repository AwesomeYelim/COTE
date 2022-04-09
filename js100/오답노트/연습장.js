let graph = {
  E: ["D", "A"],
  F: ["D"],
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
};

function dfs(graph, start) {
  let visited = [];
  let queue = [start];

  while (queue.length != 0) {
    let n = queue.shift(); // queue 의 맨 앞의 요소만 추출함(깊이 탐색과 유일하게 다른 부분)
    //   console.log(n)
    if (!visited.includes(n)) {
      visited.push(n);
      let sub = graph[n].filter((x) => !visited.includes(x));
      for (let i of sub) {
        queue.push(i);
      }
    }
  }
  return visited;
}

console.log(dfs(graph, "E"));