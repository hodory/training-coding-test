function solution(nums) {
    let answer = 0;
    
    const size = nums.length;
    let arr = [];
    
    nums.sort();
    for (let i=0; i < size; i++) {
        for (let j=i+1; j < size; j++) {
            for (let k=j+1; k <size; k++) {
                arr.push(nums[i] + nums[j] + nums[k])
            }
        }
    }
    
    for (let i=0 ; i < arr.length; i++) {
        let checked = true;
        let sqrt = Math.floor(Math.sqrt(arr[i]));
        for (let j = 2; j <= sqrt; j ++) {
            if (arr[i] % j === 0) {
                checked = false;
            }
        }
        
        if (checked === true){
            answer++;
        }
    }
    
    return answer;
}