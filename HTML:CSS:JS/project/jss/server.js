function validateString(input) {
  var pattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]{8,29}$/;
  return !/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(input) && pattern.test(input);
}

// let accounts = [
//   { id: "id", pwd: "pwd" },
//   { id: "id2", pwd: "pwd2" },
// ];
// localStorage.setItem("server_session", accounts);
// console.log(localStorage.getItem("server_session"));

// sign_up.html
if (document.getElementById("signupform")) {
  const signupform = document.getElementById("signupform");
  let pwd1 = document.getElementById("pwd1");
  let pwd1warn = document.getElementById("pwd1warn");

  // responsive pwd validation
  pwd1.addEventListener("input", () => {
    if (!validateString(pwd1.value)) pwd1warn.style.display = "block";
    else pwd1warn.style.display = "none";
  });

  // 제출 이벤트를 받는다 (이벤트 핸들링)
  signupform.addEventListener("submit", function (e) {
    // event handler 익명함수
    // e.preventDefault(); // 새로고침(기존 기능) 차단

    // 제출된 입력 값들을 참조한다.
    let userId = signupform.id.value;
    let userPw1 = e.target.pw1.value;
    let userPw2 = e.target.pw2.value;

    if (userId.length < 6) {
      alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요.");
      e.preventDefault();
      return;
    }

    if (!validateString(userPw1)) {
      alert("* 영문, 숫자, 특수문자를 포함한 8자 이상 30자 미만이어야 합니다.");
      e.preventDefault();
      return;
    }

    if (userPw1 != userPw2) {
      // 형변환, !== 형변환 x
      alert("비밀번호가 일치하지 않습니다.");
      e.preventDefault();
      return;
    }

    // accounts.push({ id: userId, pwd: userPw1 });
    localStorage.setItem(userId, userPw1);
  });
}

// login.html
if (document.getElementById("loginform")) {
  const loginform = document.getElementById("loginform");

  loginform.addEventListener("submit", function (e) {
    let userId = form.id.value;
    let userPw1 = e.target.pw1.value;
    let tmp = localStorage.getItem(userId);
    
    if (userId === "" || tmp === null) {
      // string "null" vs object null
      alert("아이디를 확인해주세요.");
      e.preventDefault();
    } else if (tmp !== userPw1) {
      alert("비밀번호를 확인해주세요.");
      e.preventDefault();
    }
  });
}
