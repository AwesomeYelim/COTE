// 문제 1. 추석 트래픽

let tr = ["2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"];

function solution(lines) {
  const times = [];
  for (let line of lines) {
    const [date, finish, duration] = line.split(" ");
    const millis = toMilliSeconds(finish);
    const startTime =
      millis - duration.slice(0, duration.length - 1) * 1000 + 1;
    const endTime = millis + 999;

    times.push(["START", startTime]);
    times.push(["END", endTime]);
  }

  times.sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : -1));
  let answer = 0;
  let count = 0;

  for (const time of times) {
    if (time[0] === "START") count++;
    else count--;

    answer = Math.max(answer, count);
  }
  return answer;
}

const toMilliSeconds = (time) => {
  const hour = (time[0] * 10 + time[1] * 1) * 60 * 60;
  const minute = (time[3] * 10 + time[4] * 1) * 60;
  const seconds = time[6] * 10 + time[7] * 1;
  const millis = time[9] * 100 + time[10] * 10 + time[11] * 1;
  const amount = (hour + minute + seconds) * 1000 + millis;

  return amount;
};

console.log(solution(tr));
