


// // listen for the DOMContentLoaded event, then bind our function
document.addEventListener('DOMContentLoaded', function() {
    // Create a class for the element
    class XUnicorn extends HTMLElement {
      constructor() {
        // Always call super first in constructor
        super();


        //Grab the image
        var trump = document.getElementById('trump');
        var button = document.getElementById('button1');

        // Add an event listener to the image and replace with unicorn.
         button.addEventListener('click', () => {
           trump.src="img/unicorn.gif"
         });
      }
    }
    // Define the new element
    customElements.define('x-unicorn', XUnicorn);
});