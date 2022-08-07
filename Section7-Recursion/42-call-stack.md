# The Call Stack

First Let's talk about functions:

- In almost all program languages there is a built in data structure that manages what happens when functions are invoked.

- when you call a function that calls a function inside itself or another function you need something to determine what order it's in, something that needs to be in charge of that.

- that is called the **call stack**

- it's a **stack** data structure
- anytime a function is invoked it is placed (**pushed**) on top of the call stack

- when javascript sees the return keyword or when a function ends, the compiler will remove (**pop**)

- think of it like a stack of papers, when you add something, you put it on top of the stack, when you remove something you remove it from the top of the stack.

Here is an example of how functions that invoke other functions get added to a call stack. Note note cook food got put on stop of stack after eatbreakfast was called, and wakeup is still on bottom of stack as it has not resolved all other functions originally invoked by it.

![call stack browser example](/Images/call-stack-browser.png "O(n)")

## Why do I care?

- you're used to functions being pushed on call stack and popped off when they are done

- when we write recursive functions we keep pushing new functions onto the call stack!

