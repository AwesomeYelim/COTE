// 문제 1. 다음 배열에서 400,500을 삭제하는 code O

// var nums = [100, 200, 300, 400, 500];

// console.log(nums.splice(0,3));// // 내가푼답

// // 선생님답
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
// ✡︎

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

// // 내가푼답
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

// // 내가푼답
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

// // 내가푼답
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
// // 내가푼답
// let n = prompt().split(' ');
// let z = Number(n[0])**Number(n[1]);
// console.log(z)

// 정답
// const num = prompt().split(' ');
// console.log(Math.pow(parseInt(num[0],10),parseInt(num[1],10)));

// O  Math.pow 메서드를 이용하여 제곱한다(숫자형 문자에도 적용됨-> 좀더 확실히 하기위해 parseInt를 적용한다)

// 문제 20. 몫과 나머지
// // 내가푼답
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

// // 내가푼답
// let n = prompt("반지름의 길이")
// let π = 3.14
// function 원의넓이(){
//    return n*n*π
// }
// console.log(원의넓이())

// // 선생님답
// function 원의넓이(n){
//     return n * n * 3.14;
// }
// console.log(원의넓이(prompt()))

// O(함수내 매개변수로 받을수도 있음(참고))

// 문제 26. 행성문제 2
// 한글이름 입력시 영어이름 반환

// // 내가푼답
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

// // 선생님답
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

// // 내가푼답
// let name = prompt().split(' ')
// let score = prompt().split(' ')
// console.log(`{'${name[0]}' : ${score[0]}, '${name[1]}' : ${score[1]}}`)

// // 선생님답
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
// //   console.log(문자[i] + 문자[i+1]); // // 선생님답
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
// // 내가푼답
// let s1 = prompt("첫번째 문장을 입력하시오");
// let s2 = prompt("두번째 문장을 입력하시오");
// for (let i = 0; i < s1.length; i++) {
//   if (s1.includes(s2, i) === true) {
//        console.log(i)
//   }
// }

// // 선생님답
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
// // 내가푼답
// let num = prompt("숫자를 입력하시오").split(" ")
// for(let i = num.length - 1; i < num.length; i--){
//      console.log(num[i])
//      if(i <= 0){
//          break;
//      }
// }

// // 선생님답
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

// // 내가푼답
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

// // 선생님답
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

// // 선생님답(한줄에 출력해야함)
// let num = prompt()
// let result = ''
// for(let i = 1; i < 10; i++){
//     result += num * i + " "
// }
// console.log(result)

// O(한줄에 출력해야함)

// 문제 37. 반장선거
// let array = prompt().split(" ");
// let array = '예림 예림 예림 예인 보인 혜지 혜지 예일 예인 예일'.split(" ");
// let result = {};
// let winner;

// for(let el of array) {
//     let val = el;
//     result[val] = result[val] === undefined ? 1 : result[val] += 1 // result[val]에 처음접근시 undefined 를 출력 -> 1 / result[val] 은 1이되며 다시순환하게 됨
// }

// winner = Object.keys(result).reduce(function(a,b){
//     return result[a] > result[b] ? a : b;
// })

// console.log(`${winner}이(가) 총 ${result[winner]}표로 반장이 되었습니다`)

// X (풀이는 이해했지만 다시 풀기)
// ✡︎

// 문제 38. 호준이의 아르바이트
// 내가푼답
// let score ='97 86 75 66 55 97 85 97 97 95'.split(' ')
// let rank = Array.from(new Set(score)).sort((a, b) => b - a).slice(0, 3)
// console.log(rank)
// let count = score.filter(a => rank.includes(a)).length
// console.log(count)

// 선생님답
// let score = prompt().split(" ");
// // let score = ['97', '100', '97', '56', '80', '100', '80', '60']
// score.sort((a, b) => a - b)
// // let rank = Array.from(new Set(stu)).slice(0, 3) // [ '100', '97', '80', '60', '56' ]

// // console.log(score)
// let rank = []
// let c = 0

// while(rank.length < 4){
//     let val = score.pop();
//     if(!rank.includes(val)){
//         rank.push(val);
//     }
//     c++;
// }

// console.log(c -1)

// X

// 문제 39. 오타 수정하기

// // 내가푼답
// let wrong = prompt()
// // let wrong = 'hqllo qvqryonq'
// let arr = []
// for(let fix in wrong){
//     let match = wrong[fix].replace('q','e')
//     arr.push(match)
// }
// console.log(arr.join(''))

// // 선생님답
// const word = prompt()
// console.log(word.split('q').join('e'));

// O (replace 메서드만 검색)

// 문제 40. 놀이동산에 가자

//  // 내가푼답
// let 놀이기구 = prompt().split(" ");
// let c = 0;

// for(let i = 2; i < 놀이기구.length; i++){
//      let val = 놀이기구[0] -= 놀이기구[i];
//     if(val < 0){
//         break;
//     }
//     c++
// }
// console.log(c)

// // 선생님답
// let weightLimit = prompt("무게 제한을 입력")
// let memberC = prompt("몇명이 탈것인가?");

// let c = 0;
// let totalWeight = 0;

// for(let i = 0; i < memberC; i++){
//     totalWeight += weightLimit + parseInt(prompt("각자의 몸무게를 입력하라"), 10);
//     if(totalWeight <= weightLimit){
//         c++;
//     }
// }

// console.log(c);
// O (배열로 받는줄 착각함)

// 문제 41. 소수판별

// // 내가푼답
// function 소수인가(num){

//     if( num === 2 ){
//         return console.log("YES")
//     }
//     for(let i = 2; i <= num -1; i++){
//         if(num % i === 0){
//             return console.log("NO");
//         }
//     }
//     if(num === 1){
//         return console.log("NO");
//     }
//     return console.log("YES")
// }

