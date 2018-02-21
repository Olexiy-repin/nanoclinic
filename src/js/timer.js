window.onload = function()
{
   initializeTimer();
}


function initializeTimer() {
	var endDate = new Date(2018,1,21,20,00);
	var currentDate = new Date();
	var seconds = (endDate-currentDate) / 1000;
	if (seconds > 0) {
		var minutes = seconds/60;
		var hours = minutes/60;
    var days = hours/24;
		minutes = (hours - Math.floor(hours)) * 60;
		hours = Math.floor(hours);
		seconds = Math.floor((minutes - Math.floor(minutes)) * 60);
		minutes = Math.floor(minutes);
    days = Math.floor(days);

		setTimePage(hours,minutes,seconds,days);

		function secOut() {
		  if (seconds == 0) {
			  if (minutes == 0) {
				  if (hours == 0) {
            if(days == 0) {
            } else {
              days--;
              hours = 24;
  					  minutes = 59;
  					  seconds = 59;
            }
				  }
				  else {
					  hours--;
					  minutes = 59;
					  seconds = 59;
				  }
			  }
			  else {
				  minutes--;
				  seconds = 59;
			  }
		  }
		  else {
			  seconds--;
		  }
      if(seconds < 10) {
        seconds = "0" + seconds;
      } else {
        seconds = seconds;
      }
		  setTimePage(hours,minutes,seconds, days);
		}
		timerId = setInterval(secOut, 1000)
	}
}

function setTimePage(h,m,s,d) {
  if(m < 10) {
    m = "0" + m;
  } else {
    m = m;
  }
  if(h < 10) {
    h = "0" + h;
  } else {
    h = h;
  }
  if(d < 10) {
    d = "0" + d;
  } else {
    d = d;
  }

	var element = document.getElementById("timer");
  document.querySelector('.days').textContent = d;
  document.querySelector('.hours').textContent = h;
  document.querySelector('.minutes').textContent = m;
  document.querySelector('.sec').textContent = s;

  document.querySelector('.days-02').textContent = d;
  document.querySelector('.hours-02').textContent = h;
  document.querySelector('.minutes-02').textContent = m;
  document.querySelector('.sec-02').textContent = s;

  document.querySelector('.days-03').textContent = d;
  document.querySelector('.hours-03').textContent = h;
  document.querySelector('.minutes-03').textContent = m;
  document.querySelector('.sec-03').textContent = s;
}
