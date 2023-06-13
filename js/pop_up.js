//쿠키set함수
	function setCookie(name, value, expiredays) {
        var date = new Date();
        date.setDate(date.getDate() + expiredays);
        document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "SameSite=None; Secure";
        
    }

//쿠키get함수
	function getCookie(name) {
        var cookie = document.cookie;
        console.log("쿠키를 요청합니다.");
        if (cookie != "") {
            var cookie_array = cookie.split("; ");
            for ( var index in cookie_array) {
                var cookie_name = cookie_array[index].split("=");
                
                if (cookie_name[0] == "popupYN") {
                    return cookie_name[1];
                }
            }
        }
        return ;
	}

//기존 pop_up함수
	function pop_up() {
	var cookieCheck = getCookie("popupYN");
        if (cookieCheck != "N"){
        window.open("pop_up.html", "팝업테스트", "width=400, height=300, top=10, left=10");
        }
}


//체크박스 클릭 시 윈도우 닫는 함수
	function closePopup() {
        if (document.getElementById('check_popup').value) {
            setCookie("popupYN", "N", 1);
            console.log("쿠키를 설정합니다.");
            self.close();
        }
    }
