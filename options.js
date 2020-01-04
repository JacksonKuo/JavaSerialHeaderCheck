chrome.storage.local.get(["xjso"], function(result) {

	var results = result.xjso;
	
	var listDiv = document.getElementById("list-div");
	listDiv.style.whiteSpace = "pre";
	listDiv.textContent = "";

	if (results) {
		for (var i = 0; i < results.length; i++) {
			listDiv.textContent += results[i] + "\r\n";
		}
	}

});


			