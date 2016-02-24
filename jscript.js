$(document).ready(function () {
    $('body').prepend('<div id="container"></div>');
    
    $('#container').prepend('<button onclick="newGrid(); return false">New Grid</button>');
    
    for (var x = 0; x < 16; x++) {
        var ul = $('<ul></ul>');
        ul.appendTo('#container');
    };
    
    for (var y = 0; y < 16; y++) {
        var li = $('<li></li>');
        li.appendTo('ul');
    };
    
    $('li').css({
        display: 'inline-block',
        'list-style-type': 'none',
        height: '25px',
        width: '25px',
        border: '1px black solid',
        margin: '0 1px',
        'box-sizing': 'border-box'
    }).hover(function () {
        $(this).css('background-color', 'blue');
    });
    
    $('#container').css({
        margin: '0 auto'
    });
    
    $('ul').css({
        padding: '0',
        margin: '0'
    });
    
    $('button').css({
        margin: '10px 0',
        padding: '10px',
        'font-size': '16px'
    });
});

function newGrid() {
    $('li').css({'background-color': 'white'});
    $('#container').remove();
    $('body').prepend('<div id="container"></div>');
    
    var width = prompt('Enter a new grid width');
    
    if (width > 90) {
        var width = prompt('Grid width must be 90 or less');
    };
    
    var height = prompt('Enter a new grid height');
    
    if (height > 40) {
        var height = prompt('Grid height must be 40 or less');
    };
    
    for (var x = 0; x <= height; x++) {
        var ul = $('<ul></ul>');
        ul.appendTo('#container');
    };
    
    for (var y = 0; y <= width; y++) {
        var li = $('<li></li>');
        li.appendTo('ul');
    };
    
    $('#container').prepend('<button onclick="newGrid(); return false">New Grid</button>');
    
    $('li').css({
        display: 'inline-block',
        'list-style-type': 'none',
        height: '25px',
        width: '25px',
        border: '1px black solid',
        margin: '0 1px',
        'box-sizing': 'border-box'
    }).hover(function () {
        $(this).css('background-color', 'blue');
    });
    
    $('#container').css({
        margin: '0 auto'
    });
    
    $('ul').css({
        padding: '0',
        margin: '0'
    });
    
    $('button').css({
        margin: '10px 0',
        padding: '10px',
        'font-size': '16px'
    });
};