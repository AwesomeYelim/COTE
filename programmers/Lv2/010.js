// Lv2. 무인도 여행

const maps = ["X591X", "X1X5X", "X231X", "1XXX1"];
// const maps = ["XXX", "XXX", "XXX"];

// function solution(maps) {
//   let answer = [];
//   let count = 0;

//   maps.forEach((el, m_i) => {
//     [...el].forEach((x, el_i) => {
//       if (x !== "X") {
//         x = +x;
//         if (!maps[m_i][el_i - 1] || !maps[m_i][el_i + 1]) {
//           answer.push(x);
//           return answer;
//         }
//         count += x;
//         return count;
//       }
//     });
//   });
//   answer.push(count);
//   answer = answer.sort((a, b) => a - b);
//   const [a] = answer;
//   return !a ? [-1] : answer;
// }


function solution(maps) {
  const answer = [];
  let [row, col] = [maps.length, maps[0].length];
  let [dx, dy] = [
    [-1, 0, 1, 0],
    [0, -1, 0, 1],
  ];
  const table = maps.map((v) => v.split(""));

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (table[i][j] === "X") continue;
      let cnt = +table[i][j];
      table[i][j] = "X";
      let stack = [[i, j]];

      while (stack.length) {
        let [x, y] = stack.pop();
        for (let k = 0; k < 4; k++) {
          let [nx, ny] = [x + dx[k], y + dy[k]];
          if (
            nx >= 0 &&
            nx < row &&
            ny >= 0 &&
            ny < col &&
            table[nx][ny] !== "X"
          ) {
            cnt += +table[nx][ny];
            table[nx][ny] = "X";
            stack.push([nx, ny]);
          }
        }
      }
      answer.push(cnt);
    }
  }
  answer.sort((a, b) => a - b);
  return answer.length ? answer : [-1];
}

console.log(solution(maps));
