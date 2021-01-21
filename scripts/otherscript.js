// chrome.webRequest.onBeforeRequest.addListener(callback, filter, opt_extraInfoSpec);
const TYPES_OF_REQUESTS_TO_DOWNLOAD = ['image', 'script', 'stylesheet', 'main_frame', 'xmlhttprequest', 'other'];
chrome.webRequest.onBeforeRequest.addListener(async function(details) {
        if (!details.initiator || !details.initiator.startsWith('http://127.0.0.1')) {
          console.log(details);
          if (TYPES_OF_REQUESTS_TO_DOWNLOAD.includes(details.type)) {
            const fileName = details.url.split("/").pop();
            let documentLinkElement = document.createElement('a');
            documentLinkElement.href = details.url;
            documentLinkElement.download = fileName;
            document.body.appendChild(documentLinkElement);
            documentLinkElement.click();
            window.URL.revokeObjectURL(details.url);
            documentLinkElement.remove();
          }
        }
    },
    {urls: ["<all_urls>"]},
    ['blocking', 'requestBody']);
    
    