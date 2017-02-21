var leftOpp, rightOpp, leftPlyr, rightPlyr

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("I got a request: ", request.method)
  if(request.method === 'setHand'){
    ({leftOpp, rightOpp, leftPlyr, rightPlyr} = request)
  } else if(request.method === 'getHand'){
    sendResponse({leftOpp, rightOpp, leftPlyr, rightPlyr})
  }
})
