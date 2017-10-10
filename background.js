tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
if (changeInfo.status == 'complete')
        tabs.executeScript(tabId, {file:"code.js"});
});

browserAction.onClicked.addListener(function(tab) {
tabs.executeScript({
    code: 'document.body.style.backgroundColor="green"'
});
});