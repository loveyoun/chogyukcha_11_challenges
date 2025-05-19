//* GET request. POST to HTMl: not supported.
// const urlParam = location.search; // ?query-string
const urlStr = location.href;
const url = new URL(urlStr);
const urlParams = url.searchParams;

const id = urlParams.get("id");
const uname = urlParams.get("name");
const gender = urlParams.get("gender");
const phone = urlParams.get("phone");
const email = urlParams.get("email");

//* JOIN
if (document.getElementById("join")) {
  const join = document.getElementById("join");
  join.addEventListener("click", function () {
    location.href = "sign_up.html";
  });

  if (urlParams.size > 2) {
    const str = `${id}님 환영합니다!\n
  회원가입 시 입력하신 내용은 다음과 같습니다.\n
  > 이름: ${uname}\n
  > 성별: ${gender}\n
  > 전화번호: ${phone}\n
  > 이메일: ${email}`;

    alert(str);
    location.href = "kream_logged.html"; // :redirect
  }
}

//* LOGIN
if (document.getElementById("login")) {
  const login = document.getElementById("login");
  login.addEventListener("click", function () {
    location.href = "login.html";
  });

  if (urlParams.size === 2) {
    const str = `${id}님 로그인 되었습니다.`;
    alert(str);
    location.href = "kream_logged.html";
  }
}

//* LOGOUT
if (document.getElementById("logout")) {
  const logout = document.getElementById("logout");
  logout.addEventListener("click", function () {
    location.href = "kream.html";
  });
}
