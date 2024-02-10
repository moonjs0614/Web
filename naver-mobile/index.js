// searchInput
const searchInput = document.querySelector(".search-input");

searchInput.addEventListener('keyup', function(e){
    console.log(e);
    if (e.code === "Enter"){
        if (e.target.value === ""){
            alert("검색어를 입력하지 않았습니다");
            return;
        }
        const target = "https://search.naver.com/search.naver?query=";

        window.open(target + e.target.value, "_blank");
    }
});

// next



// X
const X = document.querySelector(".X");
const QR = document.querySelector(".QR");

X.addEventListener('click', function(){
    QR = display.none;
})