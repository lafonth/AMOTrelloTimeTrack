var t = TrelloPowerUp.iframe();
console.log(t);

t.render(function() {
    document.getElementById('timeSpent').value = t.arg('name');
})