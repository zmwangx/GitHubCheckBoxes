// Show page action only for a GitHub page
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (tab.url.match(/^https?:\/\/github.com/)) {
    chrome.pageAction.show(tabId)
  }
})

chrome.pageAction.onClicked.addListener(function (tab) {
  chrome.tabs.sendMessage(tab.id, 'check')
})
