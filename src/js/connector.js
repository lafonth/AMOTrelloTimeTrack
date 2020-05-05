var manageTimeButton = function (t, opts) {
    return t.popup({
        title: 'Time spent',
        url: './timeManage.html',
        args: {
            name: 'Hubert'
        },
        height: 278 // initial height, can be changed later
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