// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// You can return the answer in any order.
//
//
//
// Example 1:
//
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
//
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
//
// Input: nums = [3,3], target = 6
// Output: [0,1]

// const solution = (nums, target) => {
//     let result = [];
//     for (let i = 0; i < nums.length; i++) {
//         let arr = [...nums];
//         const index = arr[i]
//         arr[i] = '-';
//         const newArr = arr.filter((item, index) => index !== i)
//         for(let j = 0 ; j < newArr.length ; j++){
//             if (newArr[j] + nums[i] === target) {
//                 result.push(i, arr.indexOf(newArr[j]));
//                 return result
//             }
//         }
//         arr = [...nums];
//     }
// }

const solution = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                if (i !== j) {
                    return [i, j];
                }
            }
        }
    }

}


solution([2, 7, 11, 15], 9)