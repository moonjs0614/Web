(function(){
    const first = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents");
    console.log(first.textContent);
})();

(function(){
    const second_name = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-contents > a");
    second_name.textContent = "삼겹살과 그대라면";
    const second_score = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-contents > div > strong > span");
    second_score.textContent = "5%";
    const second_date = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-contents > span.txt-info > strong");
    second_date.textContent = "1985.07.07 개봉";
})();

(function(){
    let first_img = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-image > a > span");
    let first_box = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents");
    let temp_img = first_img.innerHTML;
    let temp_box = first_box.innerHTML;
    let third_img = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(3) > div.box-image > a > span");
    let third_box = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(3) > div.box-contents");
    first_box.innerHTML = third_box.innerHTML;
    first_img.innerHTML = third_img.innerHTML;
    third_img.innerHTML = temp_img;
    third_box.innerHTML = temp_box;
})();