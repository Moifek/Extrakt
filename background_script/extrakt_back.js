
console.log("+++++++++++2");

if (browser.tabs) {
    console.log(browser.tabs[0]);

    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = browser.tabs[0];
    browser.runtime.sendMessage(activeTab ,{ action: "giveTabInfo" }, function(response) {
        console.log(response);
    });
    });
}
