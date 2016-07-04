var users = ["comster404","ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

function getRows(){
	users.map(function(user){

		$.getJSON({
		url: "https://api.twitch.tv/kraken/channels/" + user,
		dataType: 'jsonp',
		success: function(data){
		var names = document.getElementById('names');
		var p = document.createElement("p");
		if(data.status === 422){
			p.innerText = "User Not Found";
		}
		else{
		p.innerHTML = "<a href='" + data.url + "'>" + data.display_name + '</a>'
		}
		names.appendChild(p);

		}
		})
		$.getJSON({
			url: "https://api.twitch.tv/kraken/streams/" + user,
			dataType: 'jsonp',
			success: function(data){

				var status = document.getElementById('status');
				var streaming = document.getElementById('streaming');
				var p = document.createElement('p'); p2 = document.createElement('p');
				var live = document.getElementById('live');
				var streamchan = document.getElementById('streamchan');
				if(data.stream === null) {

					p.innerHTML = "<p id='off'> -_- Offline" + "</p>";
					p2.innerHTML = "<p id='blank'> -" + "</p>"
					streaming.appendChild(p);
					streamchan.appendChild(p2);
				}
				else{
					p.innerHTML="<p id='on'>^_^ Streaming Live!" + "</p>"
					p2.innerHTML="<p id='blank'> test" + "</p>";
					streaming.appendChild(p);
					streamchan.appendChild(p2);
				}
				if(data.status === 422){
					p.innerText = "User Not Found";
					p2.innerText = "User Not Found";
					streaming.appendChild(p);
					streamchan.appendChild(p2);
				}
			}
		})

	})
}
getRows();











