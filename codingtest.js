// 문제 1. 다음 배열에서 400,500을 삭제하는 code O

// var nums = [100, 200, 300, 400, 500];

// console.log(nums.splice(0,3));// 내가쓴정답

// 선생님 정답
// nums.pop();
// nums.pop();
// console.log(nums);

// pop 함수를 사용하여 배열의 마지막 요소를 삭제
// shift 함수를 사용하여 배열의 첫 번째 요소를 삭제
// splice 함수를 사용하여 배열 요소를 삭제
// filter 함수를 사용하여 조건에 일치하는 새 배열을 생성
// delete 연산자를 사용하여 배열 요소를 삭제
// O

// 문제 2. 배열의 내장함수
// var arr = [200, 100, 300];
// arr.splice(2, 0, 10000); //(몇번째 선택?, (앞에선택부터)몇개삭제?, 무엇을 넣을것?)
// console.log(arr);
// X

// 문제 3. 변수의 타입
// 4) object
// O

// 문제 4. 변수의 타입2
// 2) 입력: a = 2.22, 출력:boolean
// O

// 문제 5. for문 계산
// 4) 16
// O

// 문제 6. False
// 2) 1
// O

// 문제 7. 변수명
// 3) let, 5)1age
// O

// 문제 8. 객체의 키 이름 중복
// 84
// O

// 문제 9. concat을 활용한 출력 방법
// var year = '2022';
// var month = '04';
// var day = '26';
// var hour = '11';
// var minute = '34';
// var second = '27';

// var result = `${year}/${month}/${day} ${hour}:${minute}:${second}` ;
// console.log(result);
// O

// 원래 정답 -> concat을 활용해야함 (concat : 매개변수 삽입을 통해 변수를 이어줌)
// var result = year.concat('/',month,'/',day,' ',hour,':',minute,':',second)
// console.log(result);

// 문제 10. 별찍기
// const star = '*';

//  for(let i = 1; i <= 5; i++) {
//     let tree = '' // 별초기화 시켜줘야함
//     // 공백 증가
//     for(let k = 1; k <= 5-i; k++) {
//         tree += ' '
//     }
//     // 별 갯수 증가
//     for(let j = 1; j <= i*2-1; j++) {
//         tree += star
//     }
//     console.log(tree);
//  }

// 홀수는 2n-1
// 1
// 3
// 5
// 7
// 9

// X

// 문제 11. for를 이용한 기본 활용
// let s = 0;

// for(let i = 1; i <= 100; i++) {
//     s += i
// }
// console.log(s);

// O

// 문제 12. 게임 캐릭터 클래스 만들기

// class Wizard {
//     constructor(health, mana, armor) { //생성자 함수
//         this.health = health;
//         this.mana = mana;
//         this.armor = armor;
//     }
//     attack(){
//         console.log("파이어볼")
//     }

// }

// const x = new Wizard(545, 210, 10);
// console.log(x.health, x.mana, x.armor);
// x.attack();
// O(구글링함)

// 문제 13. 몇 번째 행성인가요?

// 내가 푼 방법
// let 행성 = [0, '수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성']
// let 순서 = 행성[prompt()]
// console.log(순서)

// 답
// const 행성 = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성']
// let n = prompt("몇번째 행성?")
// console.log(행성[n-1])

// O

// 문제 14. 3의 배수 인가요?
// let num = prompt("입력")

// if(num % 3 == 0){
//    console.log("짝");
// }else{
//     console.log(num);
// }

// 정답
// let n = prompt("숫자입력")

// if( n % 3 == 0 && n!= 0){ // n == 0 일때도 생각해야함
//     console.log("짝");
// }else{
//     console.log(n);
// }

// O (조금의 구글링)

// 문제 15. 자기소개
// let 이름 = prompt("이름이 ?")
// console.log(`안녕하세요. 저는 ${이름}입니다.`)
// O

// 문제 16. 로꾸거

// 내가 푼 문제
// let n = prompt();
// let sp = n.split('');
// let op = sp.reverse();
// let con = op.join('');
// console.log(con)

// 정답(메서드 체이닝을 이용한다)
// let n = prompt();
// console.log(n.split('').reverse().join(''));

// O(reverse 구글링함)

// 문제 17. 놀이기구 키 제한
// let h = prompt()

// if(h >= 150){
//     console.log('YES');
// }else{
//     console.log('NO')
// }

// O

// 문제 18. 평균 점수
// 영하네 반 -> 국 수 영(평균점수 구하기)

// 내가 푼 답
// let num = prompt();
// let sp = num.split(' ');
// let tonum = Math.floor((Number(sp[0])+Number(sp[1])+Number(sp[2]))/3)
// console.log(tonum)

