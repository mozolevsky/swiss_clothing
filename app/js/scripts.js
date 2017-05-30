'use strict';

+(function() {
    var burger = document.querySelector('.burger');

    burger.addEventListener('click', function() {
        this.classList.toggle("change");
    });
})();