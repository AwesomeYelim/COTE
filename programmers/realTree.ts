// 팀장님 트리문제

/** 대상 디렉토리 경로 호출 */
interface I_DirPath {
  dirId: number; // 디렉토리 고유번호
  dirName: string; // 디렉토리 이름
  dirPid: number | -1; // 디렉토리 부모 번호 '-1'이면 root
}

export type T_TreeData = I_DirPath & {
  state: { selected: number; expand: boolean; treeLevel: number };
  children: T_TreeData[];
};

// 참조 값을 활용한 트리구조 로직 구현
const src: {
  dirId: number;
  dirPid: number;
  dirName: string;
}[] = [
  {
    dirId: 1,
    dirPid: 0,
    dirName: "yelim",
  },
  {
    dirId: 2,
    dirPid: 1,
    dirName: "wonsuk",
  },
  {
    dirId: 3,
    dirPid: 1,
    dirName: "sohee",
  },
  {
    dirId: 4,
    dirPid: 3,
    dirName: "soyoung",
  },
  {
    dirId: 5,
    dirPid: 3,
    dirName: "sungbin",
  },
  {
    dirId: 6,
    dirPid: 4,
    dirName: "heayeon",
  },
];

function treee(temp: I_DirPath[]) {
  const result: I_DirPath[] = [];
  const map: { [key: string]: I_DirPath & { children?: I_DirPath[] } } = {};

  if (!temp.length || !map.children) {
    return [];
  }

  let treeLevel = 0;

  for (let item of temp) {
    treeLevel += 1;
    item = {
      ...item,
      state: { expand: false, selected: 0, treeLevel },
    } as T_TreeData;

    map[item.dirId] = item;
    const parent = map[item.dirPid];

    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(treee(src));
