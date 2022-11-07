/* #2 welcome to javascript */

/* 경고창 띄우기, 괄호 안에 메시지 넣어서 사용 */
alert("hi");

/* 콘솔 화면에 메시지를 띄우기, 괄호 안에 값을 넣어서 사용
   숫자나 문자열 모두 가능함 */
console.log(5);
console.log("My name is Yehyeok");

/* 변수(variable), 하나의 값을 저장하기 위해 확보한 메모리 공간 자체
   또는 그 메모리 공간을 식별하기 위해 붙인 이름을 말함  변수를 선언하는
   방법 중 const가 있음 const는 상수를 선언하는 키워드로 사용됨
   const는 처음 선언 이후 다른 값을 넣을 수 없음 */
const a = 5;
const myName = "Yehyeok";

/* console.log()를 이용해 콘솔 화면에 값을 보여줄 수 있으며, 연산도 가능 */
console.log(a);
console.log(a + 10);
console.log("My name is " + myName);

/* 변수를 선언하는 다른 방법 중에서 let이 있음 let은 값을 재할당 할 수 있음
   그리고 const와 let 모두 변수 명을 중복으로 선언할 수 없음*/
let b = 5;
/*let b = 10; 처럼 동일한 이름으로 중복 선언할 수 없음 */

/* 처음 b를 출력하면 5가 나옴, 변수 b의 값을 10으로 재할당 후 출력하면 10이 나옴 */
console.log(b);
b = 10;
console.log(b);

/* 원래 변수를 선언하는 방법은 var 하나 뿐이었음 (업데이트 후 위 let, const 탄생)
   var는 언제든지 동일한 이름으로 중복 선언이 가능함 유연한 변수 선언이 가능하다고
   보기에는 중복 선언으로 인한 위험이 더 크기 때문에 단점으로 여겨짐
   아래 코드는 같은 이름으로 중복 선언이 가능함을 보여줌 */
var c = 10;
console.log(c);
var c = 20;
console.log(c);

/* Boolean, true or false 값을 채우는 것
   null, false와는 다름 null은 아무것도 없는 상태로 채우는 것
   true나 false, null로 변수 d, e가 정의되어 있는 상태
   null은 절대 자연적으로 발생하지 않음 값이 '없음'을 알려주기 위해 사용 */
const d = false;
console.log(d);
const e = null;
console.log(e);

/* varuable은 존재하지만 정의하지 않은 상태
   컴퓨터 메모리에는 존재하지만 값이 정의되지 않는 상태
   undefined */
let f;
console.log(f);

/* Arrays, []를 사용하고 요소 사이에는 ,를 사용함
   콘솔창에서 배열의 길이와 요소들을 볼 수 있음 */
const mon = "월요일";
const tue = "화요일";
const wed = "수요일";
const thu = "목요일";
const fri = "금요일";
const sat = "토요일";
const daysOfWeek = [mon, tue, wed, thu, fri, sat];
/* const daysOfWeek = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
   이처럼 직접 문자열을 넣는 것도 가능, 숫자, 문자열, true, false, undefined 등 모두 삽입 가능 */
console.log(daysOfWeek);
/* 배열 이름[숫자] 형태를 이용해 배열의 값을 선택할 수 있음
   인덱스로 0부터 시작 0, 1, 2, ... , 5는(6번째) 토요일
   daysOfWeek[10]은 undefined로 나옴, 그쪽에 값이 없기 때문임 */
console.log(daysOfWeek[5]);
console.log(daysOfWeek[10]);

/* 배열 이름.push(추가할 요소) 형태를 이용해 배열에 요소 추가 가능 */
daysOfWeek.push("일요일");
console.log(daysOfWeek);

/* Object, player라는 오브젝트가 생기고 그 오브젝트는
   이름이 Yehyeok 나이는 23, 등급은 A인 것이다.
   player.grade 이면 player라는 오브젝트의 grade을 가르킴
   (오브젝트에 접근하는 방법인 셈)
   값들이 무엇을 의미하는지 알기 쉬워짐 */
const player = {
  name: "Yehyeok",
  age: 23,
  grade: "A",
};
console.log(player.grade);

/* player.grade를 변경하였다. const는 변경할 수 없지만
   이것은 오브젝트를 변경한 것이지 const player를 변경한 것이 아님
   만약 player = true를 하면 const player를 player라는 오브젝트에서
   true 타입으로 바뀐 것이니 이때는 오류가 발생함 
   constant 안에 무언가를 바꿀때는 오류가 발생하지 않음 */
player.grade = "A+";
console.log(player.grade);

/* 오브젝트에 무언가를 추가할 수도 있음 */
console.log(player);
player.money = 300;
console.log(player);
