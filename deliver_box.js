/**
 * 문제 설명
택배를 이용해 총 n개의 옷을 배송하려고 합니다.
택배 회사에는 현재 옷 3개, 5개를 담을 수 있는 상자가 준비되어 있습니다.
상자의 크기에 상관없이 상자의 개수로 배송비를 받기 때문에, 상자의 개수를 최소한으로 줄이려고 합니다.
단, 상자를 보내기 위해서는 상자에 반드시 들어갈 수 있는 옷이 모두 들어가야 합니다.
즉, 옷을 2개만 담은 상자는 배송할 수 없습니다.
보내야 할 옷의 개수 n이 주어질 때, 배송비를 최소화할 수 있는 상자의 개수를 return하도록 solution 함수를 완성하세요.

어떠한 방법으로도 모든 옷을 보낼 수 없다면 -1을 반환하면 됩니다.

제한사항
옷의 개수 n : 3 ≤ n ≤ 1,000,000,000
 */

function solution(n) {
    let answer = -1;
    const big_size = 5;
    const small_size = 3;

    if (n >=3 && n <= 1000000000) {
        const divide_big = parseInt(n / big_size);
        const remain_big = n % big_size;

        if (remain_big === 0) {     // 5로 나누어 떨어지는 경우
            answer = divide_big;

        } else if (remain_big === small_size) {     // 5로 나눴을 때 나머지가 3인 경우
            answer = divide_big + 1;

        } else {
            let new_num = n;
            // 5개 상자 수를 최대로 하기 위해
            for(let idx = divide_big; idx >= 0; idx--) {
                new_num = n - (idx * big_size);
                if (new_num % small_size === 0) {
                    answer = idx + (new_num / small_size);
                    break;
                }
            }
        }
    }

    return answer;
}

let result = {
    3: 1,
    4: -1,
    5: 1,
    6: 2,
    7: -1,
    8: 2,
    9: 3,
    10: 2,
    11: 3,
    12: 4,
    13: 3,
    14: 4,
    15: 3,
    16: 4,
    17: 5,
    18: 4,
    19: 5,
    20: 4,
    21: 5,
    22: 6,
    23: 5,
    24: 6,
    25: 5
};

for (let i=3; i<=25; i++) {
    console.log(`옷 ${i}개 상자 ${solution(i)}개 정답은 == ${result[i]}`);
}