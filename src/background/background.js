// background/background.js

// Example background script for ChromeBot Chat Extension
// This script runs in the background and can handle events and perform actions.

// Event listener for when the extension is installed or updated
chrome.runtime.onInstalled.addListener((details) => {
  console.log('ChromeBot Chat Extension installed or updated:', details);

  // Perform any necessary setup or initialization here
});

// Event listener for messages from content scripts or other parts of the extension
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Message received in background script:', message);

  // Perform actions based on the message content
  if (message.type === 'someEvent') {
    // Handle the event
    console.log('Handling someEvent');
  }

  // Send a response back if needed
  sendResponse({ received: true });
});

// Example function to interact with the active tab
function interactWithTab() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    console.log('Interacting with the active tab:', activeTab);

    // Perform actions with the active tab
  });
}

// Call the function when the extension icon is clicked
chrome.browserAction.onClicked.addListener(() => {
  console.log('Extension icon clicked');
  interactWithTab();
});

