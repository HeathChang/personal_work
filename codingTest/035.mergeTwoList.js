// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
//
//
//
// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:
// Input: list1 = [], list2 = []
// Output: []
// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]
// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

// linkedList => normal array로 변환
const mergeTwoLists = (list1, list2) => {
    const result = [];
    const listALength = list1.length;
    const listBLength = list2.length;
    const listLength = listALength < listBLength ? listBLength: listALength
    if(listALength === 0) return list2;
    if(listBLength === 0) return list1;
    for(let i = 0 ; i < listLength; i++){
        if(list1[i])result.push(list1[i])
        if(list2[i])result.push(list2[i])
    }
    return result
}

const result = mergeTwoLists(list1 = [2,3,4,5], list2 = [1,2,3,4])
// const result = mergeTwoLists(list1 = [], list2 = [])
// const result = mergeTwoLists(list1 = [], list2 = [0])
console.log(result)