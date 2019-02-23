/**
 * 어떤 수를 서로 다른 소수 3개의 합으로 표현하는 경우의 수를 구하려 합니다.
 * 예를 들어 33은 총 4가지 방법으로 표현할 수 있습니다.
 * 
 * 3+7+23
 * 3+11+19
 * 3+13+17
 * 5+11+17
 * 
 * 자연수 n이 매개변수로 주어질 때,
 * n을 서로 다른 소수 3개의 합으로 표현하는 경우의 수를 return 하는 solution 함수를 작성해주세요.
 * 
 * 제한 조건
 * n은 1,000 이하인 자연수입니다.
 * 
 * 입출력 예
 * n	return
 * 33	4
 * 9	0
 */

// 소수 판별 함수
function isPrime(n) {
    const len = Math.sqrt(n);
    let isPrime = true;
    for (let i=2; i<=len; i++) {
		if (n % i === 0) {
            isPrime = false;
            break;
        }
	}
    return isPrime;
}

function solution(n) {
    let answer = 0;
    let prime_arr = [];
    
    if (n <= 1000) {
        // prime_arr: 소수로 구성된 Array
        for(let i=2; i<n; i++) {
            if (isPrime(i)) {
                prime_arr.push(i);
            }
        }

        const prime_len = prime_arr.length;
        let sum = 0;
        for(let x=0; x<prime_len-2; x++) {
            for(let y=x+1; y<prime_len-1; y++) {
                for(let z=y+1; z<prime_len; z++) {
                    sum = prime_arr[x] + prime_arr[y] + prime_arr[z];
                    if(sum === n) {
                        answer++;
                    }
                }
            }
        }
    }
    return answer;
}