// 정답
// const num = prompt().split(' ');
// let sum = 0;
// for(let i = 0; i < num.length; i++){
//     sum += parseInt(num[i], 10);
// }
// console.log(Math.floor(sum/num.length));

// O(Number, parseInt 검색함 구글 검색 불명확 하므로 다시한번풀기)

// 문제 19. 제곱을 구하자
// 내가 쓴 답
// let n = prompt().split(' ');
// let z = Number(n[0])**Number(n[1]);
// console.log(z)

// 정답
// const num = prompt().split(' ');
// console.log(Math.pow(parseInt(num[0],10),parseInt(num[1],10)));

// O  Math.pow 메서드를 이용하여 제곱한다(숫자형 문자에도 적용됨-> 좀더 확실히 하기위해 parseInt를 적용한다)

// 문제 20. 몫과 나머지
// 내가 쓴답
// let ab = prompt().split(' ');
// let 몫 = Math.floor(parseInt(ab[0], 10)/parseInt(ab[1], 10))
// let 나머지 = parseInt(ab[0], 10)%parseInt(ab[1], 10)
// console.log(`${몫} ${나머지}`)

// 정답
// const num = prompt().split(' ');
// let val1 = Math.floor(parseInt(num[0], 10)/parseInt(num[1], 10))
// let val2 = parseInt(num[0], 10)%parseInt(num[1], 10)
// console.log(val1, val2);

// O (거의 비슷)

// 문제 21. set은 어떻게 만드나요?
// 3, 5
// X

// set 함수란? 중복되지 않는 데이터를 저장하는 데이터 구조
// const list = [1, 2, 2, 3, 3, 4, 5, 5, 5, 6]

// let setVal = new Set(list)
// console.log(setVal) //Set(6) { 1, 2, 3, 4, 5, 6 }

// 메서드 이용(add, delete, has(값이 있는지 없는지 확인가능))

// 문제 22. 배수인지 확인하기
// 2)
// O

// 문제 23. OX 문제
// X)
// O

// 문제 24. 대문자로 바꿔주세요 !
// 이름 입력시 전부 대문자로 출력되는 프로그램 만들기

// let name = prompt("What your name?")
// console.log(name.toUpperCase())

// 참고
// .toLowerCase() -> 소문자로 바꿔줌

// O

// 문제 25. 원의 넓이를 구하세요.
// 원의 넓이 = 반지름의 길이 * 반지름의 길이 * 3.14

// 내가쓴답
// let n = prompt("반지름의 길이")
// let π = 3.14
// function 원의넓이(){
//    return n*n*π
// }
// console.log(원의넓이())

// 선생님답
// function 원의넓이(n){
//     return n * n * 3.14;
// }
// console.log(원의넓이(prompt()))

// O(함수내 매개변수로 받을수도 있음(참고))

// 문제 26. 행성문제 2
// 한글이름 입력시 영어이름 반환

// 내가 쓴답
// let 행성 = prompt("태양계 행성 영어로?")
// let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

// if(행성 === '수성'){
//      console.log('Mercury')
// }else if(행성 === '지구'){
//      console.log('Earth')
// }else if(행성 === '화성'){
//     console.log('Mars')
// }else if(행성 === '목성'){
//     console.log('Jupiter')
// }else if(행성 === '토성'){
//     console.log('Saturn')
// }else if(행성 === '천왕성'){
//     console.log('Uranus')
// }else if(행성 === '해왕성'){
//     console.log('Neptune')
// }else{
//     console.log('태양계 행성을 입력하셈')
// };

// 선생님답
// const 행성 = {
//     수성 : 'Mercury',
//     금성 : 'Venus',
//     지구 : 'Earth',
//     화성 : 'Mars',
//     목성 : 'Jupiter',
//     토성: 'Saturn',
//     천황성 : 'Uranus',
//     해왕성 : 'Neptune'
// }
// let name = prompt()
// console.log(행성[name])
// O (프로퍼티키로 접근하여 프로퍼티 값 출력하기)

// 문제 27. 객체 만들기

// 내가 푼답
// let name = prompt().split(' ')
// let score = prompt().split(' ')
// console.log(`{'${name[0]}' : ${score[0]}, '${name[1]}' : ${score[1]}}`)

// 선생님답
// const keys = prompt().split(' ')
// const values = prompt().split(' ')
// let obj = {};
// for(let i = 0; i < keys.length; i++){
//     obj[keys[i]] = values[i];
// }
// console.log(obj);
// O (프로퍼티 키 및 벨류로 출력못함)

// 문제 28. 2-gram
// let 문자 = prompt("문자를 입력하라").split("");
// for (let i = 0; i < 문자.length -1; i++) {
//   let gram = 문자[i] + 문자[i+1];
//   console.log(gram);
// //   console.log(문자[i] + 문자[i+1]); // 선생님 답
// }
// O

