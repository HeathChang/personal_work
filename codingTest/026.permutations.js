const solution = (arr) => {
    let result = []
    recursive(arr, result);
    console.log(11, result)
    return result
    // console.log(JSON.stringify(arr) === JSON.stringify(_a)) // 배열 비교

};
const recursive = (item, result, n = 0) => {
    for(let i = n; i < arr.length ; i++){
        if (n === arr.length - 1) {
            result.push(arr.slice(0));
            return;
        }
        [arr[i], arr[n]] = [arr[n], arr[i]];
        recursive(arr, result, n + 1);
        [arr[i], arr[n]] = [arr[n], arr[i]];
    }
}
//fail

solution([1, 2, 3]);