function solution(numbers) {
    let answer = 45;
    const size = numbers.length;
    for (let i=0; i < size; i++) {
        answer -= numbers[i];
    }
    return answer;
}