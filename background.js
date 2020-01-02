chrome.webRequest.onHeadersReceived.addListener(
	function(details) { 
		var headers = details["responseHeaders"];
		for (x in headers) {
			if (headers[x].name.includes("Content-Type") && headers[x].value.includes("application/x-java-serialized-object")) {
				console.log("object found"); 
			}
		}
	},
	{urls: ["<all_urls>"]},
	["responseHeaders"]);