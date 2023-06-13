//자바스크립트 연동
	function addJavascript(jsname) { // 자바스크립트 외부 연동
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
	}
	addJavascript('/js/security.js'); // 암복호화 함수
	addJavascript('/js/session.js'); // 세션 함수
	addJavascript('/js/cookie.js'); // 쿠키 함수 

//추가구현: 세션 시간 유지
	function keepSession() {
  setCookie('session', 'active', 5/1440); // 5분 유지 (5분 = 5/1440)
  setTimeout(logout, 5 * 60 * 1000); // 5분 후 자동 로그아웃
}

//추가구현: 아이디패스워드필터링
	function login() {
    let form = document.querySelector("#form_main");
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
	let check = document.querySelector("#idSaveCheck");

	    
    if(check.checked == true) { // 아이디 체크 o
            alert("쿠키를 저장합니다.");
            setCookie("id", id.value, 5/1440); // 5분 유지
            alert("쿠키 값 :" + id.value);
    } 
    else { // 아이디 체크 x
            setCookie("id", id.value, 0); //날짜를 0 - 쿠키 삭제
    }
    
    if (id.value.length === 0 || password.value.length === 0) {
        alert("아이디와 비밀번호를 모두 입력해주세요.");
    } else if (!login_check(id.value, password.value)) {
        alert("올바른 이메일과 패스워드 형식을 입력해주세요.");
    } else {
		form.action = "../index_login.html";
    	form.method = "get";
		form.submit();
		session_set(); // 세션 생성
		login_count();
		keepSession();
    }
	}

//추가구현: 로그인 제한
	//로그인 제한 체크
	function checkLoginAttempts() {
 	var attempts = getCookie('login_attempts');
  	attempts = attempts ? parseInt(attempts) + 1 : 1;
  	setCookie('login_attempts', attempts, 0); // 0일로 설정하여 세션 쿠키로 설정
  
  	if (attempts >= 3) {
    alert("로그인 제한: 3번 이상 실패하였습니다.");
    disableLoginForm(); // 로그인 폼 비활성화
  	}
	}

	// 로그인 폼 비활성화
	function disableLoginForm() {
  	var form = document.querySelector("#form_main");
  	var inputs = form.getElementsByTagName("input");
  
  	for (var i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
  	}
  
  	var loginButton = form.querySelector("button[type='button']");
  	loginButton.disabled = true;
	}

//추가구현: 로그인, 로그아웃 쿠키 카운팅
	//로그인카운트
	function login_count() {
  	var count = getCookie('login_cnt');
 	count = count ? parseInt(count) + 1 : 1;
  	console.log('로그인 횟수:' + count); // 디버깅용 로그
 	setCookie('login_cnt', count, 365);
	}
	//로그아웃
	function logout()
	{
	session_del(); // 세션 삭제
    location.href = "../index.html";
    logout_count();
	}
	//로그아웃카운트
	function logout_count() {
  	var count = getCookie('logout_cnt');
  	count = count ? parseInt(count) + 1 : 1;
  	setCookie('logout_cnt', count, 365);
	}

	//아이디패스워드정규식필터링
	function login_check(email, password)
	{
    const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/;

    if (!emailRegex.test(email))
	{
    return false;
    }

    if (!passwordRegex.test(password))
	{
	return false;
	}
    return true;
	}

//방갑습니다 띄우기
	function get_id(){
	if(true)
	{
		decrypt_text();
	}
	else
	{
    var getParameters = function(paramName){ // 변수 = 함수(이름)
    var returnValue; // 리턴값을 위한 변수 선언
    var url = location.href; // 현재 접속 중인 주소 정보 저장
    var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&'); // ?기준 slice 한 후 split 으로 나눔
        for(var i = 0; i < parameters.length; i++) { 
		    var varName = parameters[i].split('=')[0];
            
            if (varName.toUpperCase() == paramName.toUpperCase()) {
                returnValue = parameters[i].split('=')[1];
                return decodeURIComponent(returnValue);
            // 나누어진 값의 비교를 통해 paramName 으로 요청된 데이터의 값만 return
		    }
	    } // 2중 for문 끝
	}; // 함수 끝
	alert(getParameters('id') + '님 방갑습니다!'); // 메시지 창 출력
	}
	}

