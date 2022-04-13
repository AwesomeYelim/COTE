let graph = {
  1: [2, 3, 4],
  2: [1, 3, 4, 5, 6],
  3: [1, 2, 7],
  4: [1, 2, 5, 6],
  5: [2, 4, 6, 7],
  6: [2, 4, 5, 7],
  7: [3, 5, 6],
};

// let 입력 = prompt('입력쓰').split(' ');
let 입력 = ["1", "7"];
let start = Number(입력[0]);
let end = Number(입력[1]);

let queue = [start];
let visited = [];

function 최장거리(q, visited) {
  let node = q[q.length - 1];
  let length = 0;

  if (node == end) {
    return visited.length;
  }
  if (visited.includes(node)) {
    return visited.length;
  } else {
    visited.push(node);
  }
  let max = [];

  for (let i in graph[node]) {
    q.push(graph[node][i]);
    max.push(length, 최장거리(q, visited));

    length = Math.max.apply(null, max);

    queue.pop();
  }
  return length;
}

console.log(최장거리(queue, visited));