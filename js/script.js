var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

function getRows(){
	users.map(function(user){
		$.getJSON({
		url: "https://api.twitch.tv/kraken/channels/" + user,
		dataType: 'jsonp',
		success: function(data){
		var names = document.getElementById('names');
		var p = document.createElement("p");
		p.innerHTML = "<a href='" + data.url + "'>" + data.display_name + '</a>'
		names.appendChild(p);
		}
		})
		$.getJSON({
			url: "https://api.twitch.tv/kraken/streams/" + user,
			dataType: 'jsonp',
			success: function(data){
				console.log(user);
				console.log(data.stream === null)
				var status = document.getElementById('status');
				var streaming = document.getElementById('streaming');
				var p = document.createElement('p');
				var live = document.getElementById('live');
				if(data.stream === null) {
					p.innerHTML = "<p id='off'> -_- Offline" + "</p>";
					streaming.appendChild(p);
				}
				else{
					p.innerHTML="<p id='on'>^_^ Streaming Live!" + "</p>";
					streaming.appendChild(p);
					// live.innerHTML = '<p>' + data.stream.channel.status +  '</p>';
					// console.log(data.stream.channel.status)
					// status.appendChild(p);
				}
			}
		})
	})
}











