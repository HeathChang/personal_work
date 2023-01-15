// 2114. Maximum Number of Words Found in Sentences
// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/


const solution = (sentences) => {
    let result = 0
    sentences.map(item => result = result > item.split(" ").length? result: item.split(" ").length)
    return result
}

const result = solution(["alice and bob love leetcode","i think so too","this is great thanks very much"])
console.log('result:: ', result)