var t = TrelloPowerUp.iframe();

document.getElementById('closePopup').onclick = function(){
    t.closePopup();
}
document.getElementById('insertValue').onclick = function(){
    t.set('card', 'shared', 'timeSpent', document.getElementById('timeSpent').value).then(function(){
        t.closePopup();
    });
}

t.render(function() {
    t.get('card', 'shared', 'timeSpent').then(function(data) {
        document.getElementById('timeSpent').value = data ? data : "";
    });
})

