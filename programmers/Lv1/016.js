// Lv1. 카드뭉치

// const card = [
//   ["i", "drink", "water"],
//   ["want", "to"],
//   ["i", "want", "to", "drink", "water"],
// ];

const card = [
  ["i", "water", "drink"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"],
];

function solution(cards1, cards2, goal) {
  const arr = [];
  goal.forEach((el) => {
    if (el === cards1[0]) {
      arr.push(cards1.shift());
    }
    if (el === cards2[0]) {
      arr.push(cards2.shift());
    }
  });

  if (arr.length !== goal.length) {
    return "No";
  }
  return "Yes";
}

console.log(solution(...card));
