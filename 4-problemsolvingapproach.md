HOW TO GET BETTER AT INTERVIEWS

Devise a plan for solving problems.
Master Common problem solving patterns

George Polya - How to Solve it

## Problem Solving
### Devise a plan
### Understand the problem
Can I restate the problem in my own words?
What are the inputs that go into the problem?
What are the outputs?
Can outputs be determined from the inputs, aka do I have enough information to solve this problem? May not be able to answer this until you set about solving it.
How should I label the important pieces of data that are part of the problem?

#### Example:
##### Write a function that takes two nums and returns their sum?
Implement addition
Are there always 2 nums? Are they always both ints?
Do we return a string? An int?
In most cases the answer is yes, but if they only give us 1, do we return undefined or add a placeholder or return an error? Ask your interviewer for clarification!
Think about labelling the inputs, outputs, or other things, like ‘num1’ and ‘num2’ and return ‘sum’

### Explore concrete examples
Coming up with examples can help understand problem better
Example also provides sanity checks that your eventual solution works how it should
User Stories! Or Unit Tests!
Start with simple examples
Progress to more complex examples
Explore examples with empty inputs
Explore examples with invalid inputs
##### Example:
Write a function which takes in a string and returns counts of each character in the string
charCount(“aaaa”); // {a:4}
Do we include the letters that aren’t there? B:0 for examples? Ask interviewer
Account for spaces, dollar signs numbers, uppercase vs lowercase?
These examples we explore help us clarify and ask the right questions before setting about solving it.


### Break it down
Interviewers are looking for you to communicate. “Alright here’s the steps I’m going to take. Does that sound like the right way to go. Explicitly right out steps you need to take but be concise. It shows you’re not trying to come up with a solution on the fly and helps catch parts you don’t understand.

###### Examples: 
Write a function which takes in a string and returns counts of each character in the string?

Function charCount(str) {
	//do something
	//return an object with keys that are alphanumeric characters lowercase in the string, values should be count of the characters in that string.
}

Function charCount(str) {
	//make object to return at end
	//loop over string, for each chara..
	//if char is a key in object, add one to count
	//if char is not in object, add it and set value to one
//if its something else, don’t do anything
	//return object at end
}

It’s important to know that even if you only get halfway through solving the problem, as long as you have this blueprint the interviewer can review and see you were on your way to the right answer

solve/simplify
If you can’t solve the problem, solve something simpler or what you do know. You don’t want to get stuck on one difficult part of the problem, its must better to write code of stuff you do know how to do but can come back and try to solve it later
Function charCount(str) {
	//make object to return at end
    Var result = {}
    //loop over string, for each chara..
    For (var i = 0; i < str.length; i++) {
    Var char = str[i]
        If (result[char] > o) {
        result[char]++;
        }
        else 
        { 
        Result[char] = 1;
        }
    return result
    }
}


### Look back and refactor
Refactoring Questions:
Can you check the result?
Can you derive the result differently?
Can you understand it at a glance?
Can you use the result or method for some other problem?
Can you improve thr performance of your solution?
Can you think of other ways to refactor?
How have other people solved this before?
    Ask the interviewer how others might have, you can learn something even if you don't get the job.

STAR interview questions

Situation
Task
Action
Result

Ask about working style
Team environment
