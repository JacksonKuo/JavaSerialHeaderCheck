let count = 0;

chrome.webRequest.onHeadersReceived.addListener(
	function(details) { 
		var headers = details.responseHeaders;
		for (x in headers) {
			if (headers[x].name.includes("Content-Type") && headers[x].value.includes("application/x-java-serialized-object")) {
			count++;
			
			console.log("xjso check: " + details.url);
			
			chrome.storage.local.get({xjso: []}, function(result) {
				var arr = []
				arr = result.xjso;
				
				arr.push(details.url);
				console.log('get value: ' + result.xjso);
				
				chrome.storage.local.set({xjso: arr}, function() {
					console.log('set value: ' + details.url);
				}); 
			});
			
			
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