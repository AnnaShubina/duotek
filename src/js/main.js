$(document).ready(function() {

    //switch tabs
    let $tabs = $('.tabs .tab');
    let $nav = $('.navigation__list');
    $tabs.not('.active').hide();

    $nav.on('click', '.navigation__item', function() {
        $('.navigation__item').removeClass('active');
        $(this).addClass('active');
        $tabs.hide();
        $(`.tab:nth-child(${$(this).index()+1})`).fadeIn(600);
    });

    //open menu
    let $btnOpen = $('.message__menu');

    $btnOpen.on('click', function() {
        $(this).find('.message__options').slideToggle();
    });
});