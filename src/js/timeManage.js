var t = TrelloPowerUp.iframe();

function addTimeToTotalSPent(value){
    return new Promise((resolve) => {
        var curentTotal;
        t.get('card', 'shared', 'timeSpentToAdd').then(function(data) {
            curentTotal = data;
            var newTotal = value + curentTotal;
            t.set('card', 'shared', 'timeSpent', newTotal).then(function(){
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
    t.get('card', 'shared', 'timeSpentToAdd').then(function(data) {
        document.getElementById('timeSpentToAdd').value = data ? data : "";
    });
})