// 소수인가(Number(prompt("숫자를 입력하시오")))

// O

// 문제 42. 2020년
// let 월 = parseInt(prompt("월 입력"),10)
// let 일 = parseInt(prompt("일 입력"),10)

// function solution(a, b) {
//   let day = new Date(2020, a - 1, b);
//   let 요일 = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//   console.log(요일[day.getDay()]);
// }

// solution(월, 일)
// O

// 문제 43. 10진수를 2진수로

// // 내가푼답
// let num = prompt()
// console.log(num.toString(2))

// // 선생님답
// let num = '16'
// let arr = []

// while(num){
//     arr.push(num % 2);// 1 0 1 1
//     num = Math.floor(num/2) //6 3 1 0
// }

// console.log(arr.reverse().join('')) // 1101

// O

// 문제 44. 각자리수의 합

// // 내가푼답
// let num = prompt().split('')
// let c = 0;
// for(let i = 0; i < num.length; i++){
//     c += parseInt(num[i], 10)
// }
// console.log(c)

// // 선생님답
// let num = "12345";
// let sum = 0;
// while(num){
//     sum += num%10; // 5 9 12 14 15
//     num = Math.floor(num/10); // 1234 123 12 1 0
// }
// console.log(sum);

// O (10진법을 이용하여 구해보기 연습)

// 문제 45. getTime()함수 사용하기
// // 내가푼답
// let now = new Date()
// console.log(1970 + Math.floor(now.getTime() / 1000 / 3600 / 24 / 365))

// // 선생님답
// let now = new Date()
// console.log(Math.floor(now.getTime()/(1000*3600*24*365))+ 1970)

// O

// 문제 46. 각 자리수의 합2

// // 내가푼답
// let num = "1234567891011121314151617181920"
// num.split('')
// let c = 0;
// for(let i = 0; i < num.length; i++){
//     c += parseInt(num[i], 10)
// }
// console.log(c)

//  // 선생님답
// let arr = [];
// let total = 0;

// for(let i = 0; i < 20; i++){
//     arr[i] = i+1;
// }
// // console.log(arr)

// arr.forEach((n) =>{
//     while(n){
//         total =  total + n%10
//         n = Math.floor(n/10)
//     }
// })

// console.log(total)

// O (while 문 이용못함)

// 문제 47. set 자료형의 응용
// 내가푼답
// const people = [
//     ('홍예림', '01012341234'),
//     ('이호상', '01051442904'),
//     ('홍예일', '01098765432'),
//     ('홍예인', '01028474293'),
//     ('홍예인', '01028474293'),
//     ('홍예일', '01098765432'),
//     ('홍예림', '01012341234')
// ]
// // let c = Array.from(new Set(people))
// // console.log(c.length)

// // 선생님답
// const people = {
//         홍예림: '01012341234',
//         이호상: '01051442904',
//         홍예일: '01098765432',
//         홍예인: '01028474293',
//         홍예인: '01028474293',
//         홍예일: '01098765432',
//         홍예림: '01012341234'
// };

// let result = new Set();

// for(let key in people){
//     result.add(people[key])
// }

// console.log(result.size);

// O (프로퍼티 관련 여러 메서드 익히기)

// 문제 48. 대소문자 바꿔서 출력하기
// let alphabet = prompt().split(' ');
// let alphabet = "AAABBBcccddd";
// let arr = [];

// for (let i = 0; i < alphabet.length; i++) {
//   if (alphabet[i] === alphabet[i].toUpperCase()) {
//     arr += alphabet[i].toLowerCase();
//   } else if (alphabet[i] === alphabet[i].toLowerCase()) {
//     arr += alphabet[i].toUpperCase();
//   }
// }

// console.log(arr)

// O

// 문제 49. 최댓값 구하기
// 내가푼답
// let num = prompt().split(" ")
// let num = [ '10', '9', '8', '7', '6', '5', '4', '3','2','1']
// num.sort((a,b) => b-a);
// console.log(num[0])

// O (map 메서드를 이용하여 배열 전체에 parseInt 적용)

// 문제 50. 버블 정렬 구현하기
// function bubble(arr){
//     let result = arr.slice(); //매개변수 arr에 새로 배열을 만들어 준다는 의미

//     for (let i = 0; i < result.length - 1 ; i++){
//         for(let j = 0; j < result.length - i ; j++){
//             if(result[j] > result[j+1]){
//                 let val = result[j]
//                 result[j] = result[j+1];
//                 result[j+1] = val;
//             }
//         }

//     }

//     return result;
// }
// // prompt('입력해주세요').split(' ')
// const items = ['4','2','3','8','5'].map((n) => {
//     return parseInt(n, 10);
// });

// console.log(bubble(items));

// X (이해는 했지만 처음부터 다시 해보기)

// 문제 51. merge sort 를 만들어보자

// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   const mid = Math.floor(arr.length / 2);
//   const left = arr.slice(0, mid);
//   const right = arr.slice(mid);

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   let result = [];

//   while (left.length  && right.length) {
//     if (left[0] < right[0]) {
//       result.push(left.shift());
//     } else {
//       result.push(right.shift());
//     }
//   }
//   while (left.length) {
//     result.push(left.shift());
//   }
//   while (right.length) {
//     result.push(right.shift());
//   }
//   return result;
// }

// // const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

// const array = [10, 11, 1, 2, 4, 7, 3];

// console.log(mergeSort(array));

// X (이해는 했는데 다시)

// 문제 52. quick sort

// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const pivot = arr[0];
//   const left = [];
//   const right = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return quickSort(left).concat(pivot, quickSort(right));
// }

// // const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
// const array = [5, 1, 3, 9, 7];
// console.log(quickSort(array));

// O (구글링함-> 다시 풀기)

//  문제 53. 괄호 문자열

// 내가푼답
// let 괄호 = prompt('괄호를 포함하여 입력하시오').split(' ')
// // let 괄호 = ('([제이름은 홍예림]]')
// let c1 = 0;
// let c2 = 0;
// let c3 = 0;
// let c4 = 0;
// let c5 = 0;
// let c6 = 0;

// for (let i = 0; i < 괄호.length; i++) {
//   if(괄호[i]=== '['){
//     c1++
//   }else if(괄호[i]=== ']'){
//     c2++
//   }else if(괄호[i]=== '('){
//     c3++
//   }else if(괄호[i]=== ')'){
//     c4++
//   }else if(괄호[i]=== '{'){
//     c5++
//   }else if(괄호[i]=== '}'){
//     c6++
//   }
// }

// if((c1 === c2 || c3 === c4 || c5 === c6) && (c1 != 0 && c3 != 0 && c4 != 0 && c5 != 0 && c6 != 0)){
//   console.log('YES')
// }else{
//   console.log('NO')
// }

// 선생님답
// 6가지 케이스를 살펴봄
// 1. (())
// 2. (((()()())))
// 3. ()()()
// 4. )))(((
// 5. ())
// 6. ())(

// function mathBrackets(arr) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "(" || arr[i] === "[" || arr[i] === "{") {
//       count++;
//     }
//     if (arr[i] === ")" || arr[i] === "]" || arr[i] === "}") {
//       count--;
//     }
//   }

//   if (count !== 0) {
//     return false;
//   }

//   let bracket = [];

//   for (let i in arr) {
//     if (arr[i] === "(") {
//       bracket.push("(");
//     }
//     if (arr[i] === ")") {
//       if (bracket.length === 0) {
//         //')' 부터 시작할수 없기 때문에 return false를 반환
//         return false;
//       }
//       bracket.pop();
//     }
//     if (arr[i] === "[") {
//       bracket.push("[");
//     }
//     if (arr[i] === "]") {
//       if (bracket.length === 0) {
//         return false;
//       }
//       bracket.pop();
//     }
//     if (arr[i] === "{") {
//       bracket.push("{");
//     }
//     if (arr[i] === "}") {
//       if (bracket.length === 0) {
//         return false;
//       }
//       bracket.pop();
//     }
//     return true;
//   }
// }
// // const num = prompt().split("")
// const num = "(())}{}".split("");

// if (mathBrackets(num) == true) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// △ (다른 문자열 삽입시 틀림) -> 이해했지만 한번더

// 문제 54. 연속되는 수

// 내가 푼답
// function consecutive(n){
//   for(let i = 0; i < n.length; i++) {
//     if(parseInt(n[i], 10) + 1 === parseInt(n[i+1],10)){
//       return true;
//     }else{
//       return false;
//     }
//   }
// }

// let num = prompt().split(" ")

// // console.log(consecutive(num))
// // let num = [1,4,2,6,3]
// if(consecutive(num) === true){
//   console.log("YES")
// }else{
//   console.log("NO")
// }

// 선생님답
// const n = "1 3 4 2 5".split(" ").sort();
// function solution(n) {
//   for (let i = 0; i < n.length -1; i++) {
//     if (Number(n[i]) + 1 !== Number(n[i + 1])) {
//       return "NO";
//     }
//   }
//   return "YES";
// }

// console.log(solution(n))

//O (디테일 신경쓰기..)

// 문제 55. 하노이의 탑

// const route = [];

// function hanoi(원반의수, 시작기둥, 목표기둥, 보조기둥){
//   // 원판이 한개 일때는 바로 옮기면 됩니다.
//   if (원반의수 === 1){
//     route.push([시작기둥, 목표기둥]);
//     return 1;
//   }

//   // 원반이 n-1개를 경유기둥으로 옮기고
//   hanoi(원반의수-1, 시작기둥, 보조기둥, 목표기둥)
//   // 가장 큰 원반은 목표기둥으로
//   route.push([시작기둥, 목표기둥])
//   // 경유기둥과 시작기둥을 바꿉니다.
//   hanoi(원반의수-1, 보조기둥, 목표기둥, 시작기둥)
// }

// hanoi(3, 'A', 'B', 'C');
// console.log(route);
// console.log(route.length);

// △

// 문제 56. 객체의 함수 응용

// // 내가푼답
// const nationWidth = {
//   'Korea': 220877,
//   'Rusia': 17098242,
//   'China': 9596961,
//   'France': 543965,
//   'Japan': 377915,
//   'England': 242900,
// }
// let simi = Object.values(nationWidth).sort((a, b)=> a - b)
// let difer = simi[1] - simi[0]

// for (let i = 0; i < simi.length; i++){
//   if(simi[1] === Object.values(nationWidth)[i]){
//     console.log(Object.keys(nationWidth)[i], difer)
//   }
// }

// 선생님답
// const nationWidth = {
//   'Korea': 220877,
//   'Rusia': 17098242,
//   'China': 9596961,
//   'France': 543965,
//   'Japan': 377915,
//   'England': 242900,
// }

// const w = nationWidth["Korea"];
// delete nationWidth["Korea"];
// console.log(nationWidth);

// const entry = Object.entries(nationWidth);
// console.log(entry);
// const values = Object.values(nationWidth);
// console.log(values);

// let gap = Math.max.apply(null, values);
// console.log(gap);
// let item = [];

