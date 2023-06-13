 //추가구현: 아이디패스워드필터링
	function login() {
    let form = document.querySelector("#form_main");
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");

    if (id.value.length === 0 || password.value.length === 0) {
        alert("아이디와 비밀번호를 모두 입력해주세요.");
    } else if (!login_check(id.value, password.value)) {
        alert("올바른 이메일과 패스워드 형식을 입력해주세요.");
    } else {
		form.action = "../index_login.html";
    	form.method = "get";
		form.submit();
    }
	}

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


//로그아웃
	function logout(){
    location.href="../index.html";
	}

//방갑습니다 띄우기
	function get_id(){
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