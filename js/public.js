/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

$(function () {
  // setTimeout (function () {
  //   $('.sub').height(100);
  // }, 2000);
  // setTimeout (function () {
  //   $('.sub').height(0);
  // }, 4000);

  $('#menu .sub').each (function () {
    $(this).addClass ('n' + $(this).find ('a').length);
  });
  $('#menu .group > span').click (function () {
    $(this).toggleClass ('show');
  });

});