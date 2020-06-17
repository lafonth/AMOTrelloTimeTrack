import 'bootstrap/dist/css/bootstrap.css';
/////init/////
var t = TrelloPowerUp.iframe();

/////utils card/////

function addTimeToTotalSpent(value, date) {
    return new Promise((resolve) => {
        t.get('card', 'shared', 'timeTrack').then(function (data) {
            if (!data) {
                data = new Array();
            }
            data.push({
                date: date,
                timeSpent: value
            });
            t.set('card', 'shared', 'timeTrack', data).then(function () {
                resolve();
            });
        });
    });
}

function calculTotalTimeSpent() {
    return new Promise((resolve) => {
        t.get('card', 'shared', 'timeTrack').then(function (data) {
            console.log("timeTrack data:", data);
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
        t.set('card', 'shared', 'timeTrack', {}).then(resolve());
    });
}

/////general exec/////

document.getElementById('resetData').onclick = function () {
    resetData().then(function () {
        t.closeModal();
    });
}
document.getElementById('closeModal').onclick = function () {
    t.closeModal();
}
document.getElementById('insertValue').onclick = function () {
    var valTimeSpentToAdd = document.getElementById('timeSpentToAdd').value;
    var valDateSpent = document.getElementById('dateSpent').value;
    addTimeToTotalSpent(valTimeSpentToAdd, valDateSpent).then(function () {
        t.closeModal();
    });
}

/////render/////
t.render(function () {
    var container = document.getElementById('totalTimeSpent');
    var time = calculTotalTimeSpent().then(function () {
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