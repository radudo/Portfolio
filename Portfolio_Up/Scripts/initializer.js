$(document).ready(function () {
    $('#fullpage').fullpage({
        //Menu
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'contactPage'],
        menu: '#myMenu',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Intro', 'About', 'Projects','Contact'],
        //Sections
        sectionsColor: ['#1bbc9b', '#2f3542', '#1d1d1d', '#ffffff'],
        fitToSection: true,
        recordHistory: true,
        setLocAnchors: true,
        scrollOverflow: true,
        continuousVertical: true,

        afterLoad: function (anchorLink, index) {
            var loadedSection = $(this);
            //using anchorLink
            if (anchorLink === 'secondPage') {
                jQuery('.skillbar').each(function () {
                    jQuery(this).find('.skillbar-bar').animate({
                        width: jQuery(this).attr('data-percent')
                    }, 2000);

                });



            }

            if (anchorLink === 'firstPage') {
                particlesJS("particles-js", {
                    "particles": {
                        "number": {
                            "value": 560,
                            "density": {
                                "enable": true,
                                "value_area": 2000
                            }
                        },
                        "color": {
                            "value": "random"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                            "image": {
                                "src": "img/github.svg",
                                "width": 100,
                                "height": 100
                            }
                        },
                        "opacity": {
                            "value": 0.5,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#ffffff",
                            "opacity": 0.7,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 0.5,
                            "direction": "none",
                            "random": true,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "grab"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 140,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                });

            }

            //$('#fade').addClass('uk-animation-fade');
        },


        onLeave: function (index, nextIndex, direction) {
            if (nextIndex === 2) {

                $.when(
                    $('#about').addClass('uk-animation-slide-right').delay(2000).promise()
                ).done(function () {
                    $('#sk').removeClass('uk-hidden').addClass('uk-animation-fade').delay(1000).promise()
                        .done(function () {
                            $('#sk1').removeClass('uk-hidden').addClass('uk-animation-fade').delay(1000).promise()
                                .done(function () {
                                    $('#sk2').removeClass('uk-hidden').addClass('uk-animation-fade').delay(1000).promise()

                                })
                        })



                });

            } else if (direction === 'up' || direction === 'down') {
                //$('#fade').addClass('uk-animation-reverse');
                //$('#about').addClass('uk-animation-reverse');
                //$('#sk').addClass('uk-animation-reverse');

            }

            if (nextIndex === 3) {

                $('#pr').addClass('uk-animation-slide-bottom uk-animation-fade').delay(1500);
               
            } else if (direction === 'up' || direction === 'down') {
                $('#pr').removeClass('uk-animation-slide-bottom uk-animation-fade');
                $('#foo').removeClass('r');

            }
            if (nextIndex === 4) {
                //$('#foo').addClass('r').delay(3000);
                setTimeout(function () {
                    $('#foo').addClass('r uk-animation-fade');
                    $('#fp-nav ul li a span, .fp-slidesNav ul li a span').css('background','red')
                }, 490);
            }
            else if (direction === 'up' || direction === 'down') {
               
                $('#foo').removeClass('r');

            }
       

            if (index === 2) {

                $('#about').removeClass('uk-animation-slide-right uk-animation-reverse');
                $.when(
                    $('#sk').removeClass('uk-hidden').promise()
                ).done(function () {
                    $('#sk1').removeClass('uk-hidden ').promise()
                        .done(function () {
                            $('#sk2').removeClass('uk-hidden ').promise()
                        })
                    });

         

              
            }

        },
       
    

    });

  
    UIkit.util.on('#secondPage', 'show', function () {
        // do something
    });

    $(document).on('click', '#movedown', function () {
    $.fn.fullpage.moveSectionDown();
    });

    UIkit.util.on('#first', 'click', function (e) {
      
        e.preventDefault();
        e.target.blur();
        $.fn.fullpage.moveTo(1, 0);
        UIkit.modal("#menu-modal").hide();
    });

    UIkit.util.on('#second', 'click', function (e) {

        e.preventDefault();
        e.target.blur();
        $.fn.fullpage.moveTo(2, 0);
        UIkit.modal("#menu-modal").hide();
    });

    UIkit.util.on('#third', 'click', function (e) {

        e.preventDefault();
        e.target.blur();
        $.fn.fullpage.moveTo(3, 0);
        UIkit.modal("#menu-modal").hide();
    });
    var showText = function (target, message, index, interval) {
        if (index < message.length) {
            $(target).append(message[index++]);
            setTimeout(function () { showText(target, message, index, interval); }, interval);
        }
    }
    $(function () {
       
        showText("#msg", "Living in Denmark, Aarhus .", 0, 80);
        //var fun = $.when(
        //    $(function () { showText("#performance", "Driven By Performance", 0, 60) }).delay(3500).promise()
        //      ).done(function () {
        //          $(function () { showText("#tailor", "Tailor-Made For User Needs", 0, 60) }).delay(1000).promise()
        //            .done(function () {
        //                $(function () { showText("#care", "Code Carefuly Built", 0, 60) }).promise()
        //            })
        //    });

        //;

    });

  //Chart

   

    /* ---- stats.js config ---- */

});

jQuery(document).ready(function (event) {
    var isAnimating = false,
        newLocation = '';
    firstLoad = false;

    //trigger smooth transition from the actual page to the new one 
    $('main').on('click', '[data-type="page-transition"]', function (event) {
        event.preventDefault();
        //detect which page has been selected
        var newPage = $(this).attr('href');
        //if the page is not already being animated - trigger animation
        if (!isAnimating) changePage(newPage, true);
        firstLoad = true;
    });

    //detect the 'popstate' event - e.g. user clicking the back button
    $(window).on('popstate', function () {
        if (firstLoad) {
            /*
            Safari emits a popstate event on page load - check if firstLoad is true before animating
            if it's false - the page has just been loaded 
            */
            var newPageArray = location.pathname.split('/'),
                //this is the url of the page to be loaded 
                newPage = newPageArray[newPageArray.length - 1];

            if (!isAnimating && newLocation != newPage) changePage(newPage, false);
        }
        firstLoad = true;
    });

    function changePage(url, bool) {
        isAnimating = true;
        // trigger page animation
        $('body').addClass('page-is-changing');
        $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
            loadNewContent(url, bool);
            newLocation = url;
            $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
        });
        //if browser doesn't support CSS transitions
        if (!transitionsSupported()) {
            loadNewContent(url, bool);
            newLocation = url;
        }
    }

    function loadNewContent(url, bool) {
        url = ('' == url) ? 'index.html' : url;
        var newSection = 'cd-' + url.replace('.html', '');
        var section = $('<div class="cd-main-content ' + newSection + '"></div>');

        section.load(url + ' .cd-main-content > *', function (event) {
            // load new content and replace <main> content with the new one
            $('main').html(section);
            //if browser doesn't support CSS transitions - dont wait for the end of transitions
            var delay = (transitionsSupported()) ? 1200 : 0;
            setTimeout(function () {
                //wait for the end of the transition on the loading bar before revealing the new content
                (section.hasClass('cd-about')) ? $('body').addClass('cd-about') : $('body').removeClass('cd-about');
                $('body').removeClass('page-is-changing');
                $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                    isAnimating = false;
                    $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
                });

                if (!transitionsSupported()) isAnimating = false;
            }, delay);

            if (url != window.location && bool) {
                //add the new page to the window.history
                //if the new page was triggered by a 'popstate' event, don't add it
                window.history.pushState({ path: url }, '', url);
            }
        });
    }

    function transitionsSupported() {
        return $('html').hasClass('csstransitions');
    }
});