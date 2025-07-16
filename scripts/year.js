var data = null;
let yearData = JSON.parse(localStorage.getItem('yearData'));
const sysDateTime = new Date();

if(!yearData || (sysDateTime.getTime() > yearData.expiry)){
    fetchYear("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    fetchYear("https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata");
}
else{
    document.getElementById("year").textContent = yearData.year;
}

async function fetchYear(endpoint) {
    while (data == null) {
        try {
	    const res = await fetch(endpoint);
	    data  = await res.json();
	    let year  = null;
	    /*
	      wordtimeapi - data.datetime
	      timeapi     - data.year
	    */
	    if(res.url == "http://worldtimeapi.org/api/timezone/Asia/Kolkata"){
		year = new Date(data.datetime).getFullYear();
	    }
	    else if(res.url == "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata"){
		year = data.year;
	    }
	    document.getElementById("year").textContent = year;
	    localStorage.removeItem('yearData');
	    const obj = {
		year   : year,
		expiry : (sysDateTime.getTime()+(24*60*60*1000)) //expiry time is one-day
	    }
	    localStorage.setItem('yearData',JSON.stringify(obj));
	    break;

        } catch (e) {}
    }
}
