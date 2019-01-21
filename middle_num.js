/**
 * 문제 설명
 * 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
 * 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
 * 
 * 제한사항
 * s는 길이가 1 이상, 100이하인 스트링입니다.
 * 
 * 입출력 예
 *  s	      return
 * abcde	    c
 * qwer	        we
 * 
 */

 /**
  * < 풀이 >
  * 우선 s 문자열의 길이를 2로 나누고,
  * 정수인지 소수점인지를 1로 나눈 나머지로 판단
  * 정수이면 index 앞뒤 글자를 substring 하고,
  * 소수점이면 소수점 버린 값에 위치한 글자를 결과로 가져온다.
  * 
  * @param {*} s 
  */
function solution(s) {
    let answer = '';
    let index = s.length / 2;

    if (index % 1 === 0) {
        answer = s.substring(index - 1, index + 1);

    } else {
        answer = s.charAt(Math.floor(index));
    }
    
    return answer;
}

solution("abcde");
solution("qwer");


// 다른 사람 풀이 --> 훨씬 간결하다..
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}