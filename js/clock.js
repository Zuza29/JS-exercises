const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const currentTime = () => {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let msg = "It's morning, start the new day happy!";
    if (hh > 12 && hh < 18) {
        msg = "It's time for an afternoon cuppa";
    } else if (hh >= 18 && hh < 20) {
        msg = "Relax and enjoy the evening";
    } else if (hh >= 20) {
        msg = "Time for bed";
    }

    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss;
    document.getElementById("clock").innerHTML = time;
    document.getElementById("message").innerHTML = msg;
    const timeUpdate = setTimeout(() => {currentTime()}, 1000);
};

const currentDate = () => {
    let date = new Date();
    let display =
        date.getDate() + " " + months[date.getMonth() + 1] + " " + date.getFullYear();
    document.getElementById("date-div").innerHTML = "Today is " + display;
};

currentDate();
currentTime();
