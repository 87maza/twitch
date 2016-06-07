var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

function getStatus(){
	users.map(function(user){
		function channelAndStatus(link, name){
			return 'https://api.twitch.tv/kraken/' + link + '/' + name;
		}
		$.getJSON({
		url: "https://api.twitch.tv/kraken/channels/freecodecamp",
		dataType: 'jsonp',
		success: function(data){
		console.log(data);
		var user = document.getElementById('username');
		user.innerHTML = "<a href='" + data.url + "'>" + data.display_name + '</a>';
	}
})
	})

}














$.getJSON({
	url: "https://api.twitch.tv/kraken/streams/hireztv",
	dataType: 'jsonp',
	success: function(data){
		console.log(data);
		var status = document.getElementById('status');
		var streaming = document.getElementById('streaming');
		if(data.stream===null) {
			status.innerHTML = "<p id='offline'>" + "-_- Offline" + "</p>";
			return;
		}
		status.innerHTML= "<p id='online'>" + "^_^ Streaming Live!" + "</p>";
		streaming.innerHTML = '<p>' + data.stream.channel.status +  '</p>';
	}
})