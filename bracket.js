/**
 * 문제 설명
n 개의 '(' 와 m 개의 ')' 를 이용해 문자열을 만들려고 합니다.
이때, 완성된 문자열이 반드시 올바른 괄호 문자열일 필요는 없으며, 반드시 모든 문자를 사용해야 합니다.
'(' 의 개수 n과 ')'의 개수 m이 매개변수로 주어질 때,
n개의 '('와 m개의 ')'를 모두 사용해서 만들 수 있는 문자열의 개수를 return 하도록 solution 함수를 완성해주세요.

제한사항
n은 1이상 16이하의 자연수입니다.
m은 1이상 16이하의 자연수입니다.
정답은 231 - 1 이하의 자연수입니다.
 */

let fact_arr = [];

function getFactorial(n) {
    if(n < 2) {
        fact_arr[n] = 1;

    } else if (!fact_arr[n]) {
        fact_arr[n] = n * getFactorial(n-1);
    }

    return fact_arr[n];
}

function solution(n, m) {
    var answer = 0;

    if (n >= 1 && n <= 16 && m >= 1 && m <= 16) {
        answer = getFactorial(n + m)/(getFactorial(n)*getFactorial(m));
    }

    return answer;
}

for (let i=1; i<=16; i++) {
    for(let j=1; j<=16; j++) {
        console.log(`n = ${i}, m = ${j} solution = ${solution(i, j)}`);
    }
}