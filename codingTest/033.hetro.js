const solution = (nums) => {
    return nums.filter((v, i, a) => a.indexOf(v) === i)
}


const res = solution([4, 1, 2, 1, 2])
// const res = solution([2,2,1])
console.log(res)