// 문제 29. 대문자만 지나가세요
// let alphabet = prompt("알파벳 하나만 입력하시오")
// if(alphabet === alphabet.toUpperCase()){
//     console.log('Yes')
// }else{
//     console.log('No')
// }
// O(조금의 구글링)

// 문제 30. 문자열속 문자 찾기
// 내가푼답
// let s1 = prompt("첫번째 문장을 입력하시오");
// let s2 = prompt("두번째 문장을 입력하시오");
// for (let i = 0; i < s1.length; i++) {
//   if (s1.includes(s2, i) === true) {
//        console.log(i)
//   }
// }

// 선생님 정답
// indexOf() : 문자열에 포함된 문자열인지(포함안되면 -1 반환), 몇번째 index에 있는지 확인 가능함
// let s1 = prompt("첫번째 문장");
// let s2 = prompt("두번째 문장");
// console.log(s1.indexOf(s2))

// O (메소드 몰라서 엄청난 뻘짓함)

// 문제 31. 자바스크립트 자료형의 복잡도
// 3,5
// 시간복잡도 : 알고리즘이 문제를 해결할때 걸리는 시간을 의미 -> 비보 표기법으로 나타낼수 있음 ex)O(1)
// O(1) : 입력되는 데이터와 상관없이 알고리즘이 문제를 해결하는 속도가 일정할때
// O

// 문제 32. 문자열 만들기
// let st = prompt("자기소개서").split(" ")
// console.log(st.length)
// O

// 문제 33. 거꾸로 출력하기
// 내가쓴답
// let num = prompt("숫자를 입력하시오").split(" ")
// for(let i = num.length - 1; i < num.length; i--){
//      console.log(num[i])
//      if(i <= 0){
//          break;
//      }
// }

// 선생님답
// let num = prompt("숫자를 입력하시오").split(" ").reverse();
// let result = ""
// for(let i = 0; i < num.length; i++){
//     result +=  num[i]+ " "
// }
// console.log(result)

// O (reverse 메소드 생각 !)

// 문제 34. sort 구현하기
// let height = prompt()
// let height2 = height.split(" ").sort((a, b) => a - b).join(' ');

// if(height === height2){
//     console.log("YES")
// }else{
//     console.log("NO")
// }
// O (join 메서드 몰라서 삽질, .sort((a, b) => a - b) 이해덜됨)

// 문제 35. Factory 함수 사용하기

// 내가쓴답
// function one(n){
//     function two(k){
//            return k **= n
//     }
//     return two;
// }
// const a = one(2);
// const b = one(3);
// const c = one(4);
// console.log(a(10));
// console.log(b(10));
// console.log(c(10));

// 선생님답
// function one(n){
//     function two(k){
//            return Math.pow(k, n);
//     }
//     return two;
// }
// const a = one(2);
// const b = one(3);
// const c = one(4);
// console.log(a(10));
// console.log(b(10));
// console.log(c(10));

// O(Math.pow() - 제곱해주는 메서드 알아야함)


// 문제 36. 구구단 출력하기
// let 구구단 = prompt()
// let result;
// for(let i = 1; i < 10; i++){
//     result = 구구단*i
//     console.log(result)
// }

// 선생님 답(한줄에 출력해야함)
// let num = prompt()
// let result = ''
// for(let i = 1; i < 10; i++){
//     result += num * i + " "
// }
// console.log(result)

// O(한줄에 출력해야함)


// 문제 37. 반장선거
// let array = prompt().split(" ");
// let result = {};
// let winner;

// for(let index in array) {
//     let val = array[index];
//     result[val] = result[val] === undefined ? 1 : result[val] += 1
// }

// winner = Object.keys(result).reduce(function(a,b){
//     return result[a] > result[b] ? a : b;
// })

// console.log(`${winner}이(가) 총 ${result[winner]}표로 반장이 되었습니다`)

// X (풀이는 이해했지만 다시 풀기)



// 문제 38. 호준이의 아르바이트
// let score = prompt().split(" ");
// // let score = ['97', '100', '97', '56', '80', '100', '80', '60']
// score.sort((a, b) => a - b)
// // let rank = Array.from(new Set(stu)).slice(0, 3) // [ '100', '97', '80', '60', '56' ]

// // console.log(score)
// let rank = []
// let count = 0

// while(rank.length < 4){
//     let val = score.pop();
//     if(!rank.includes(val)){
//         rank.push(val);
//     }
//     count++;
// }

// console.log(count -1)

// X



// 문제 39. 오타 수정하기
// 문제 40. 놀이동산에 가자

// 문제 
// 문제
// 문제
// 문제
// 문제
// 문제
// 문제
// 문제



