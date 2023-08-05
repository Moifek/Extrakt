

console.log("+++++++++++0");

function submit(){
    console.log("+++++++++++0ss");
    browser.runtime.sendMessage({ action: "getTabInfo" });
  }
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
    const clickableLinks = document.querySelectorAll('a');

    clickableLinks.forEach(link => {
    console.log('URL:', link.href);
    console.log('Text:', link.textContent);
    console.log(link.target == '_blank' ? 'External' : 'internal');
    });
}*/
