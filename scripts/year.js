fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
    .then((data) => {
        return data.json();
    })
    .then((date) => {
        let year = new Date(date.datetime);
        document.getElementById("year").innerHTML = year.getFullYear()
    });
