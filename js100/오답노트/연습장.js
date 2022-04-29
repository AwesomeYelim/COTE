// function fn(n) {
//   if (n === 1 || n === 2) {
//     return 1;
//   } else {
//     return fn(n - 1) + fn(n - 2);
//   }
// }

// console.log(fn(6));

let n = 6;
let memory = Array(n + 1).fill(0);

function fn(n) {
  if (n === 1 || n === 2) {
    memory[n] = 1;
    // console.log(memory[n]);
    return 1;
  } else if (memory[n] !== 0) {
    return memory[n];
  } else {
    memory[n] = fn(n - 1) + fn(n - 2);
    console.log(memory[n]);
    return memory[n];
  }
}

// 1
// 1
// 2
// 1
// 3
// 2
// 5
// 3
// 8

console.log(fn(n)); // 8

// let 텃밭 = `0 0 0 0 0
// 0 1 0 0 0
// 0 1 0 0 0
// 0 0 1 0 0
// 0 0 0 1 0`
//   .replace(/1/g, "!")
//   .replace(/0/g, "1")
//   .replace(/!/g, "0")
//   .split("\n");

// console.log(텃밭);

// let 역전텃밭 = [];
// for (let row of 텃밭) {
//   역전텃밭.push(row.split(" "));
// }

// function sol(역전텃밭) {
//   const 높이 = 역전텃밭.length;
//   const 넓이 = 역전텃밭[0].length;
//   let max = 0;
//   let posx = 0;
//   let posy = 0;

//   for (let i = 0; i < 높이; i++) {
//     for (let j = 0; j < 넓이; j++) {
//       역전텃밭[i][j] = parseInt(역전텃밭[i][j], 10);
//     }
//   }
//   for (let i = 1; i < 높이; i++) {
//     for (let j = 1; j < 넓이; j++) {
//       if (역전텃밭[i][j] == 1) {
//         let min;
//         //좌측원소의 값이 가장 작을 경우
//         if (역전텃밭[i - 1][j] >= 역전텃밭[i][j - 1]) {
//           min = 역전텃밭[i][j - 1];

//           // 윗측원소의 값이 가장 작을 경우
//         } else if (역전텃밭[i - 1][j] <= 역전텃밭[i][j - 1]) {
//           min = 역전텃밭[i - 1][j];
//         }

//         // 대각선 원소의 값이 가장 작은 경우
//         if (min >= 역전텃밭[i - 1][j - 1]) {
//           min = 역전텃밭[i - 1][j - 1];
//         }
//         // 현재 기준점이 그릴수 없는 가장 큰 정사각형의 한변의 길이
//         역전텃밭[i][j] = min + 1;

//         // 텃밭 배열에서 가장 큰 숫자 찾기
//         if (max < 역전텃밭[i][j]) {
//           max = 역전텃밭[i][j];
//           posx = j;
//           posy = i;
//         }
//       }
//     }
//   }
//   // 밭을 # 으로 표기
//   for (let i = posy - (max - 1); i < posy + 1; i++) {
//     for (let j = posx - (max - 1); j < posx + 1; j++) {
//       역전텃밭[i][j] = "#";
//     }
//   }
//   // 숫자를 다시 0과 1로 표기
//   for (let i = 0; i < 높이; i++) {
//     for (let j = 0; j < 넓이; j++) {
//       if (역전텃밭[i][j] >= 1) {
//         역전텃밭[i][j] = 0;
//       } else if (역전텃밭[i][j] == 0) {
//         역전텃밭[i][j] = 1;
//       }
//     }
//   }
//   // 밭 출력
//   for (let i of 역전텃밭) {
//     console.log(i);
//   }
//   // 크기 출력
//   console.log(`${max} x ${max}`);
// }

// sol(역전텃밭);
