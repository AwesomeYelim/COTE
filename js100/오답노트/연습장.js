let stmp = [
  [1, 1, 1, 2],
  [2, 0, 0, 0], 
  [1, 1, 1, 1],
  [0, 0, 0, 0],
];

let k = 1;
  
function sol(stmp, k) {
  let n = stmp.length;
  let p = [];

  for (let i = 0; i < n; i++) {
    p.push(Array(n).fill(0)); //0으로 채워진 n*n 배열을 만들어준다
  }
  //   console.log(p)
  // 회전시키기 전 한번 찍어주기
  p = sum_matrix(p, stmp);

  for (let i = 0; i < k; i++) {
    stmp = rotate(stmp);
    p = sum_matrix(p, stmp);
  }

  return p;
}

// 회전
function rotate(stmp) {
  let n = stmp.length;
  let rot = [];

  for (let i = 0; i < n; i++) {
    rot.push(Array(n).fill(0));
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rot[j][n - 1 - i] = stmp[i][j];
    }
  }
  return rot;
}

//총합
function sum_matrix(p, stmp) {
  let n = stmp.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      p[i][j] += stmp[i][j];
    }
  }
  return p;
}
console.log(sol(stmp, k));

// i,j -> j,N-1-i
// 0,0 -> 0,3
// 0,1 -> 1,3
// 0,2 -> 2,3
// 0,3 -> 3,3

// 1,0 -> 0,2
// 1,1 -> 1,2
// 1,2 -> 2,2
// 1,3 -> 3,2

// 2,0 -> 0,1
// 2,1 -> 1,1
// 2,2 -> 2,1
// 2,3 -> 3,1

// 3,0 -> 0,0
// 3,1 -> 1,0
// 3,2 -> 2,0
// 3,3 -> 3,0