// for (let i in entry){
//   if(gap > Math.abs(entry[i][1]-w)){
//     gap = Math.abs(entry[i][1]-w);
//     item = entry[i];
//   }
// }

// console.log(item[0], item[1]-w)

// O (다른방식의 풀이법 적용)

// 문제 57. 1의 개수
// let arr = []
// let count = 0;

//   for(let i = 0; i < 1000; i++){
//       arr += String(i+1)
//   }

// arr.split('')

// for(let i in arr){
//   if(arr[i].includes('1')){
//     count++;
//   }
// }

// console.log(count)

// O (정규표현식 통해서 푸는 방법 습득하기)

// 문제 58. 콤마 찍기

// // 내가푼답
// // let num = prompt().split('')
// let num = "1234567891011".split('').reverse()

// for(let i = 0; i < num.length; i++){
//   if(i%4 === 0){
//     num.splice(i, 0, ',')
//   }
// }

// num.splice(0, 1)

// console.log(num.reverse().join(''));

// 선생님답
// 방법 1.메서드 사용
// const n = 10000000
// console.log(n.toLocaleString())

// 방법2. 재귀함수
// function comma(s) {
//   if (s.length <= 3) {
//     return s;
//   } else {
//     return comma(s.slice(0, s.length-3)) + "," + s.slice(s.length - 3);
//   }
// }

// console.log(comma("123456789"));

// O (재귀함수연습하기)

// 문제 59. 빈칸채우기
// 내가푼답
// let str = prompt().split("")
// // let str = "hiiiiiiiiiiii".split("");
// let arr = [];

// function center(s) {
//   for (let i = 0; i < 50; i++) {
//     arr.push("=");
//   }
//   arr.splice(25 - s.length / 2, s.length, s.join(""));
//   console.log(arr.join(""))
// }

// center(str);

// 선생님답
// const s = 'hi';
// const n = 25 + parseInt((s.length/2), 10)

// // 왼쪽채우기
// const left = s.padStart(n, '=')

// // 오른쪽 채우기
// const right = left.padEnd(50, '=');
// console.log(right);

// O (padStart, padEnd 메서드 알기!)

// 문제 60. 번호매기기
// const students = [
//   "강은지",
//   "김유정",
//   "박현서",
//   "최성훈",
//   "홍유진",
//   "박지호",
//   "권윤일",
//   "김채리",
//   "한지호",
//   "김진이",
//   "김민호",
//   "강채연",
// ].sort()

// for(let i in students) {
//   console.log(`번호: ${Number(i)+1}, 이름: ${students[i]}`)
// }

// O

// 문제 61. 문자열 압축하기

// 내가푼답
// let 입력 = 'aaabbbbcdddd'.split('')
// let 압축 = Array.from(new Set(입력))
// let arr = []

// for(let i in 압축) {
//     let num = 입력.filter(a => a === 압축[i]).length
//     arr.push(압축[i],num)
// }

// console.log(arr.join(''))

// 선생님답
// const user_s = 'aaabbbbcdddd';
// let result_s = '';
// let store_s = user_s[0];
// let count = 0

// // aaabbbbsdddd
// // result_s = 'a3b4c1d4';
// for(let i of user_s){
//     console.log(i);
//     if(i == store_s){
//         count += 1;
//     }else {
//         result_s += store_s + String(count);
//         store_s = i; // 다음 i 로 a -> b/ b -> c/ c->d  로 바꿔준다
//         count = 1; //count 초기화
//     }
// }
// result_s += store_s + String(count); // d4를 추가해 주기 위해서
// console.log(result_s);

// O

// 문제 62번. 20190923 출력하기
// 내가푼답
// let date = '이천십구년 구월 이십삼'.split(' ')
// let array = []

// for(let i of date){
//     if(i == '이천십구년'){
//         array.push(2019)
//     }
//     if(i == '구월'){
//         array.push(09)
//     }
//     if(i == '이십삼'){
//         array.push(23)
//     }
// }

// console.log(array.join(''))

// 선생님답
// const user_s = 'aacdddddddddfff'
// let result_s = '';
// console.log(
//     `${user_s.match(/a/g).length}${Number(user_s.match(/b/g))}${user_s.match(/c/g).length}${user_s.match(/d/g).length}${Number(user_s.match(/e/g))}${user_s.match(/d/g).length}${user_s.match(/a/g).length}${user_s.match(/f/g).length}`)
// // 정규표현식 사용 match(/a/g) -> 전체길이에서 a만 골라냄
// // ${Number(user_s.match(/e/g))} -> NaN, null을 0으로 표현

// X (숫자써서 틀림)

// 문제 63. 친해지고 싶어
// 내가푼답
// let short = prompt().split(' ')
// let short = '복잡한 세상 편하게 살자'.split(' ')
// let arr = []

// for(let i of short) {
//     arr.push(i[0])
// }

// console.log(arr.join(''))

// O

// 문제 64. 이상한 엘레베이터

// // 내가푼답
// let 정량 = 33;
// let count = 0;

// 첫번째 풀이
// if ((정량 % 7) % 3 === 0) {
//   count = Math.floor(정량 / 7) + Math.floor((정량 % 7 )/ 3);
//   console.log(count);
// } else {
//   console.log(-1);
// }

// 두번째 풀이
// for(let i = 0; i < 정량/3; i++){
//     for(let j = 0; j < 정량/7; j++) {
//         if(7*j + 3*i === 정량){
//             count = j+i
//         }
//         if(7*i + 3*j === 정량){
//             count = j+i
//         }
//         // if(정량%i !== 0 && 정량%7 !== 0){
//         //     count = -1
//         // }
//     }
// }
// console.log(count)

