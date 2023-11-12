// popup/popup.js

document.addEventListener('DOMContentLoaded', function () {
  // Code to run when the popup HTML has been fully loaded

  // Add a click event listener to the button
  const popupButton = document.getElementById('popupButton');
  popupButton.addEventListener('click', function () {
    // Send a message to the background script when the button is clicked
    chrome.runtime.sendMessage({ type: 'popupButtonClick' }, function (response) {
      console.log('Received response from background script:', response);
    });
  });
});

