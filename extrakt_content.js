
console.log("+++++++++++1");



  

//after DOM Loads
document.addEventListener("DOMContentLoaded", function () {
  console.log("+++++++++++1Dom Loaded");

});


function submit(){
  console.log("+++++++++++0ss");
  browser.runtime.sendMessage({ action: "getTabInfo" });
}

browser.runtime.onMessage.addListener((message) => {
  console.log("+++++++++++1ss");
    if (message.action === "giveTabInfo") {
      const tabInfo = {
        url: window.location.href,
        title: document.title,
      };
      console.log("Tab Info:", tabInfo);
    }
});