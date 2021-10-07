function solution(lottos, win_nums) {
    const size = lottos.length;
    let zeroCount = 0;
    let matchCount = 0;
    const ranks = [6, 6, 5, 4, 3, 2, 1];
    for (let i=0; i < size; i++) {
        if (lottos[i] === 0) {
            zeroCount++;
        }
        
        if (win_nums.indexOf(lottos[i]) > -1) {
            matchCount++;
        }
    }
    
    return [ranks[matchCount+zeroCount], ranks[matchCount]];
}