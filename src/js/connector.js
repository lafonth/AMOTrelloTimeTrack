var manageTimeButton = function (t, opts) {
    return t.modal({
        title: 'Time spent',
        url: './timeManage.html',
        height: 400,
        args : {
            members : t.card('members')
        }
    });
}

window.TrelloPowerUp.initialize({
    'card-buttons': function (t, opts) {
        return [{
            text: 'Time Track',
            callback: manageTimeButton
        }];
    }
})