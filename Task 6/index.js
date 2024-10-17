// Array of quote objects
const quotes = [
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" }
  ];
  
  // Function to get a random quote
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  // Event listener for button click
  document.getElementById('new-quote-btn').addEventListener('click', () => {
    const randomQuote = getRandomQuote();
    document.getElementById('quote').textContent = `"${randomQuote.text}"`;
    document.getElementById('author').textContent = `- ${randomQuote.author}`;
  });
  