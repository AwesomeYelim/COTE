let 사각형 = 5;
let 탐색가능지역 = 3;
let 지뢰밭 = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
];
let arr1 = [];
let arr2 = [];
let count1 = 0;
let count2 = 0;

for(let i of 지뢰밭){
  for(let j of i){
    arr1.push(j)
  }
}
console.log(arr1)

function sol(c1, c2){
  let n = 0;
  for(let i = c2; i < 탐색가능지역 + c2; i++){
    n += 1
    if(n == 9){
      return c1;
    }
    if(arr1[i] === 1){
      c1++;
      sol(c1, c2)
    }
    break;
    
  }
  

}

console.log(sol(count1, count2))
// n n+1 n+2 
// n+5 n+6 n+7 
// n+10 n+11 n+12

// 1 2 3
// 6 7 8
// 11 12 13

// 3 4 5
// 7 8 9
// 12 13 14


// 22 23 24


// 지뢰밭[2][2]
// 지뢰밭[2][3]
// 지뢰밭[2][4]
// 지뢰밭[3][2]
// 지뢰밭[3][3]
// 지뢰밭[3][4]
// 지뢰밭[4][2]
// 지뢰밭[4][3]
// 지뢰밭[4][4]
