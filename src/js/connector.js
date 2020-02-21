console.log("hello world! trello power up")

window.TrelloPowerUp.initialize({
    'card-buttons': function (t, opts) {
        return t.card('all')
            .then(function (card) {
                console.log(JSON.stringify(card, null, 2));
            });
    }
})