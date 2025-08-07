//your JS code here. If required.
// Step 1: Get the element
let element = document.getElementById("level");

// Step 2: Initialize level counter
let level = 0;

// Step 3: Traverse up the DOM tree
while (element) {
  level++; // count this element
  element = element.parentElement; // move to the parent
}

// Step 4: Show result
alert("The level of the element is: " + level);