// 선생님답
// let n = 13;
// let result = 0;
// while (true){
//     if(n%7 == 0){
//         result += parseInt(n/7, 10);
//         console.log(result);
//         break;
//     }
//     n -= 3
//     result += 1
//     if(n < 0){
//         console.log(-1);
//         break;
//     }
// }

// △ (-1 리턴못함)

// 문제 65. 변형된 리스트
// 내가푼답
// let arr1 = [1, 2, 3, 4]
// let arr2 = ['a', 'b', 'c', 'd']
// let arr = []

// for(let i in arr1){
//     if(i%2 !== 0){
//       arr.push([arr2[i],arr1[i]])
//     }else(
//       arr.push([arr1[i],arr2[i]])
//     )
// }

// console.log(arr)

// 선생님답
// 1. map 사용(요소, 인덱스)
// const a = [1, 4, 5, 16]
// const b = ['a', 'b', 'c', 'd'];
// let c = a.map(function(e ,i){
//     if(i%2 == 0){
//         return [e, b[i]];
//     }else {
//         return [b[i], e];
//     }
// });
// console.log(c)

// 2. forEach 사용(map과 동일 but! return값이 없다.)
// const a = [1, 4, 5, 16]
// const b = ['a', 'b', 'c', 'd'];
// let c = [];

// a.forEach(function(e ,i){
//     if(i%2 == 0){
//         c.push([e, b[i]]);
//     }else {
//         c.push([b[i], e]);
//     }
// });

// console.log(c)

// O

// 문제 66. 블럭탑쌓기
// 내가푼답
// let 탑 = ['ABCDEF', 'BCAD', 'ADEFQRX', 'BEDFG', 'EFGHZ']
// let 규칙 = 'ABD'.split('')
// let arr = []

// for(let i of 탑){
//     // console.log(Array.from(i).sort())
//     if(Array.from(i).join('') === Array.from(i).sort().join('')){
//         arr.push("가능")
//     }else{
//         arr.push("불가능")
//     }
// }

// console.log(arr)

// 선생님답
// const 전체블록 = ['ABCDEF', 'BCAD', 'ADEFQRX', 'BEDFG', 'EFGHZ']
// let 규칙 = 'ABD';

// function solution(전체블록, 규칙){
//     let answer = [];
//     for(let 부분블록 of 전체블록){
//         answer.push(블록순서체크(부분블록, 규칙)) //콜백함수를 넣어줌
//     }
//     return answer;
// }
// function 블록순서체크(부분블록, 규칙){
//     let 임시변수 = 규칙.indexOf(규칙[0]);
//     for(let 문자 of 부분블록){
//         if(규칙.includes(문자)){
//             if(임시변수 > 규칙.indexOf(문자)){
//                 return '불가능'
//             }
//             임시변수 = 규칙.indexOf(문자);
//         }
//     }
//     return '가능';
// }

// console.log(solution(전체블록, 규칙))

// △ (알파벳순으로 출력함/ 풀이 이해못함 -> 다시풀기)

// 문재 67. 민규의 악수

// 내가푼답
// let 총 = Number(prompt())+7;
// let 총 = 63;
// let 정리 = [];
// let 참가자 = 0;

// for (let i = 0; i < (총 + 7) / 2; i++) {
//   총 -= i;
//   if (총 > 0) {
//     참가자++;
//   }
// }
// let 민규 = 참가자 - 7;
// 정리.push(민규, 참가자 + 1);
// console.log(정리);

// 선생님답
// 총참가자 = n + 1(민규)
// 악수의 수 = n-1 + n-2 + n-3....16
// 100 + 99 + 98 + ..... 3 + 2 + 1 === 101*50 == 5050
// n(n+1)/2 -->  (n-1)(n)/2

// 입력: 59
// (n-1)(n)/2
// 11 명 참가자일때 55
// 12 명 (55 + 민규가 4번의 악수)

// function solution(n){
//     let 사람 = 0;
//     let 총악수 = 0;
//     let temp = 0;
//     while(true){
//         총악수 = parseInt((사람*(사람-1)/2),10)
//         if(n < 총악수){
//             break;
//         }
//         temp = 총악수;
//         사람 += 1;
//     }
//     return [parseInt(n-temp, 10), 사람];
// }

// const 악수의수 = 59;
// console.log(solution(악수의수));

// O (좀 이상하게 풀어서 다시풀기)

// 문제 68. 버스 시간표

// 내가푼답
// let time = ["12:30", "13:20", "14:13"];
// let bus = "12:40".split(":");

// function solution(time, bus) {
//     let arr = [];
//   for (let i in time) {
//     let hour = time[i].split(":")[0] * 60;
//     let min = Number(time[i].split(":")[1]);
//     let hm = hour + min;
//     let bushm = bus[0] * 60 + Number(bus[1]);

//     // console.log(hour, min, hm, bushm)
//     if (hm < bushm) {
//       arr.push("지나갔습니다.");
//     }
//     if (hm >= bushm) {
//       if(hm === bushm) {
//           arr.push("진입합니다.")
//       }
//       if (hm - bushm < 60 && hm - bushm !== 0) {
//         arr.push(`${hm - bushm}분 남았습니다`);
//       }
//       if (hm - bushm > 60) {
//         arr.push(`${parseInt((hm - bushm)/60, 10)}시간 ${(hm - bushm)%60}분 남았습니다`);
//       }
//     }
//   }
//   return console.log(arr)
// }

// solution(time, bus);

// O (선생님 답과 유사)

// 문제 69. 골드바흐의 추측

// 내가푼답
// let num = 100;
// let count;
// let self;
// let arr = [];
// let 소수합산 = [];

