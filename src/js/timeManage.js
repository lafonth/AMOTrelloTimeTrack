import 'bootstrap/dist/css/bootstrap.css';
/////init/////
var t = TrelloPowerUp.iframe();

var context = t.board('name', 'members');
console.log(JSON.stringify(context, null, 2));

/////utils card/////

function addTimeToTotalSpent(value, date) {
    return new Promise((resolve) => {
        t.get('card', 'shared', 'timeTrack').then(function (data) {
            if (typeof data.logs == 'undefined') {
                data = {
                    logs: new Array
                }
            }
            data.logs.push({
                date: date,
                timeSpent: value
            });
            t.set('card', 'shared', 'timeTrack', data).then(function () {
                resolve();
            });
        }, function (error) {
            console.log('error get timeTrack in addTimeToTotalSpent');
        });
    });
}

function calculTotalTimeSpent() {
    return new Promise((resolve) => {
        t.get('card', 'shared', 'timeTrack').then(function (data) {
            var totalTimeSpent = 0;
            //TODO debug this
            if (typeof data.logs !== 'undefined') {
                data.logs.forEach(log => {
                    totalTimeSpent += parseInt(log.timeSpent);
                });
            } else {
                data = {
                    logs: new Array
                }
            }
            resolve(totalTimeSpent);
        }, function (error) {
            console.log('error get timeTrack in calculTotalTimeSpent');
        });
    });
}

function resetData() {
    return new Promise((resolve) => {
        t.set('card', 'shared', 'timeTrack', {
            logs: new Array
        }).then(resolve());
    });
}

function updateDisplay() {
    calculTotalTimeSpent().then((time) => {
        document.getElementById('totalTimeSpent').textContent = time;
    });

    // var logsContainer = document.getElementById('logTimeSpent');
    // logsContainer.textContent = displayLogs(); //TODO
}

/////general exec/////

document.getElementById('resetData').onclick = function () {
    resetData().then(function () {
        updateDisplay();
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
        updateDisplay();
        // t.closeModal();
    });
}



/////render/////
t.render(function () {
    // NOT TRIGGERED WHEN SET DATA used, I don't know why

    updateDisplay();

    // var logsContainer = document.getElementById('logTimeSpent');
    // logsContainer.textContent = displayLogs(); //TODO
})