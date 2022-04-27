// 내가 시도한 풀이

// let point = [1, 1, 3, 2, 5];
// 1, 1, 3, 2, 5
// let dish = 3;//index

const point = [5, 2, 3, 1, 2, 5];
// 5, 2, 3, 1, 2, 5, 5, 2, 3, 5
let dish = 1; //index

function rotate1(p, d) {
  let arr = [];
  let sort = point.slice();
  sort = sort.sort((a, b) => a - b);

  rotate2(p, d);
  return sort;
}

function rotate2(p, d) {
  for (let i in p) {
    
  }
}
console.log(rotate1(point, dish));
