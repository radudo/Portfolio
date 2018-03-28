$(document).ready(function () {
    $('#fullpage').fullpage({
        //Menu
        anchors: ['firstPage', 'secondPage', 'thirdPage'],
        menu: '#myMenu',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['First page', 'Second page', 'Third and last page'],
        //Sections
        sectionsColor: ['#1bbc9b', '#4BBFC3'],


    });

    $(document).on('click', '#movedown', function () {
    $.fn.fullpage.moveSectionDown();
    });



});


