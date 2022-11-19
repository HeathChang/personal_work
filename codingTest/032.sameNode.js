// 100. Same Tree
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
//
//     Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
//
//
//
//     Example 1:
//
//
// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:
//
//
// Input: p = [1,2], q = [1,null,2]
// Output: false
// Example 3:
//
//
// Input: p = [1,2,1], q = [1,1,2]
// Output: false

// * @param {TreeNode} p
// * @param {TreeNode} q
// * @return {boolean}
// const solution = (p, q) => {
//
//
//     // foreach(var node in nodeArray)
//     // newNode.Nodes.Add(node);
//
//     if(p.length !== q.length) return false;
//     for(let i = 0 ; i < p.length ; i ++){
//         if(p[i]!== q[i]){
//             return false;
//         }
//     }
//     return true
// }
//
// const result =solution([1,2,1], [1,1,2])
//
// console.log(result)