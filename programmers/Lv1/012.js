// Lv1. 개인정보 수집 유효기간

const [...data] = [
    ["2020.01.01"],
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ],
  ];
  
  function solution(today, terms, privacies) {
    let obj = {};
    terms.forEach((el) => {
      el = el.split(" ");
      obj[el[0]] = el[1];
    });
  
    let epoch = (time) => new Date(time).getTime();
    privacies = privacies
      .map((el, i) => {
        el = el.split(" ");
        let date = el[0];
        date = date.split(".").map(Number);
  
        date[1] = date[1] + +obj[el[1]];
        if (date[1] > 12) {
          date[0] += Math.floor(date[1] / 12);
          date[1] %= 12;
          if (date[1] <= 0) {
            date[1] = 12;
            date[0] -= Math.floor(el[0][1] / 12);
          }
        }
        date = date.join(".");
        return epoch(today) >= epoch(date) && i + 1;
      })
      .filter((el) => el !== false);
    return privacies;
  }
  
  console.log(solution(...data));
  