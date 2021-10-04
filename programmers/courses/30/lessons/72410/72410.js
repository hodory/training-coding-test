function solution(new_id) {
    let answer = '';
    
    answer = new_id.toLowerCase() // 1단계
    .replace(/[^\w\-\.]/g, '')/// 2단계
    .replace(/\.{2,}/g, '.') // 3단계
    .replace(/(^\.)|(\.$)/ ,'') // 4단계
             .replace(/^$/, 'a') // 5단계
             .slice(0, 15)
             .replace(/\.{1,}$/, '')// 6단계
                      ;
    
    const answerLength = answer.length;
    
    if (answerLength < 3) {
        answer += answer[answerLength - 1].repeat(3-answerLength);
    }
    
    return answer;
}