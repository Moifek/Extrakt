browser.tabs.executeScript({
    file: "extrakt_content.js",
  }).then(onExecuted);


function onExecuted(){

    browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.action === "submitClicked") {
            browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
                let activeTab = tabs[0];
                browser.tabs.sendMessage(activeTab.id, { action: "logActiveTab", tab: activeTab });
            });
        }
    });
}
