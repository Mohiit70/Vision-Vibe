// content.js
var filterApplied = false;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'toggleFilter') {
    filterApplied = !filterApplied;
    updateFilter();
  }
});

function updateFilter() {
  if (filterApplied) {
    // Apply a yellowish tint
    document.body.style.filter = 'brightness(110%) contrast(90%)';
  } else {
    // Remove the filter
    document.body.style.filter = 'none';
  }
}
// content.js
var filterApplied = false;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'toggleFilter') {
    filterApplied = !filterApplied;
    updateFilter();
  }
});

function updateFilter() {
  if (filterApplied) {
    // Apply a yellowish tint
    document.body.style.filter = 'brightness(110%) contrast(90%)';
  } else {
    // Remove the filter
    document.body.style.filter = 'none';
  }
}
