# Our second Recursive Function

```
function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num-1);
}
```

- base case is the conditional
- different input is the recursive call with the smaller piece (num-1)
- if we different return it would keep going f o r e v e r.




