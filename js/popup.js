console.log("I'm the popup")

// $("#buttonred").on("click", function() {

// 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// 		chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"})
// 	})
// })

$('#blue').on('click', changeTheme);
$('#pink').on('click', changeTheme);
$('#green').on('click', changeTheme);
$('#yellow').on('click', changeTheme);

function changeTheme () {
	var color = $(this).attr('id');
	//send message to the DOM of active tab
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {message: color});
	});
}