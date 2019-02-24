/**
 * 투표 결과 Array 토대로 winner 선정하기
 * 득표 수가 같으면 알파벳순으로 뒤에 위치한 사람이 승리
 * @param {Array} votes 
 */
function electionWinner(votes) {
    let resultObj = votes.reduce((obj, person) => {
        if (obj.hasOwnProperty(person)) {
            obj[person]++;
        } else {
            obj[person] = 1;
        }
        return obj;
    }, {});

    let resultArr = [];
    for (let person in resultObj) {
        if (resultObj.hasOwnProperty(person)) {
            resultArr.push([person, resultObj[person]]);
        }
    }

    let sorted_result = resultArr.sort((a, b) => {
        return (b[1] > a[1]) ? 1 : (b[1] < a[1]) ? -1 : (b[0] > a[0]) ? 1 : -1;
    });

    return sorted_result[0][0];
}

let votes = ["Alex", "Michael", "Harry", "Dave", "Michael", "Victor", "Harry", "Alex", "Mary", "Mary"];
const result = electionWinner(votes);