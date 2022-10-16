window.onload = function () {
    // Month Day, Year Hour:Minute:Second, id-of-element-container
    countUpFromTime("Jan 11, 2002 00:00:00", 'countup'); // ****** Change this line!
};
function countUpFromTime(countFrom, id) {
    countFrom = new Date(countFrom).getTime();
    var now = new Date(),
        countFrom = new Date(countFrom),
        timeDifference = (now - countFrom);

    var secondsInADay = 60 * 60 * 1000 * 24,
        secondsInAHour = 60 * 60 * 1000;

    days = Math.floor(timeDifference / (secondsInADay) * 1);
    years = Math.floor(days / 365);
    if (years > 1) { days = days - (years * 365) }
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

    var idEl = document.getElementById(id);
    idEl.getElementsByClassName('annees')[0].innerHTML = years;
    idEl.getElementsByClassName('jours')[0].innerHTML = days;
    idEl.getElementsByClassName('heures')[0].innerHTML = hours;
    idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
    idEl.getElementsByClassName('secondes')[0].innerHTML = secs;

    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function () { countUpFromTime(countFrom, id); }, 1000);
}


// <div class="countup" id="countup1">
//     <span>J'ai actuellement </span>
//     <span class="annees">00</span>
//     <span class="timeRefYears">ans,</span>
//     <span class="jours">00</span>
//     <span class="timeRefDays">jours,</span>
//     <span class="heures">00</span>
//     <span class="timeRefHours">heures,</span>
//     <span class="minutes">00</span>
//     <span class="timeRefMinutes">minutes,</span>
//     <span class="secondes">00</span>
//     <span class="timeRefSeconds">secondes,</span>
// </div>