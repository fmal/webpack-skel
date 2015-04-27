'use strict';

var tape = require('tape'),
    MyComponent = require('..');
    
tape('MyComponent', function (test) {
    test.plan(2);

    new MyComponent(document.body);
    
    var el = document.querySelector('.MyComponent'),
        click = document.createEvent('Event');
        
    test.assert(el, 'appears in DOM');
    
    click.initEvent('click', true, true);
    document.querySelector('.js-updateText').dispatchEvent(click);
    
    test.assert(
        el.querySelector('.MyComponent-header').textContent === 'It works!',
        'changes header text after click'
    );
});