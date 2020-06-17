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
            var totalTimeSpent = 0;
            data.forEach(log => {
                totalTimeSpent += log.timeSpent.parseInt();
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
    console.log("render triggered");
    // var totalContainer = document.getElementById('totalTimeSpent');
    // var time = calculTotalTimeSpent().then(function () {
    //     if (time) {
    //         totalContainer.textContent = "You passed ";
    //         var timeElem = document.createElement('span')
    //         timeElem.textContent = time;
    //         totalContainer.append(timeElem);
    //         totalContainer.textContent = " on this task.";
    //     } else {
    //         totalContainer.textContent = "You didn't set time spent on this task yet."
    //     }
    // });

    // var logsContainer = document.getElementById('logTimeSpent');
    // logsContainer.textContent = displayLogs();
})