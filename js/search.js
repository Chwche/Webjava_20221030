document.getElementById("search_btn").addEventListener('click',search_message);

var search_array = []; // 빈 배열 – 전역 변수

function search_message(){
   	alert("검색을 수행합니다!");

	
let search_str = document.querySelector("#search_txt"); // 변수에 저장
    if(search_str.value.length === 0)
		{ // 문자 길이, 엄격한 비교
		alert("검색어가 비었습니다. 입력해주세요"); 
    	}
		else
		{
		const filteredText = no_str(search_str.value); // 비속어 필터링

    	if (filteredText !== search_str.value)
		{
       	alert(`${filteredText}`);
		}
		else
	// 추가구현: 표시되는 배열 10개 제한
		{
		if (search_array.length >= 10)
		{
		search_array.shift(); //배열의 첫번쨰 요소 삭제
		}
		search_array.push(search_str.value); // 배열에 검색어 추가
       	let text = document.getElementById("search_message").innerHTML = search_array.toString(); // 값 변환
       	document.querySelector("#form_main").submit();
		}
   		}
	
	// 추가구현: 비속어 제한
	
	function no_str(text) {
  	const bannedWords = ["Rjwu", "tlqkf", "qudtls"]; // 필터링할 비속어 목록
	
	for (let i = 0; i < bannedWords.length; i++)
	{
    const bannedWord = bannedWords[i];
    const regex = new RegExp(`\\b${bannedWord}\\b`, 'gi'); // 정규식으로 단어 경계 매칭

    if (regex.test(text))
	{
     return `${text}는 검색어로 적절하지 않습니다.`;
    }
  	}

  	return text;
	}
	}