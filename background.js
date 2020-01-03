let count = 0;

chrome.webRequest.onHeadersReceived.addListener(
	function(details) { 
		var headers = details.responseHeaders;
		for (x in headers) {
			if (headers[x].name.includes("Content-Type") && headers[x].value.includes("application/x-java-serialized-object")) {
			count++;
			console.log("XJSO Check: " + details.url); 
			if ( count == 1 ) {
				chrome.browserAction.setIcon( { path: { 16: "shield-16-red.png" } } );
			}
			chrome.browserAction.setBadgeBackgroundColor( { color: [128, 128, 128, 255] } );
			chrome.browserAction.setBadgeText( { text: count.toString() } );
			}
		}
	},
	{urls: ["<all_urls>"]},
	["responseHeaders"]);