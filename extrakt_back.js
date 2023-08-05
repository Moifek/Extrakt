
console.log("+++++++++++2");


runtime.onMessage.addListener((message) => {
    console.log("+++++++++++2ss");

    if (message.action === "giveTabInfo") {
        console.log("+++++++++++2Message");

        browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        browser.tabs.sendMessage(activeTab.id, { action: "giveTabInfo" });
        });
    }
  });