// //Given an integer numRows, return the first numRows of Pascal's triangle.
// // In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
//
// // Input: numRows = 5
// // Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
//
//
// /**
//  * @param {number} numRows
//  * @return {number[][]}
//  */
//
// let result = [];
//
//
// const recursive = (index) => {
//     let pascal = []
//     for (let j = 0; j <= index; j++) {
//         if (j === 0){
//             pascal.push(1)
//         } else {
//             if(j === index ){
//                 pascal.push(1)
//             } else {
//                 console.log(index)
//                 pascal.push(2)
//             }
//         }
//     }
//     result.push(pascal)
// }
//
// const solution = (numRows) => {
//     for (let i = 0; i < numRows; i++) {
//         recursive(i)
//     }
//
//
//     console.log('final should be:: [[1],[1,1],[1,2,1]]')
//     console.log('my result::: ', result)
//     return result
// }
//
// solution(5)