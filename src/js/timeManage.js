var t = TrelloPowerUp.iframe();

function addTimeToTotalSPent(value){
    return new Promise((resolve) => {
        var curentTotal;
        t.get('card', 'shared', 'timeTrack').then(function(data) {
            curentTotal = data.timeSpentToAdd;
            data.timeSpentToAdd = value + curentTotal;
            t.set('card', 'shared', 'timeTrack', data).then(function(){
                resolve();
            });
        });
    })
}

document.getElementById('closePopup').onclick = function(){
    t.closePopup();
}
document.getElementById('insertValue').onclick = function(){
    addTimeToTotalSPent(document.getElementById('timeSpentToAdd').value).then(function(){
        t.popupClose();
    });
    
}

t.render(function() {
    t.get('card', 'shared', 'timeTrack').then(function(data) {
        var container = document.getElementById('timeSpentStatus');
        if(data.timeSpent){
            var time = data.timeSpent ? data.timeSpent : "";
            container.textContent = "You passed ";
            var timeElem = document.createElement('span')
            timeElem.textContent = time;
            container.append(timeElem);
            container.textContent = " on this task.";
        }else{
            container.textContent = "You didn't set time on this task yet."
        }
        
    });
})

