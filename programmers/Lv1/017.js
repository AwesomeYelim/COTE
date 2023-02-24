// Lv1. 대충 만든 자판

const arr = [
  ["ABACD", "BCEFD"],
  ["ABCD", "AABB"],
];
// const arr = [["AA"], ["B"]];
// const arr = [["AGZ", "BSSS"],["ASA", "BGZ"]];

function solution(keymap, targets) {
  let answer = [];
  let count = 0;
  const keyboard = (e) => {
    let tem = [];
    keymap.forEach((k_el) => {
      [...k_el].forEach((s_el, s) => {
        if (e === s_el) {
          tem.push(s + 1);
          if (tem.length > 1) {
            count += Math.min(...tem);
            if (s + 1 === k_el.length) {
              answer.push(count);
              count = 0;
            }
          }
        }
      });
    });
  };
  targets.forEach((t_el) => {
    [...t_el].forEach((s_el) => {
      keyboard(s_el);
    });
  });
  return answer;
}

console.log(solution(...arr));
