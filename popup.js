// popup.js
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var startTimerButton = document.getElementById('startTimer');
    var timerInput = document.getElementById('timerInput');
    var timerDisplay = document.getElementById('timer');
    var timerInterval;
  
    toggleButton.addEventListener('click', function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleFilter' });
      });
    });
  
    startTimerButton.addEventListener('click', function () {
      var customTimerValue = parseInt(timerInput.value, 10);
      startTimer(customTimerValue || 300); // Set a default value of 300 seconds if input is empty or invalid
    });
  
    function startTimer(durationInSeconds) {
      clearInterval(timerInterval); // Clear any existing timers
  
      var timer = durationInSeconds;
      updateTimerDisplay(timer);
  
      timerInterval = setInterval(function () {
        timer--;
        updateTimerDisplay(timer);
  
        if (timer <= 0) {
          clearInterval(timerInterval);
          // You can add any additional actions here when the timer reaches zero
        }
      }, 1000);
    }
  
    function updateTimerDisplay(seconds) {
      var minutes = Math.floor(seconds / 60);
      var remainingSeconds = seconds % 60;
      timerDisplay.textContent = `${formatTime(minutes)}:${formatTime(remainingSeconds)}`;
    }
  
    function formatTime(time) {
      return time < 10 ? `0${time}` : time;
    }
  });
  