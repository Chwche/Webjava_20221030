//쿠키 SET
function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + value + expires + '; path=/';
}
		
//쿠키 GET
	function getCookie(name) {
  	var cookieArr = document.cookie.split(';');
  	for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split('=');
    var cookieName = cookiePair[0].trim();
    var cookieValue = cookiePair[1].trim();
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
	}
  	return null;
	}

//쿠키에서 가져온 아이디 삽입
	function init(){ // 로그인 폼에 쿠키에서 가져온 아이디 입력
    let id = document.querySelector("#floatingInput");
    let check = document.querySelector("#idSaveCheck");
    let get_id = getCookie("id");
    if(get_id) { 
    id.value = get_id; 
    check.checked = true; 
    }
	session_check(); // 세션 유무 검사
	}


//쿠키삭제
	function deleteCookie(cookieName){
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
	}


//쿠키set
//	function setCookie(name, value, expiredays) {
//        var date = new Date();
//        date.setDate(date.getDate() + expiredays);
//        document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "SameSite=None; Secure";        
//    }

//쿠키get
//	function getCookie(name) {
//        var cookie = document.cookie;
//        console.log("쿠키를 요청합니다.");
//        if (cookie != "") {
//            var cookie_array = cookie.split("; ");
//            for ( var index in cookie_array) {
//                var cookie_name = cookie_array[index].split("=");
//                
//                if (cookie_name[0] == "id") {
//                    return cookie_name[1];
//                }
//            }
//        }
//        return ;
//	}
