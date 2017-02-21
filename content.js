// Load jQuery and run myCode() after loaded
;(function () {
  function loadScript(url, callback) {
    var script = document.createElement("script")
    script.type = "text/javascript"
    if (script.readyState) { //IE
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null
          callback()
        }
      }
    } else { //Others
      script.onload = function () {
        callback()
      }
    }
    script.src = url
    document.getElementsByTagName("head")[0].appendChild(script)
  }

  loadScript("https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function () {
    console.log("Running ravenblack extension")
    myCode()
  })
})();

function myCode() {
  const left = $(".monoturn:contains('LH:')")
  const right = $(".monoturn:contains('RH:')")
  var leftOpp = left[0].nextSibling.textContent
  var rightOpp = right[0].nextSibling.textContent
  var leftPlyr = left[1].nextSibling.textContent
  var rightPlyr = right[1].nextSibling.textContent
  chrome.extension.sendMessage({leftOpp, rightOpp, leftPlyr, rightPlyr, method: 'setHand'})
}