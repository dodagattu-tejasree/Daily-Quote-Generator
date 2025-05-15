// script.js
const quotes = [
    "The best way to predict the future is to create it.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "You only live once, but if you do it right, once is enough.",
    "In the middle of every difficulty lies opportunity.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts."
];

// Select the HTML elements
const quoteElement = document.getElementById("quote");
const newQuoteButton = document.getElementById("new-quote");
const shareButton = document.getElementById("share-quote");

// Function to display a random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

// Event listener for generating a new quote
newQuoteButton.addEventListener("click", displayRandomQuote);

// Event listener for sharing a quote
shareButton.addEventListener("click", () => {
    const quoteText = quoteElement.textContent;

});

// Display a random quote on page load
displayRandomQuote();