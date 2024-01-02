"use strict";
$(document).ready(function(){
    $('.header__burger').click(function(event){
        console.log("Clicked");
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});