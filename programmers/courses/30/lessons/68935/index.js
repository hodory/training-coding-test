function solution(n) {
    let stack = [];
    while(n >= 1) {
        stack.unshift(n % 3);
        n = Math.floor(n / 3);
    }
    
    return stack.reduce((acc, cur, index) => {
        return acc + (Math.pow(3, index) * cur)
    });
}