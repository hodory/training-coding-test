function solution(left, right) {
    var answer = 0;
    for (let i=left; i <= right; i++) {
        const sqrt = Math.floor(Math.sqrt(i));
        let division = [];
        for (let j=1; j <= sqrt; j++) {
            if (i % j === 0) {
                division.push(j);
                const div = i / j;
                if (j !== div) division.push(div);
            }
        }
        
        answer += division.length % 2 === 0 ? i : -i;
    }
    
    return answer;
}