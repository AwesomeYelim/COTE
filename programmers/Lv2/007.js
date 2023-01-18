// Lv2. 디펜스 게임

// const [...items] = [7, 3, [4, 2, 4, 5, 3, 3, 1]];
// const [...items] = [2, 4, [3, 3, 3, 3]]
// const [...items] = [7, 3, [5, 5, 5, 5, 2, 3, 1]];
// const [...items] = [1, 6, [2, 2, 2, 2, 3, 3, 1]];
// const [...items] = [10, 1, [2, 2, 2, 2, 2, 10]];
const [...items] = [10, 1, [2, 2, 2, 2, 10]];

// 시간 복잡도 걸림
function solution(n, k, enemy) {
  const len = enemy.length;
  if(k > len) return len
  while (k) {
    enemy.splice(enemy.indexOf(Math.max(...enemy)), 1);
    k -= 1;
  }
  if(!enemy.length) return len
  enemy = enemy
    .map((el) => {
      n -= el;
      return n < 0 && el;
    })
    .filter((el) => el);
  return len - enemy.length;
}


// 재야의 고수
// function solution(n, k, enemy) {
//     let [left, right] = [0, enemy.length];
//     let mid = Math.floor((left + right) / 2);

//     while (left <= right) {
//         const round = enemy.slice(0, mid).sort((a, b) => b - a);
//         let fever = k;
//         const remain = round.reduce((acc, val) => {
//             if (fever > 0) {
//                 fever--;
//                 return acc;
//             } else return acc + val
//         }, 0);
//         if (n - remain >= 0 && fever >= 0) left = mid + 1;
//         else right = mid - 1;
//         mid = Math.floor((left + right) / 2);
//     }

//     return left - 1;
// }

console.log(solution(...items));
