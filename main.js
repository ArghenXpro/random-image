// Get the container element from the DOM
let container = document.querySelector('.container');

// Base URL for fetching random images
let upsplashURL = 'https://source.unsplash.com/random/';

// Number of rows to create
let rows = 5;

// Loop through to create images
for (let i = 0; i < rows * 6; i++) {
    // Create an image element
    let img = document.createElement('img');

    // Set the image source using a random size
    img.src = `${upsplashURL}${getRandomSize()}`; // Corrected syntax to use backticks for template literals

    // Append the image to the container
    container.appendChild(img);
}

// Function to get a random size for the images
function getRandomSize() {
    // Concatenate two random numbers to get the size in the format 'NxN'
    return `${getRandomNr()}x${getRandomNr()}`; // Corrected syntax to return a string with backticks
}

// Function to get a random number between 300 and 309
function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300; // Corrected logic to ensure range is 300-309
}
