import 'bootstrap/dist/css/bootstrap.css';
/////init/////
var t = TrelloPowerUp.iframe();

/////utils card/////

function addTimeToTotalSpent(value, date) {
    return new Promise((resolve) => {
        t.get('card', 'shared', 'timeTrack').then(function (data) {
            if(!data.logs){
                var data = {
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
        });
    });
}

function calculTotalTimeSpent() {
    return new Promise((resolve) => {
        t.get('card', 'shared', 'timeTrack').then(function (data) {
            var totalTimeSpent = 0;
            data.logs.forEach(log => {
                totalTimeSpent += parseInt(log.timeSpent);
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

function updateDisplay() {
    calculTotalTimeSpent().then((time)=>{
        document.getElementById('totalTimeSpent').textContent = time;
    });

    // var logsContainer = document.getElementById('logTimeSpent');
    // logsContainer.textContent = displayLogs(); //TODO
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
        updateDisplay();
        // t.closeModal();
    });
}



/////render/////
t.render(function () {
    console.log("render triggered");

    // NOT TRIGGERED WHEN SET DATA

    // calculTotalTimeSpent().then((time)=>{
    //     document.getElementById('totalTimeSpent').textContent = time;
    // });

    // var logsContainer = document.getElementById('logTimeSpent');
    // logsContainer.textContent = displayLogs(); //TODO
})