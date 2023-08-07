

console.log("+++++++++++0");


function submit(){
    console.log("submit clicked");
    const clickableLinks = document.querySelectorAll('a');

    clickableLinks.forEach(link => {
    console.log('URL:', link.href);
    console.log('Text:', link.textContent);
    console.log(link.target == '_blank' ? 'External' : 'internal');
    });
  }


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
