//원시 자료형

// Number

typeof(100);
typeof(-100.1234);

// String
typeof("안녕하세요");

// Boolean
typeof(true);

// Null : 값이 비어있음을 명시하는 것
// typeof(null) <- object 라 출력되는 것은 js 자체 버그
typeof(null)

//undefined : 값을 아무것도 할당받지 못한 상태
typeof(undefined)

// 참조 자료형 (아래 모두 객체로 취급)
// Array
// new Array()
const hello = [1, 2, 3, 4];
// const test = [1, "hello", true];

// Object
const result = {a:5, b:10};
result['a'];
result.a;

// Function
// 함수는 두가지 방식으로 선언 가능

// 함수 선언식
function aa(){
    console.log("aa");
}

// 함수 표현식
const bb = function(){
    console.log("bb");
}
bb();