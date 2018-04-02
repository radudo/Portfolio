$(document).ready(function () {
    $('#fullpage').fullpage({
        //Menu
        anchors: ['firstPage', 'secondPage', 'thirdPage'],
        menu: '#myMenu',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Intro', 'About', 'Contact'],
        //Sections
        sectionsColor: ['#1bbc9b', '#2f3542','#1d1d1d'],
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
    $("#project").hover(
        function () {
            $(this).addClass('uk-animation-fade').css("background-image", "url('../Media/images.jpg')");
        },
        function () {
            $(this).css("background", "black");
        }
    );
   
});