// function 소수판별식(num) {
//   if (num === 2) {
//     return true;
//   }
//   for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// for (let i = 2; i <= num; i++) {
//   if (소수판별식(i) === true) {
//     arr.push(i);
//   }
// }
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j <= i; j++) {
//     self = arr[i]*2
//     count = arr[i] + arr[j];
//     if(self % 2 === 0){
//         소수합산.push(self);
//     }
//     if(count % 2 === 0) {
//         소수합산.push(count);
//     }
//   }
// }
// 소수합산 = Array.from(new Set(소수합산)).sort((a,b)=> a - b)

// console.log(소수합산);

// 선생님답
// let prime = [];
// let isPrime = true;
// let val = 100;
// let 골드바흐파티션 = [];

// for (let i = 2; i < val; i++) {
//     for(let j = 2; j < i; j++){
//         if(i % j == 0){
//             isPrime = false; //정수일때
//         }
//     }
//     if(isPrime){ //소수일때
//         prime.push(i);
//     }
//     isPrime = true;
// }

// for(let n of prime){
//     if(prime.includes(val - n) && n <= val - n){
//         골드바흐파티션.push([n, val - n]);
//     }
// }

// let 차 = 골드바흐파티션.map(e => e[1]-e[0]);
// let 작은값 = 골드바흐파티션[차.indexOf(Math.min.apply(null, 차))]
// let 큰값 = 골드바흐파티션[차.indexOf(Math.max.apply(null, 차))]

// console.log(골드바흐파티션) //모두출력
// console.log(차)
// console.log(작은값, 큰값)

// △ (문제 잘못읽음...-> 다시풀기)

// 문제 70. 행렬 곱하기

// 내가푼답
// let as = [
//   [1, 2],
//   [3, 4]
// ];
// let bs = [
//   [4, 5],
//   [6, 7],
// ];

// 출력
// [
//   [16, 19],
//   [36, 43]
// ];

// let arr = []
// let brr = []
// let result = []
// for (let i = 0; i < bs.length; i++) {
//   for (let j = 0; j < as[i].length; j++) {
//     if (as[i].length === bs.length) {
//         arr.push(as[i][j]*bs[j][i])// [ 4, 12, 15, 28 ]

//     } else {
//       console.log("-1");
//     }
//   }
// }
// console.log(arr);

// 선생님답
// let as = [
//   [1, 2],
//   [3, 4]
// ];
// let bs = [
//   [4, 5],
//   [6, 7],
// ];

// function solution(A, B) {
//     let answer = [];
//     for (let i = 0; i < A.length; i++) {
//       // 행렬 A의 행 접근 - A
//       const row = A[i];
//       answer.push([]);
//       // 행렬 B의 열 접근해서 곱하기 - B
//       // 행렬 B의 열 길이
//       for (let j = 0; j < B[0].length; j++) {
//         let sum = 0;
//         // 행렬 B의 행 길이
//         // B는 열을 고정해놓고 행을 이동하기 - C
//         for (let k = 0; k < B.length; k++) {
//           sum += row[k] * B[k][j];
//         }
//         answer[i].push(sum);
//       }
//     }
//     return answer;
//   }

// console.log(solution(as, bs))

// X (다시한번 풀어보기)

// 문제 71,72 깊이 우선 탐색, 너비 우선 탐색

// 내가푼(시도)
// function 깊이우선탐색(a) {
//   let arr = [];
//   let b = Object.keys(a); // [ 'E', 'F', 'A', 'B', 'C', 'D' ]
//   arr.push(b[0]); // ['E']

//   for (let i of b) { // [ 'E', 'F', 'A', 'B', 'C', 'D' ]
//     // console.log(i)
//     for (let j in a[b[0]]) { // ['D', 'A']
//         // console.log(j)
//       if ( a[b[0]][j] == i ) {
//         // console.log(a[b[0]][j])
//         arr.push(a[b[0]][0])
//       }
//     }
//     // console.log(i);
//   }

//   // return a[b[0]]
//   return arr;
// }

// let graph = {
//   E: ["D", "A"],
//   F: ["D"],
//   A: ["E", "C", "B"],
//   B: ["A"],
//   C: ["A"],
//   D: ["E", "F"],
// };

// console.log(깊이우선탐색(graph));

// 선생님답
// 1) 깊이 우선 탐색
// let graph = {
//   E: ["D", "A"],
//   F: ["D"],
//   A: ["E", "C", "B"],
//   B: ["A"],
//   C: ["A"],
//   D: ["E", "F"],
// };

// function dfs(graph, start) {
//   let visited = [];
//   let stack = [start];

//   while (stack.length != 0) {
//     let n = stack.pop();
//     // console.log(n)
//     if (!visited.includes(n)) {
//       visited.push(n);
//       let sub = graph[n].filter((x) => !visited.includes(x));
//       for (let i of sub) {
//         stack.push(i);
//       }
//     }
//   }
//   return visited;
// }

// console.log(dfs(graph, "E"));

// 2) 너비 우선 탐색
// let graph = {
//     E: ["D", "A"],
//     F: ["D"],
//     A: ["E", "C", "B"],
//     B: ["A"],
//     C: ["A"],
//     D: ["E", "F"],
//   };

//   function dfs(graph, start) {
//     let visited = [];
//     let queue = [start];

//     while (queue.length != 0) {
//       let n = queue.shift();
//     //   console.log(n)
//       if (!visited.includes(n)) {
//         visited.push(n);
//         let sub = graph[n].filter((x) => !visited.includes(x));
//         for (let i of sub) {
//           queue.push(i);
//         }
//       }
//     }
//     return visited;
//   }

//   console.log(dfs(graph, "E"));

// X (못품 -> 블로그 정리하면서 다시 정리)

// 문제 73. 최단 경로 찾기
// let graph = {
//   A: ["B", "C"],
//   B: ["A", "D", "E"],
//   C: ["A", "F"],
//   D: ["B"],
//   E: ["B", "F"],
//   F: ["C", "E"],
// };

// function 최단경로(graph, start, end) {
//   let count = -1;
//   let 거쳐감 = [start];
//   let 최종 = [start];

//   while (거쳐감.length !== 0) {
//     count += 1;
//     let s = 거쳐감.length;
//     for (let i = 0; i < s; i++) {
//       let n = 거쳐감.splice(0, 1);
//       if (n == end) {
//         return count;
//       }
//       for (let j in graph[n]) {
//         if (!최종.includes(graph[n][j])) {
//           최종.push(graph[n][j]);
//           거쳐감.push(graph[n][j]);
//         }
//       }
//     }
//   }
// }

// // let 입력 = prompt('입력쓰').split(' ');
// let 입력 = ["A", "F"];
// let start = 입력[0];
// let end = 입력[1];

// console.log(최단경로(graph, start, end));

// X (위에꺼 못풀어서 못품)

// 문제 74. 최장 경로 찾기

// let graph = {
//   1: [2, 3, 4],
//   2: [1, 3, 4, 5, 6],
//   3: [1, 2, 7],
//   4: [1, 2, 5, 6],
//   5: [2, 4, 6, 7],
//   6: [2, 4, 5, 7],
//   7: [3, 5, 6],
// };

// // let 입력 = prompt('입력쓰').split(' ');
// let 입력 = ["1", "7"];
// let start = Number(입력[0]);
// let end = Number(입력[1]);

// let queue = [start];
// let visited = [];

// function 최장거리(q, visited) {
//   let node = q[q.length - 1];
//   let length = 0;

//   if (node == end) {
//     return visited.length;
//   }
//   if (visited.includes(node)) {
//     return visited.length;
//   } else {
//     visited.push(node);
//   }
//   let max = [];

//   for (let i in graph[node]) {
//     q.push(graph[node][i]);
//     max.push(length, 최장거리(q, visited));

//     length = Math.max.apply(null, max);

//     queue.pop();
//   }
//   return length;
// }

// console.log(최장거리(queue, visited));

//  X

// 문제 75. 이상한 369

// 내가푼답
// let 삼육구 = Number('93')
// let arr = [];
// let count = 1;

// for (let i = 0; i <= 삼육구; i++) {
//   arr.push(count++);
// }

// let n = arr.filter(x => (x%3==0 && (x%10 == 3 || x%10 == 6 || x%10 ==9)))
// console.log(n)

// 선생님답

// function sol(n) {
//   let answer = 0;
//   let count = 1;
//   const obj = { 3: 1, 6: 2, 9: 3 };

//   while (n.length !== 0) {
//     answer += obj[parseInt(n.pop(), 10)] * count;
//     count *= 3;
//   }
//   return answer;
// }

// const user_input = "333".split("");

// console.log(sol(user_input));

// △ (100 넘어가면서 이상함; -> 다시풀기)

// 문제 76. 안전한 땅

// 선생님답

// let 사각형 = 5;
// let 탐색가능지역 = 3;
// let 지뢰밭 = [
//   [1, 0, 0, 1, 0],
//   [0, 1, 0, 0, 1],
//   [0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 0],
// ];

// let iadd = 0; //가로
// let jadd = 0; //세로
// let value = 0;
// let arr = [];

// for (let iadd = 0; iadd <= 사각형 - 탐색가능지역; iadd++) {
//   for (let jadd = 0; jadd <= 사각형 - 탐색가능지역; jadd++) {
//     for (let i = iadd; i <= 탐색가능지역 - 1 + iadd; i++) {
//       for (let j = jadd; j <= 탐색가능지역 - 1 + jadd; j++) {
//         // console.log(i, j);
//         value += 지뢰밭[i][j]
//       }
//     }
//     arr.push(value);
//     // console.log("----------");
//     value = 0;
//   }
//   console.log("!!!!!");
// }

// console.log(arr)
// console.log(Math.max.apply(null, arr))
// 지뢰밭[2][2]
// 지뢰밭[2][3]
// 지뢰밭[2][4]
// 지뢰밭[3][2]
// 지뢰밭[3][3]
// 지뢰밭[3][4]
// 지뢰밭[4][2]
// 지뢰밭[4][3]
// 지뢰밭[4][4]

// X

// 문제 77. 가장 긴 공통 부분 문자열

// S2[n] = 'T'
// S2[n+1] = 'H'
// S2[n+2] = 'I'
// S2[n+3] = 'S'
// S2[n+4] = 'I'
// S2[n+5] = 'S'

// function sol(str) {
//   let result = [];
//   for (let i = 1; i < str.length + 1; i++) {
//     for (let j = 0; j < i; j++) {
//       result.push(str.slice(j, j + str.length + 1 - i));
//     }
//   }
//   return result;
// }

// console.log(sol("ABCDEF"));
// let inputOne = "ABCDF";
// let inputTwo = "BCE";
// let ArrayOne = sol(inputOne);
// let ArrayTwo = sol(inputTwo);

// let inter = ArrayOne.filter((x) => ArrayOne.includes(x));
// console.log(inter);

// inter.sort((a, b) => {
//   return b.length - a.length;
// });

// console.log(inter[0].length);

// 문제78. 원형테이블

// 내가푼답
// let num = prompt().split(' ')
// let num = ["6", "3"];
// let arr = [];

// for (let i = 1; i <= num[0]; i++) {
//   arr.push(i);
// }

// function cic(arr) {
//   if (arr.length > 2) {
//     let i = 0;
//     arr.splice(i, 1);
//     arr.splice(i + 2, 1);

//     cic(arr);
//   }
//   return arr;
// }

// console.log(cic(arr));

// 선생님답
// const user_input = "6 3".split(" ");
// const n = parseInt(user_input[0], 10);
// const k = parseInt(user_input[1], 10);
// console.log(n, k);

// function sol(n, k) {
//   let index = 0;
//   let q = [];
//   for (let i = 0; i < n; i++) {
//     q.push(i + 1);
//   }
//   console.log(q)
//   while (q.length > 2) {
//     if (index > q.length - 1) {
//       index -= q.length;
//     }
//     q.splice(index, 1);
//     index += k;
//     index -= 1;
//   }
//   return q;
// }

// console.log(sol(n, k));
// O

// 문제 79. 순회하는 리스트

// 내기푼답
// const arr = [10, 20, 25, 27, 34, 35, 39];
// // const n = parseInt(prompt("순회횟수는?"), 10);
// const n = 2;
// let arr1 = [];
// let 차 = [];

// for(let i = 0; i < arr.length; i++) {
//     arr1.push(arr[i])
// }

// function rotate(inL, inN) {
//   for (let i = 0; i < inN; i++) {
//     let m = inL.pop();
//     inL.unshift(m);
//   }
//   return inL;
// }
// // console.log(arr);
// // console.log(rotate(arr1, n));
// rotate(arr1, n);

// for (let i in arr) {
//     if (arr[i] > arr1[i]) {
//       차.push(arr[i] - arr1[i]);
//     }
//     if (arr[i] < arr1[i]) {
//       차.push(arr1[i] - arr[i]);
//     }
//   }
// let indexnum = 차.indexOf(Math.min.apply(null, 차))
// // console.log(차)

// console.log(
// `index: ${indexnum}
// value: ${arr[indexnum]}, ${arr1[indexnum]}`)

// 선생님답
// const 일 = [10, 20, 25, 27, 34, 35, 39];
// const turn = 3;

// function rotate(a, t){
//     let b = a.slice() // 배열복사 이런식
//     let c = [];

//     for(let i=0; i<t; i++){
//         b.unshift(b.pop());
//     }
//     for(let i in b){
//         c.push(Math.abs(a[i]-b[i]))// Math.abs는 정수를 반환함
//     }

//     console.log(a);
//     console.log(b);
//     console.log(c);

//     const m = Math.min.apply(null, c);
//     let index = c.indexOf(m);

//     console.log(index);
//     console.log(a[index], b[index]);
// }

// rotate(일, turn)

// O (다시한번)

// 문제 80. 순열과 조합
// 내가푼답
// let arr = ["ㄱ", "ㄴ", "ㄷ", "ㄹ"];
// let len = 3;

// function rotate(arr, len) {
//   const results = [];
//   if (len === 1) {
//     return arr.map((x) => [x]);
//   }

//   arr.forEach((f, ind, ori) => {
//     const rest = ori.slice(ind + 1); // 해당하는 fixed를 제외한 나머지 뒤
//     const combi = rotate(rest, len - 1); // (재귀함수)나머지에 대해서 조합을 구한다.
//     const att = combi.map(c => [f, ...c]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
//     results.push(...att); // 배열 spread syntax 로 모두다 push
//   });

//   return results;
// }

// console.log(rotate(arr, len));

// 선생님답

// function combination(charsArray, n) {
//   let combi = [];

//   const f = (pre, charsArray) => {
//     for (let i = 0; i < charsArray.length; i++) {
//         combi.push(pre + charsArray[i]);
//         // console.log(pre + charsArray[i]);
//       f(pre + charsArray[i], charsArray.slice(i + 1));
//     }
//   };

//   f("", charsArray);
// //   console.log(charsArray);
// //   console.log(combi);

//   const result = combi.filter(x => x.length === n) // 3개이상만 추출
//   return result;
// }

// const arr = "A,B,C,D".split(",");
// const user_input_n = 3;

// console.log(combination(arr, user_input_n));

// △ (구글링)

// 문제81. 지뢰찾기

// 내가풀(다만)것

// [i][n]번째 인덱스 + [i-1][n],[i][n-1],[i][n+1],[i+1][n]
// let flag = prompt('깃발을 입력하시오').split("\n");
// let flag = "0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0".split("\n");
// let mine = [];
// let f = flag.map((x) => x.replace("1", "f").split(" "));
// console.log(f);

// let count = 0;
// let search = 0;

// for (let i of f) {
//   console.log(i);
//   for (let n of i) {
//     // console.log(count, search);
//     if (n === "f") {
//       i[search] = "*";
//     }
//     search += 1;
//   }
//   count += 1;
//   search = 0;
// }


선생님답
let value = "0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0";
let sp = value.split("\n");
let count = 0;

for (let i of sp) {
  sp[count] = i.replace("1", "f").split(" ");
  count += 1;
}

count = 0;
let sc = 0;

for (let s of sp) {
  for (let i of s) {
    if (i === "f") {
      sc = s.indexOf(i)
      // console.log(count, sc)
      if (sc > 0) {
        s[sc - 1] = "*";
      }
      if (sc < 4) {
        s[sc + 1] = "*";
      }
      if (count > 0) {
        sp[count - 1][sc] = "*";
      }
      if (count < 4) {
        sp[count + 1][sc] = "*";
      }
    }
    sc += 1;
  }
  console.log(s);
  count += 1;
  sc = 0;
}

// △ (1차원 배열로 다시풀기)