console.log('JavaScript is running!');

/* longer JS block comment
- const is a type of variable - a bit of memory that can hold value

JS uses can use ANY valid CSS selector to make a connection to ANY element on the page - it works the same way as CSS slectors do. because it's USING css selectors to find a match in the element(s)

The document is the DOM - the web page and all of its elements

querySelector is the method (fuction) that makes the connection between jJS and the DOM (the elements)

*/

// step 1 - make the connection to the Element(s) you want to interact with

const svgIcons= document.querySelector('.icon-container');


function logID() {
    console.log('clicked on this ICON:', this.id);
}

// step 2 - decide how you want the user to interact with the object you created in step 1
svgIcons.addEventListener('click', logID);

