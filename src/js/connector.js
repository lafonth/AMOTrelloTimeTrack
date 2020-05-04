console.log("hello world! trello power up")

var manageTimeButton = function (t, opts) {
    // t.modal({
    //     // the url to load for the iframe
    //     url: '/src/html/timeManage.html',
    //     // optional color for header chrome
    //     accentColor: '#F2D600',
    //     // initial height for iframe
    //     height: 500, // not used if fullscreen is true
    //     // whether the modal should stretch to take up the whole screen
    //     fullscreen: false,
    //     // optional function to be called if user closes modal (via `X` or escape, etc)
    //     callback: () => console.log('Goodbye.'),
    //     // optional title for header chrome
    //     title: 'Time Manage'
    // });
    return t.popup({
        title: 'Snooze Card',
        items: [{
            text: 'Choose Time',
            callback: function (t, opts) {

            }
        }, {
            text: 'In 1 hour',
            callback: function (t, opts) {

            }
        }, {
            text: 'In 2 hours',
            callback: function (t, opts) {

            }
        }]
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