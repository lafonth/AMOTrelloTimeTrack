var t = TrelloPowerUp.iframe();

/////utils card/////

function addTimeToTotalSpent(value) {
    return new Promise((resolve) => {
        t.get('card', 'shared', 'timeTrack').then(function (data) {
            if (!data) {
                data = new Array();
            }
            data.push({
                date: Date.now(),
                timeSpent: value
            });
            t.set('card', 'shared', 'timeTrack', data).then(function () {
                resolve();
            });
        });
    });
}

function calculTotalTimeSPent() {
    return new Promise((resolve) => {
        t.get('card', 'shared', 'timeTrack').then(function (data) {
            console.log("timeTrack data:", data)
            var totalTimeSpent;
            data.forEach(log => {
                console.log("log:", log);
                totalTimeSpent += log.timeSpent;
            });
            return totalTimeSpent;
        });
    });
}

function resetData() {
    return new Promise((resolve) => {
        t.set('card', 'shared', 'timetrack', {}).then(resolve());
    });
}

/////general exec/////

document.getElementById('resetData').onclick = function () {
    resetData().then(function () {
        t.closePopup();
    });
}
document.getElementById('closePopup').onclick = function () {
    t.closePopup();
}
document.getElementById('insertValue').onclick = function () {
    addTimeToTotalSpent(document.getElementById('timeSpentToAdd').value).then(function () {
        t.closePopup();
    });
}

/////render/////
t.render(function () {
    var container = document.getElementById('timeSpentStatus');
    var time = calculTotalTimeSPent().then(function () {
        console.log("total time:", time)
        if (time) {
            container.textContent = "You passed ";
            var timeElem = document.createElement('span')
            timeElem.textContent = time;
            container.append(timeElem);
            container.textContent = " on this task.";
        } else {
            container.textContent = "You didn't set time on this task yet."
        }
    });
})