$(document).ready(function () {
    $('#fullpage').fullpage({
        //Menu
        anchors: ['firstPage', 'secondPage', 'thirdPage'],
        menu: '#myMenu',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Intro', 'About', 'Contact'],
        //Sections
        sectionsColor: ['#1bbc9b', '#4BBFC3','orange'],
        fitToSection: true,
        dragAndMove: true,
        recordHistory: true,


       

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

  



});


