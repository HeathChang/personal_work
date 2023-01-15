const solution = (nums) => {
    if(nums.length <= 1) return nums
    let arr = []
    let result = []
    nums.forEach(item => arr.push(item.split("").sort()))

    // 포기
}

solution(["eat","tea","tan","ate","nat","bat"])
solution([""])