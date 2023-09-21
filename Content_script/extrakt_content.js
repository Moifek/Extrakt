console.log("Content script has been loaded");

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "logActiveTab") {
    console.log(request.tab);
    sendResponse("Message received by content script");
  }
});
/*
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "giveTabInfo") {
        console.log("Received 'giveTabInfo' message from background script:", message);
    }
});
*/

/*//after DOM Loads
document.addEventListener("DOMContentLoaded", function () {
    console.log("+++++++++++0Dom Loaded");
  
  });
  


browser.runtime.onMessage.addListener((message,sendResponse) => {
    console.log(sendResponse,message);
    var receivedVariable = message.variable;
      if (message.action === "giveTabInfo") {
        const tabInfo = receivedVariable;
        console.log("Tab Info:", tabInfo);
      }
      sendResponse('send this: '+JSON.stringify(message));
  });
*/

/*
const clickableLinks = document.querySelectorAll('a');

clickableLinks.forEach(link => {
console.log('URL:', link.href);
console.log('Text:', link.textContent);
console.log(link.target == '_blank' ? 'External' : 'internal');
});
*/
/*
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("myButton");
    
    button.addEventListener("click", function () {
        browser.runtime.sendMessage({ action: 'getActiveTab' }, response => {
            const activeTab = response.tab;
            console.log('Active Tab:', activeTab);
        
            // Now you can perform any actions with the active tab
        });
    });

    
});

//console log al links in all tabs (not just active or current)
*/
/*function extrakt_All_Tabs(){
    
}*/
