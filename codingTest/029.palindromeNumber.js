//Given an integer x, return true if x is a
// palindrome
// , and false otherwise.
//
//
//
// Example 1:
//
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:
//
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
//
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// const solution = (num) => {
//     if (num < 0) return false;
//     let mid = num.toString().split("").length
//     const a = num.toString().substring(0, mid /2).split("")
//     const b = num.toString().substring((mid+1)/2).split("").reverse()
//     return JSON.stringify(a) === JSON.stringify(b)
// }

const solution = (x) => {
    if (x < 0) return false
    let revInt = x.toString().split("").reverse().join("");
    let a = parseInt(revInt);
    if (x === a) {
        return true;
    } else {
        return false;
    }
};


solution(1211)