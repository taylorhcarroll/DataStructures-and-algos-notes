//COUNT UNIQUE VALUES
//Implement a function called countUniqueValues which accepts a sorted array,
//and counts the unqiue values in the array.
//There can be negative numbers in the array, but it will always be sorted.

//Examples:
//countUniqueValues([1,1,1,1,1,2]) // 2
//countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
//countUniqueValues([]) // 0
//countUniqueValues([-2,-1,-1,0.1]) // 4

function countUniqueValues(arr) {
    let slow = 0

    for (let fast = 1; fast < arr.length; fast++) {
        if (arr[slow] != arr[fast]) {
            slow++
            arr[slow] = arr[fast];
        }
        console.log("slow", slow, "fast", fast)
        console.log(arr)
    }
    //add 1 because we need the length of the unique values, but we started with index 0
    return slow + 1
    console.log("slow", slow + 1)
}
