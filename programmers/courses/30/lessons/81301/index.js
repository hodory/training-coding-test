function solution(s) {
    var answer = '';
    let matcher = {'zero' : 0, 'one' : 1, 'two' :2, 'three' : 3, 'four' : 4, 'five' : 5, 'six' : 6, 'seven': 7, 'eight' : 8, 'nine' : 9};
    
    let engNumber = '';
    let arr = s.split('');
    let size = arr.length;
    
    for (let i=0; i < size ; i++) {
        const toAscii = arr[i].charCodeAt(0);
        if (toAscii >= 48 && toAscii <=57) {
            answer += arr[i];
        } else {
            engNumber += arr[i];
        }
        
        if (engNumber !== '' && typeof matcher[engNumber] !== 'undefined') {
            answer += matcher[engNumber];
            engNumber = '';
        }
    }

    return parseInt(answer);
}