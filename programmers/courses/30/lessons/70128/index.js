function solution(a, b) {
    return a.reduce((acc, cur, index) => {
        return acc + cur * b[index];
    }, 0)
}