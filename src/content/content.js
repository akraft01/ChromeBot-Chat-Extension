// content/content.js


function sendMessageToBackground() {
  const message = {
    type: 'someEvent',
    data: 'Some data related to the event',
  };

  // Send the message to the background script
  chrome.runtime.sendMessage(message, (response) => {
    console.log('Received response from background script:', response);
  });
}

// function to modify the content of the page
function modifyPageContent() {
  
  console.log('Modifying page content');
}

// Call the functions when the content script is injected into a page
sendMessageToBackground();
modifyPageContent();

