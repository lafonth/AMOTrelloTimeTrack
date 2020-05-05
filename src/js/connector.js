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