# 48 Helper Methods

Design pattern common used in recursion

Here's some code that doesn't actually do anything but demonstrates a pattern:


```
function outer(input){
    const outerScopedVariable = []

    function helper(helperInput) {
        //modify the outerScopedVariable
        helper(helperInput--)
    }
    helper(input)
    return outerScopedVariable;
}
```

we have an outter function and inside an inner recursive helper function.

- commonly done when we need to compile an array or list of data.

Here's an example:

```
function collectOddValues(arr){
    let result = []

    function helper(helperInput) {
        if(helperInput.length === 0) {
            return;
        }

        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr)
    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])
```

We create empty array to store our data, then we call helper function. The array needs to be set outside of the recursive function so it will persist for duration of recursive function.

There are other ways to write this function, you don't have to define results outside of scope and then update it. This is just an easier to understand the concepts.

# 49 Pure Recursion

So again take the method we had above with collectOddValues. With pure recursion we can do it more selfcontained.

- shorter to write
- harder to understand at a glance

```
function collectOddValues(arr){
    let newArr = [];

    if(arr.length === 0){
        return newArr;
    }
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
}

collectOddValues([1,2,3,4,5])
```
Essentially we get:
```
collectOddValues([1,2,3,4,5])
[1].concat(collectOddValues([2,3,4,5]))
    [].concat(collectOddValues([3,4,5]))
        [3].concat(collectOddValues([4,5]))
            [].concat(collectOddValues([5]))
                [5].concat(collectOddValues([]))
                    []
```

which ultimately evaluates out to:

`[1,3,5]`

So this newArr is empty every time it gets called, what happens is that we concatentate all the returned arrays at the end each time in the call stack.

## Pure Recursion Tips

- for arrays, use methods like **slice**, the **spread operator**, and **concat** that make copies of array so you do not mutate them.
- remember that strings are immutable so you will need to use methods like **slice**, **substr**, or **subString** to make copies of strings
- to make copies of object use **Object.assign** or the **spread operator**