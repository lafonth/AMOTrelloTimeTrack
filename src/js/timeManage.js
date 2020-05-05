var t = TrelloPowerUp.iframe();
console.log(t);

document.getElementById('closePopup').onclick = function(){
    t.closePopup();
}

t.render(function() {
    document.getElementById('timeSpent').value = t.arg('name');
})

