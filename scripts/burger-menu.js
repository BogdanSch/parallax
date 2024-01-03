"use strict";

$(document).ready(function () {
  const headerItems = $(".header__item");

  $(".header__burger").click(function (event) {
    $(".header__burger, .header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });

  headerItems.click(function () {
    if ($(".header__burger, .header__menu").hasClass("active")) {
      $(".header__burger, .header__menu").removeClass("active");
      $("body").removeClass("lock");
    }
  });
});
