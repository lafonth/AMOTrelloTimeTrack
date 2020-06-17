import 'bootstrap/dist/css/bootstrap.css';
/////init/////
var t = TrelloPowerUp.iframe();

/////utils card/////

function addTimeToTotalSpent(value, date) {
    return new Promise((resolve) => {
        t.get('card', 'shared', 'timeTrack').then(function (data) {
            console.log("data before add:", data);
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
            console.log("data: ", data);
            var totalTimeSpent = 0;
            data.forEach(log => {
                console.log("log: ", log);
                totalTimeSpent += log.timeSpent.parseInt();
            });

            resolve(totalTimeSpent);
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
        // t.closeModal();
    });
}
document.getElementById('closeModal').onclick = function () {
    t.closeModal();
}
document.getElementById('insertValue').onclick = function () {
    var valTimeSpentToAdd = document.getElementById('timeSpentToAdd').value;
    var valDateSpent = document.getElementById('dateSpent').value;
    addTimeToTotalSpent(valTimeSpentToAdd, valDateSpent).then(function () {
        // t.closeModal();
        t.get('card', 'shared', 'timeTrack').then(function (data) {
            console.log("after add: ", data);
        });
    });
}

/////render/////
t.render(function () {
    console.log("render triggered");
    var totalContainer = document.getElementById('totalTimeSpent');
    calculTotalTimeSpent().then(function (time) {
        console.log(time);
    });
    // calculTotalTimeSpent().then(function (time) {
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