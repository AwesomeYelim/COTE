// 팀장님 트리문제

// 참조 값을 활용한 트리구조 로직 구현
let source = [
    {
      dirId: 1,
      dirPid: 0,
      name: "yelim",
    },
    {
      dirId: 2,
      dirPid: 1,
      name: "wonsuk",
    },
    {
      dirId: 3,
      dirPid: 1,
      name: "sohee",
    },
    {
      dirId: 4,
      dirPid: 3,
      name: "soyoung",
    },
    {
      dirId: 5,
      dirPid: 3,
      name: "sungbin",
    },
    {
      dirId: 6,
      dirPid: 4,
      name: "heayeon",
    },
  ];
  
  function tree(temp) {
    let result = [];
    let map = {};
  
    if (!temp.length) {
      return result;
    }
  
    for (let item of temp) {
      map[item.dirId] = item;
      let parent = map[item.dirPid];
      if (parent) {
        (parent.children || (parent.children = [])).push(item);
      } else {
        result.push(item);
      }
    }
    //   console.log(map);
    return  result ;
  }
  
  console.log(tree(source));
  