var manageTimeButton = function (t, opts) {
    t.card('members').then(function (members) {
        console.log("members in connector", members);
        return t.modal({
            title: 'Time spent',
            url: './timeManage.html',
            height: 400,
            args: {
                members: members
            }
        });
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