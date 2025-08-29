

## Create Readme

You have to create a `Readme.md` file. and write down following questions. Dont Try to copy paste from AI Tools. Just write what you know about these. If you don't know , then search , learn , understand and then write.

 ### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

1. **Answer**
getElementById("id") pass A single element when you set a perameter id only and return a single element only 

getElementsByClassName("class") return HTML Collection set a class name in any element that call for you all element 

querySelector("selector") this is a css selector only return First matching element

querySelectorAll("selector") this is a css selector that return NodeList Returns all matching elements

2. How do you **create and insert a new element into the DOM**?

2. **Answer**

const newDiv = document.createElement("div");
newDiv.innerText = "create a div";
document.body.appendChild(newDiv);

3. What is **Event Bubbling** and how does it work?

3. **Answer**

event bubbling  is a process an event triggered on a child elements bubbles up propagates its parent up to the root 

<div id="parent">
  <button id="child">Click</button>
</div>

4. What is **Event Delegation** in JavaScript? Why is it useful?

4. **Answer**

Event Delegation means adding a single event listener to a parent element and  handleing  events . its children using event.target.


1. battter perfomanse 
2. cleaner code 
3. Works well with bubbling

5. What is the difference between **preventDefault() and stopPropagation()** methods?

5. **Answer**

preventDefault()  Prevents the default browser behavior of an element like any one set prevent on her program on this time  one submite form or click any link it don't work preventDefault() are block event

stopPropagation() stop event from bubbling up to parent any one use this methode If you want the parent element not to respond when the child element is clicked.