function sol(n, l) {
  let answer = 0;
  let man = new Array(n).fill(0);
  console.log(man);

  while (l.length !== 0) {
    for (let j = 0; j < man.length; j++) {
      if (man[j] == 0 && 1) {
        man[j] += l.shift();
        console.log(man)
      }
    }

    man = man.map((x) => (x = x - 1));
    console.log(man)

    answer += 1;
  }
  return answer + Math.max.apply(null, man);
}

const 배달원 = 3;
const 배달시간 = [1, 2, 1, 3, 3, 3];

console.log(sol(배달원, 배달시간));
