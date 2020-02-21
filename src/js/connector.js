console.log("hello world! trello power up")

var manageTimeButton = function (t, opts) {
    t.modal({
        // the url to load for the iframe
        url: '../html/timeManage.html',
        // optional arguments to be passed to the iframe as query parameters
        // access later with t.arg('text')
        args: {
            text: 'Hello'
        },
        // optional color for header chrome
        accentColor: '#F2D600',
        // initial height for iframe
        height: 500, // not used if fullscreen is true
        // whether the modal should stretch to take up the whole screen
        fullscreen: true,
        // optional function to be called if user closes modal (via `X` or escape, etc)
        callback: () => console.log('Goodbye.'),
        // optional title for header chrome
        title: 'appear.in meeting',
        // optional action buttons for header chrome
        // max 3, up to 1 on right side
        actions: [{
            url: 'https://google.com',
            alt: 'Leftmost',
            position: 'left',
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