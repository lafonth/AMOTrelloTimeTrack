var manageTimeButton = function (t, opts) {
    console.log(t);
    return t.popup({
        title: 'Time spent',
        url: './timeManage.html'
        // args: {
        //     name: t.get('member')
        // }
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