'use strict';

+(function() {
    var burger = document.querySelector('.burger');

    burger.addEventListener('click', function() {
        this.classList.toggle("change");
    });
})();



+(function() {
    var scrollToggle = document.querySelectorAll('.scroll');

    if ( scrollToggle ) {
        var smoothScroll = function (anchor, duration) {

            var startLocation = window.pageYOffset;
            var endLocation = anchor.offsetTop;
            var distance = endLocation - startLocation;
            var increments = distance/(duration/16);
            var stopAnimation;

            var animateScroll = function () {
                window.scrollBy(0, increments);
                stopAnimation();
            };

            if ( increments >= 0 ) {
                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
                        clearInterval(runAnimation);
                    }
                };
            }
            else {
                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( travelled <= (endLocation || 0) ) {
                        clearInterval(runAnimation);
                    }
                };
            }

            var runAnimation = setInterval(animateScroll, 16);

        };

        [].forEach.call(scrollToggle, function (toggle) {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();

                var dataID = toggle.getAttribute('href');
                var dataTarget = document.querySelector(dataID);
                var dataSpeed = toggle.getAttribute('data-speed');

                if (dataTarget) {
                    smoothScroll(dataTarget, dataSpeed || 500);
                }

            }, false);

        });
    }
})();