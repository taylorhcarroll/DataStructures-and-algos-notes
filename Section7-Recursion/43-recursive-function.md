# How recursive functions work

- invoke the **same** function with a different input until you reach your base base!

- **base case** is the condition where your function ends
- most important concept to understand!

### two essential parts of the recursive function:
- base case
- diff input each time

Let's write one!

```
function countDown(num){
    if(num <= 0) {
        console.log("Blast Off!");
        return;
    }
    console.log(num);
    num--;
    countDown(num)
}
```

We have to have the **return** there otherwise it would keep going forever.



