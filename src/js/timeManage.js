var t = TrelloPowerUp.iframe();
console.log(t);

document.getElementById('closePopup').onclick = function(){
    t.closePopup();
}
document.getElementById('insertValue').onclick = function(){
    t.set('card', 'shared', 'timeSpent', document.getElementById('timeSpent').value);
}

t.render(function() {
    console.log(t.get('card', 'shared', 'timeSpent'));
    document.getElementById('timeSpent').value = '';
})

