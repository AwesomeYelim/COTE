// Lv2. 택배 배달과 수거하기

// const [...item] = [4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]];
const [...item] = [2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]];

function solution(cap, n, deliveries, pickups) {
  let result = 0;
  let home = deliveries.map((del, i) => {
    del = [del, pickups[i]];
    return del;
  });
// 반대로 돌림

  for (let i = n - 1; i > -1; i--) {
    // home[i][0] : delivery , home[i][1] : pick
    // delivery || pick 이 없을떄 까지
    while (home[i][0] > 0 || home[i][1] > 0) {
      home[i][0] -= cap;
      home[i][1] -= cap;
      result += 2 * (i + 1);
    }
    // 초과된 cap 만큼 옆집에 배달 및 수거를 진행
    if (home[i][0] < 0 && home[i - 1]) {
        home[i - 1][0] += home[i][0];
    }
    if (home[i][1] < 0 && home[i - 1]) {
        home[i - 1][1] += home[i][1];
    }
  }
  return result;
}

console.log(solution(...item));


