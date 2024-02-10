console.log('hello');
(function(){
    const test = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > a > strong");
    test.textContent;
    test.innerHTML;
    test.innerText;
})();

// innerText : 임의로 보여주기 실은 데이터를 설정했으면 그건 가져올 수 없다.
// -> 텍스트만 가져온다.  hello<b style:display="none">hello2</b> -> hello

//textContent : 보여주기 싫은 데이터를 임의로 설정했어도 가져온다
// -> 텍스트만 가져온다.  hello<b style:display="none">hello2</b> -> hellohello2

//innerHTML : 태그도 가져온다
// -> 텍스트만 가져온다.  hello<b style:display="none">hello2</b> -> hello<b style:display="none">hello2</b>

// 설정할 때
// innerText, textContent -> 단순 텍스트 저장 -> 태그 형식이어도 텍스트 처리
// innerHTML -> 태그가 있으면 태그로 저장 -> 태그가 적용되어 저장