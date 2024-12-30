//your JS code here. If required.
// Get the element with the id 'level'
const element = document.getElementById('level');

// Initialize a counter for the DOM level
let level = 0;

// Traverse up the DOM tree
let currentElement = element;
while (currentElement) {
    level++;
    currentElement = currentElement.parentElement; // Move to the parent element
}

// Display the result using alert
alert(`The level of the element is: ${level}`);
