function solution(sizes) {
    const arrayLength = sizes.length;
    let widthArray = [];
    let heightArray = [];
    for (let i=0 ; i < arrayLength; i++) {
        widthArray.push(sizes[i][0]);
        heightArray.push(sizes[i][1]);
    }
    
    let widthMax = Math.max.apply(null, widthArray); // 가로 길이중 가장 큰 값
    let heightMax = Math.max.apply(null, heightArray); // 세로 길이중 가장 큰 값
    const index = widthMax > heightMax ? 0 : 1;
    let max = Math.max(widthMax, heightMax);
    let min = 0;
    
    for (let i=0; i < arrayLength; i++) {
        let longCursor= sizes[i][index]; // 가장 긴 영역 (가로 or 세로)
        let shortCursor = sizes[i][1-index]; // 세로 or 가로
        if (longCursor < shortCursor) { // 짧은 영역의 값이 더 크면 바꿔줌
            shortCursor = longCursor;
        }
        if (min < shortCursor) { // 짧은 영역중 가장 큰 값을 사용함
            min = shortCursor
        }
    }
    
    return max * min;
}