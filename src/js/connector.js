var manageTimeButton = function (t, opts) {
    return t.modal({
        title: 'Time spent',
        url: './timeManage.html',
        height: 400
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