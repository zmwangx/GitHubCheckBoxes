function checkBoxes () {
  var textareas = document.getElementsByTagName('textarea')
  for (var i = 0; i < textareas.length; i++) {
    textareas[i].value = textareas[i].value.replace(/^(\s*)-\s+\[ ]/mg, '$1- [x]')
  }
}

chrome.runtime.onMessage.addListener(function (msg) {
  if (msg === 'check') {
    checkBoxes()
  }
})
