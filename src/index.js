'use strict';

var domify = require('domify'),
    template = require('./template.html');

var MyComponent = module.exports = function (el) {
    if ('undefined' === typeof el) {
        throw new Error('You must give an element');
    }
    
    var self = this;
    
    this.el = el;

    el.appendChild(domify(template));

    el.addEventListener('click', function (ev) {
       if (ev.target && ev.target.classList.contains('js-updateText')) {
           self.updateText('It works!');
       }
    });
};

MyComponent.prototype.updateText = function (str) {
    if ('string' !== typeof str) {
        throw new TypeError(str + 'must be a string');
    }

    this.el.querySelector('.MyComponent-header').textContent = str;
    
    return this;
};