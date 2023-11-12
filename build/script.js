// Content script for the smart chatbox

// Inject the chatbox HTML into the page
function injectChatbox() {
    const chatboxHtml = `
      <div id="chatbox">
        <div id="chatbox-header">Chocolate Advisor
          <span id="close-button">&times;</span>
        </div>
        <div id="chatbox-messages"></div>
        <div id="chatbox-input">
          <input type="text" id="user-input" placeholder="Type your question...">
          <button id="send-button">Send</button>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', chatboxHtml);
  }
  
  // Respond to user input in the chatbox
  function processUserInput() {
    const userInput = document.getElementById('user-input').value.trim();
  
    if (userInput.length === 0) {
      return;
    }
  
    const response = getChocolateAdvice(userInput);
  
    displayMessage('user', userInput);
    displayMessage('assistant', response);
  
    // Clear the input field
    document.getElementById('user-input').value = '';
  }
  
  // Get chocolate advice based on user input
  function getChocolateAdvice(userInput) {
    const lowercaseInput = userInput.toLowerCase();
  
    // Greetings
    if (lowercaseInput.includes('hi') || lowercaseInput.includes('hello')) {
      return 'Hello! How can I assist you with your chocolate choices today?';
    }
  
    // Chocolate advice
    if (lowercaseInput.includes('dark')) {
      return 'Dark chocolate is rich in antioxidants and can be good for your health.';
    } else if (lowercaseInput.includes('milk')) {
      return 'Milk chocolate is creamy and smooth, perfect for a sweet treat.';
    } else if (lowercaseInput.includes('white')) {
      return 'White chocolate is not technically chocolate as it contains no cocoa solids, but it can still be delicious!';
    } else {
      return 'I\'m sorry, I don\'t have advice for that. Please ask me about dark, milk, or white chocolate.';
    }
  }
  
  // Display a message in the chatbox
  function displayMessage(sender, message) {
    const messagesContainer = document.getElementById('chatbox-messages');
    const messageHtml = `<div class="message ${sender}">${message}</div>`;
    messagesContainer.insertAdjacentHTML('beforeend', messageHtml);
  
    // Automatically scroll to the bottom of the messages
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
  
  // Close the chatbox
  function closeChatbox() {
    const chatbox = document.getElementById('chatbox');
    chatbox.style.display = 'none';
  }
  
  // Add event listener once the window is fully loaded
  window.onload = function() {
    // Add event listener to send button
    document.getElementById('send-button').addEventListener('click', processUserInput);
  
    // Add event listener to input field to allow pressing Enter key
    document.getElementById('user-input').addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission
        processUserInput();
      }
    });
  
    // Add event listener to close button
    document.getElementById('close-button').addEventListener('click', closeChatbox);
  };
  
  // Inject the chatbox into the page
  injectChatbox();
  