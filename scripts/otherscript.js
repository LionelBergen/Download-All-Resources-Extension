// chrome.webRequest.onBeforeRequest.addListener(callback, filter, opt_extraInfoSpec);
chrome.webRequest.onBeforeRequest.addListener(async function(details) {
        console.log(details.url);
    },
    {urls: ["<all_urls>"]},
    ['blocking', 'requestBody']);
    
    