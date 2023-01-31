const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

/* submit 된다고 해서 그냥 실행되는 것이 아님. 실제로는 어떠한 argument를
   넣어주어야 실행됨. 그 argument에 정체는 바로 event에 대한 기본 정보들
   우리가 인자로 event를 작성하여 공간을 할당해준거임 그러니까 이 함수가
   실행될 때는 지금 막 벌어진 일들에 대한 정보들이 event라는 공간에 저장되고
   그 정보를 사용하는 것임 */
function onLoginSubmit(event) {
  /* submit이 발생하면 기본적으로 브라우저는 페이지를 새로고침함 
     우리가 원하는 바는 아니기에 preventDefault()로 기본 동작을 막을 수 있음 */
  event.preventDefault();

  /* loginForm은 css를 이용해 없애고 greeting을 보이게 함 */
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // localStorage에 key-value 형태로 저장 가능
  localStorage.setItem("username", username);
  greeting.innerText = "Hello " + username; // `Hello ${username}`(기호 조심) 같은 방법임
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

/* submit이 발생하면 onLoginSubmit()을 실행시킨다는 의미
   js는 onLoginSubmit()을 호출할 때 인자를 담아서 호출함
   해당 인자는 event object를 담은 정보들 */
loginForm.addEventListener("submit", onLoginSubmit);
