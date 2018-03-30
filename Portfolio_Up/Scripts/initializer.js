$(document).ready(function () {
    $('#fullpage').fullpage({
        //Menu
        anchors: ['firstPage', 'secondPage', 'thirdPage'],
        menu: '#myMenu',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Intro', 'About', 'Contact'],
        //Sections
        sectionsColor: ['#1bbc9b', '#2c3e50','orange'],
        fitToSection: true,
        dragAndMove: true,
        recordHistory: true,
        setLocAnchors: true,

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
            //$('#fade').addClass('uk-animation-fade');
        },
        onLeave: function (index, nextIndex, direction) {
            if (nextIndex === 2) {
                $('#fade').addClass('uk-animation-fade');
                $('#about').addClass('uk-animation-slide-right');
               

            } else if (direction === 'up' || direction === 'down') {
                $('#fade').addClass('uk-animation-reverse');
                $('#about').addClass('uk-animation-reverse');
            }

            if (index === 2) {
                $('#fade').removeClass('uk-animation-fade uk-animation-reverse');
                $('#about').removeClass('uk-animation-slide-right uk-animation-reverse');
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

    });

  //Chart
  
  

});


