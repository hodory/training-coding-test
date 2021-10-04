function solution(absolutes, signs) {
    let answer = 0;
    let size = absolutes.length;
    
    for(let i=0; i < size; i++) {
        const sign = (signs[i] === true) ? 1 : -1;
        answer += absolutes[i] * sign;
    }
    
    return answer;
}