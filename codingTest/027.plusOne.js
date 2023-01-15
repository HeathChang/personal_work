const solution = (arr) => {
    let resultArr = []
    // let result = arr.reduce((previous, current)=> previous.toString() + current.toString())
    let result = arr.join("")
    result = BigInt(result)+1n
    let _new = result.toString().split('')
    _new.forEach(item => resultArr.push(parseInt(item)))
    return resultArr
}

solution([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])