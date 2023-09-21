// Background script
function runContentScript() {
    browser.tabs.executeScript({ file: "extrakt_content.js" })
      .then(onExecute)
      .catch(onError);
  }
  
  function onExecute() {
    console.log("Content script has been executed");
    browser.tabs.query({ active: true, currentWindow: true })
      .then(sendMessageToContentScript)
      .catch(onError);
  }
  
  function sendMessageToContentScript(tabs) {
    let activeTab = tabs[0];
    browser.tabs.sendMessage(activeTab.id, { action: "logActiveTab", tab: activeTab })
      .then(onResponse)
      .catch(onError);
  }
  
  function onResponse(response) {
    console.log("Response from content script:");
    console.log(response);
  }
  
  function onError(error) {
    console.error(`Error: ${error}`);
  }
  
  browser.runtime.onMessage.addListener(function(request) {
    if (request.action === "submitClicked") {
      runContentScript();
    }
  });
  