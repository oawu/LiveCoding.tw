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
  var $menuSpan = $('#menu .group > span');
  $('#menu .sub').each (function () { $(this).addClass ('n' + $(this).find ('a').length); });
  $menuSpan.click (function () { $(this).toggleClass ('show'); });
  $('#menu .group .sub a.active').parent ().prev ().addClass ('show');
  setTimeout (function () { $menuSpan.addClass ('ani'); }, 500);



});