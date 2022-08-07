# 45 - Factorials

In math we represent this with `4!` that's equal to `4 * 3 * 2 * 1`.

How would we do this with a function (iteratively)?

```
function factorial(num){
    let total = 1;
    for(let i = num; i > 0; i--){
        total *= i
    }
    return total;
}
```
Okay sure we did this with a classic loop, how could we do this recursively?

# 46 - Recursive factorials

```
function factorial(num){
    if (num === 1) return 1
    return num * factorial(num-1)
}
factorial(5)
```
How does this work? Let's look at the call stack:

The first time this function is invoked does not resolve until the last time this gets called is returned first. It then resolves backwards down the stack.

First when num reaches `1` that is the first number returned.

Then `(1 * 2)` gets returned which is 2 then `(2 * 3)` and now you have the value of 6, that gets multipled by 4 (`2 * 3 * 4`) which returns 24, when get's multiplied by 5 `(1 * 2 * 3 * 4 * 5)` which finally returns 120

# 47 - common recursive pitfalls.

Where things can do wrong:

- base case is wrong or not present

- forget to make change to original input

- stack overflow!

