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

/* function, 특별한 목적의 작업을 수행하도록 설계된 독립적인 블록
   필요할 때마다 호출하여 해당 작업을 반복해서 수행할 수 있음
   인사하는 함수를 호출하는 코드 */
function sayHello() {
  console.log("Hello! My name is Yehyeok");
}
sayHello();

/* 어떤 함수를 호출할 때 괄호안에 어떤 값 or 변수를 쓰면 그것을 인자라고 함
   함수에서 매개변수를 적어둔 상태라면, 호출 시 인자로 전달한 값을 매개변수를
   통해 함수 안에서 사용 가능해짐
   "Yehyeok"를 인자(argument), 함수 괄호안에 써둔 name이 매개변수 */
function sayHi(name) {
  console.log("Hello! My name is " + name);
}
sayHi("Yehyeok");
sayHi("IronMan");

/* 매개변수는 여러 개 만들 수 있음
   매개변수의 이름은 겹치지만 않으면 아무거나 상관없다. 오로지 전달하는
   순서에 따라 인자가 전달됨 (h, g)가 매개변수지만 호출할 때 (g, h)로 인자를
   넘겨주면 매개변수 h에는 g 인자값이 넘어가고 매개변수 g에는 h값이 들어감
   10 나누기 2 = 5가 출력됨 */
function divide(h, g) {
  console.log(h / g);
}
const g = 10;
const h = 2;
divide(g, h);

/* student.함수() 형태로 사용 가능
   만든 오브젝트가 상대방의 이름만 받으면 누구한테나 인사할 수 있게 됨*/
const student = {
  name: "Yehyeok",
  sayHello: function (otherName) {
    console.log("Hello! " + otherName + " nice to meet you");
  },
};
console.log(student.name);
student.sayHello("IronMan");

/* 만약 인자를 매개변수보다 많이 넘겨주더라도 함수는 순서대로 첫 번째, 한 개만
   알아듣고 실행함 그리고 매개변수인 otherName은 {}로 둘러쌓인 바디에서만 접근 가능*/
student.sayHello("IronMan", "SpiderMan", "Hulk");

/* return을 이용하면 함수의 결과를 외부에서 사용할 수 있음
   plusOne()에 i(1)를 넘겨주고 매개변수가 i의 값을 받아 num + 1이 계산된 값이
   return을 통해 결과를 외부에서 받아서 사용 가능 
   (예시: plusOne(1)의 값을 다른 변수에 저장해서 연산이나 출력에 사용) */
const i = 1;
function plusOne(num) {
  return num + 1;
}
const j = plusOne(i);
console.log(j);
console.log(j + 3);

