// Lv1. 키패드 누르기

// 내가푼답
const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = "right";

function solution(numbers, hand) {
  var answer = "";
  let arr = Array(2).fill(0);

  for (let i of numbers) {
    let 차1 = Math.abs(arr[0] - i);
    let 차2 = Math.abs(arr[1] - i);
    // console.log(차1, 차2)

    console.log(arr);
    if (i % 3 === 1) {
      // 1, 4, 7
      answer += "L";
      arr[0] = i;
    } else if (i % 3 === 0) {
      // 3, 6, 9
      answer += "R";
      arr[1] = i;
    } else if (i % 3 === 2 || i === 0) {
      // 2, 5, 8, 0

      if ((차1 === 차2 && 차1 === 3) || 차2 === 3) {
        if (hand === "right") {
          answer += "R";
        } else if (hand === "left") {
          answer += "L";
        }
      } else if (차1 > 차2) {
        answer += "R";
        arr[1] = i;
      } else if (차1 < 차2) {
        answer += "L";
        arr[0] = i;
      }
    }
  }

  return answer;
}

console.log(solution(numbers, hand));

// 다른사람풀이

function solution(numbers, hand) {
  hand = hand[0] === "r" ? "R" : "L"
  let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2]
  let h = { L: [1, 1], R: [1, 1] }
  return numbers.map(x => {
    if (/[147]/.test(x)) {
      h.L = [position[x], 1]
      return "L"
    }
    if (/[369]/.test(x)) {
      h.R = [position[x], 1]
      return "R"
    }
    let distL = Math.abs(position[x] - h.L[0]) + h.L[1]
    let distR = Math.abs(position[x] - h.R[0]) + h.R[1]
    if (distL === distR) {
      h[hand] = [position[x], 0]
      return hand
    }
    if (distL < distR) {
      h.L = [position[x], 0]
      return "L"
    }
    h.R = [position[x], 0]
    return "R"
  }).join("")
}