const form = document.getElementById("form")

// 제출 이벤트를 받는다 (이벤트 핸들링)
form.addEventListener("submit", function(e){ // event handler 익명함수
  e.preventDefault(); // 새로고침(기존 기능) 차단

  // 제출된 입력 값들을 참조한다.
  let userId = form.id.value
  let userPw1 = e.target.pw1.value
  let userPw2 = e.target.pw2.value
  let userName = e.target.name.value
  let userPhone = e.target.phone.value
  let userPosition = e.target.position.value
  let userGender = e.target.gender.value
  let userEmail = e.target.email.value
  let userIntro = e.target.intro.value

  console.log(userId, userPw1, userPw2, userName,
    userPhone, userPosition, userGender, userEmail, userIntro)

  if(userId.length < 6){
    alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요.")
    return;
  }

  if(userPw1 !== userPw2){
    alert("비밀번호가 일치하지 않습니다.")
    return;
  }

  document.body.innerHTML = `<strong>${userId}님 환영합니다!</strong><br>
  회원가입 시 입력하신 내용은 다음과 같습니다.<br>
  > 아이디:  ${userId}<br>
  > 이름: ${userName}<br>
  > 전화번호: ${userPhone}<br>
  > 원하는 직무: userPoisition`
  // p = document.createElement("p")
  // p.textContent = `아이디:  ${userId}, 이름: ${userName},
  // 전화번호: ${userPhone}, 원하는 직무: userPoisition`
  // document.body.appendChild(p)

  // document.write(`<p>${userId}님 환영합니다</p>`) // deprecated
})