/* calculator 예제를 통해 머릿속에서 값을 바꿔가며 흐름을 이해하보기 */
const calculator = {
  plus: function (a, b) {
    return a + b;
    console.log("hello");
    /* 이와 같이 함수 실행 중 return을 만나면 값을 반환하며 종료함
       그렇기에 이 문장(console.log())은 실행되지 않음 */
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

/* 변수 5가지는 함수의 리턴 값의 타입을 갖게 됨 (숫자 타입)
   plusResult: 5, minusResult: -5, timesResult: -50,
   divideResult: -10, powerResult: -100000 */
const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, plusResult);

/* prompt()는 사용자에게 창을 띄우고 값을 받기를 기다림,
   창에서 값을 받거나 취소하지 않으면 다음 문장이 실행되지 않음
   이 방법은 아주 오래된 방법, css도 사용 불가 => 잘 안씀 */
const prmt = prompt("How old ary you?");
console.log("Ok!");

/* typeof()를 이용하면 type을 볼 수 있음 prompt()에 숫자를
   입력해도 string으로 나옴, 그 이유는 string이 디폴트이기 때문
   따라서 다른 타입으로 변환해주는 작업을 해야함
   string에서 number로 변환해주는 함수: parseInt()
   만약 숫자가 아닌 값이 입력되면 변환 안됨(NaN) */
console.log(typeof prmt);
const userAge = parseInt(prompt("How old are you?"));
console.log(userAge);

/* if, else 문 쉽게 말해 if는 어떠한 값이 true이면 그 블록 안에
   문장이 실행되고 아닐 경우 else 블록에 있는 문장이 실행 됨
   if만 써도 됨, else는 선택사항임
   isNaN()은 넘겨준 인자가 NaN일 경우 true를 리턴
   따라서 입력받은 userAge가 NaN이면 Please~가 실행 */
if (isNaN(userAge)) {
  console.log("Please write a number.");
} else {
  console.log("Thank you for writing your age.");
}

/* else if문은 하나의 condition을 더 추가한다고 생각하면 됨
   number형으로 userAge를 받았는데 이때 음주가 가능한지 체크
   18세 미만이라면 아직 어리다는 문장이 나오고 18세 이상이라면
   음주가 가능하다는 문장이 실행됨 
   &&, || 등 AND, OR 등 여러 조건을 사용할 수 있음 */
if (isNaN(userAge)) {
  console.log("Please write a number.");
} else if (userAge < 18 && true) {
  console.log("You art too young.");
} else {
  console.log("You can drink.");
}

/* Conditionals Recap
   prompt를 이용해 점수를 입력 받는 과정에서 prompt로 받아온
   값의 디폴트 값은 string이기 때문에 parseInt를 통해 숫자로
   변환, 그 후 if문을 이용해 적절한 결과를 출력함 */
const myScore = parseInt(prompt("What is your score"));

if (isNaN(myScore)) {
  console.log("Please write a number!"); // NaN인 경우
} else if (myScore < 50) {
  console.log("Your grade is C");
} else if (myScore >= 50 && myScore < 70) {
  console.log("Your grade is B");
} else if (myScore >= 70 && myScore < 90) {
  console.log("Your grade is A");
} else {
  console.log("Your grade is A+");
}

/* document, 브라우저에 존재하는 object
   이 document 객체로 아주 쉽게 HTML에 접근할 수 있음
   HTML에서의 title 속성이 무엇이던 간에 js에서 접근해서 변경하면
   title 값이 변경됨, 두 가지 일을 할 수 있게 됨
   |document에서 항목들을 가져오는 일, 이 document 항목들을 변경하는 일| */
document.title = "Hello! From Js!";

/* console.dir(객체)을 이용하면 객체의 데이터를 자세히 볼 수 있음 */
console.dir(document);

/* getElementById, id가 title인 HTML 태그를 통채로 가져올 수 있음
   콘솔창에 직접 타이핑해보면 쉽게 볼 수 있음 */
document.getElementById("title");

/* getElementByClassName, HTML에 class를 설정해두고 사용 가능
   한 번에 많은 element를 가져와야 할 때 className을 사용 
   hellos를 보면 배열 형태로 요소들을 볼 수 있음 */
const hellos = document.getElementsByClassName("hello");
console.log(hellos);
document.get;

/* getElementBy ~ ,를 통해 원하는 element를 골라서 가져오거나 변경 가능 
   Id, ClassName, TagName 등, 추가로 querySelector, querySelectorAll도 있음
   querySelector는 css처럼 element에 접근할 수 있음
   HTML에서 class가 hello인 요소에 접근 css처럼 .className으로 사용, 태그도 가능 h1등
   querySelector는 지정하는 방법이 동일한 요소 중 첫 번째 요소만 가져옴
   querySelectorAll은 array 형태로 모두 접근할 수 있음
   위 두 개를 주로 사용할 예정 */
document.querySelector(".hello");

/* 그래서? 접근하면 그걸로 무엇을 할 수 있나?
   많은 것을 할 수 있음, 일단 한 번 가져온 h1 태그의 색상을 바꿔보자
   .hello로 가져오면, 3개가 넘어오는데, 그 중 첫 번째 요소가 선택
   querySelectorAll을 사용하면 모두 적용 */
const title = document.querySelector(".hello");
title.style.color = "blue";

/* event, 어떤 행위: 클릭, 입력 등 모든 이벤트는 js가 listen 가능
   eventListener : event를 listen -> js에게 무슨 event를 listen 
                                     하고 싶은지 알려줘야 함
   title.addEventListener("click") : 누군가가 title을 click하는 것을 listen할 거임
                                     -> 무언가를 해줘야함 
   그럼 파란색으로 바뀐 h1 태그를 클릭하면 콘솔창에 click 되었다고 뜸 */
function handleTitleClick() {
  console.log("title was clicked!");
}

title.addEventListener("click", handleTitleClick);

/* HTML Heading Element : js 관점의 HTML Element임
   잘 검색해서 찾아볼 수 있음
   mouseenter는 마우스를 올리면 반응
   정리하면, js로 HTML의 element를 가져오고 가져온 element에 eventlistener를 추가하고
   event가 발생하면 function이 실행되는 구조 */
function handMouseEnter() {
  console.log("title touch!");
}
title.addEventListener("mouseenter", handMouseEnter);
