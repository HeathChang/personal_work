// 961. N-Repeated Element in Size 2N Array
// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
const solution = (nums) => {
    // //method 1
    let lookup = new Set();

    for (let item of nums) {
        // item === ?
        if (lookup.has(item)){
            return item;
        }
        lookup.add(item);
    }
    
    //  //method 2
    // let result = 0
    // let newSet = new Set(nums);
    // for ( let i of newSet){
    //     const first = nums.indexOf(i)
    //     const last = nums.lastIndexOf(i)
    //     if(first !== last){
    //         result = i
    //         break
    //     }
    // }
    // return result
}

const result = solution([2,1,2,5,3,2])
console.log('result:: ', result) // 5