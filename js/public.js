/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2017 OA Wu Design
 * @license     http://creativecommons.org/licenses/by-nc/2.0/tw/
 */


$(function () {


  $("#top_banner").css ({
    height: $(window).height ()
  }).find ("> div").imgLiquid ();
  var _top_banner_now = 2;

  $('#top_banner_count').text ($("#top_banner > div").length);
  $('#top_banner_now').text (_top_banner_now);

  $('#top_banner_next').click (function () {
    var $tmp = $('#top_banner > div').first ().clone (true);
    $('#top_banner').append ($tmp);
    $('#top_banner > div').first ().remove ();

    _top_banner_now = _top_banner_now + 1;
    if (_top_banner_now > $("#top_banner > div").length)
      _top_banner_now = 1;

    $('#top_banner_now').text (_top_banner_now);
  });

  $('#top_banner_prev').click (function () {
    var $tmp = $('#top_banner > div').last ().clone (true);
    $('#top_banner').prepend ($tmp);
    $('#top_banner > div').last ().remove ();
    
    _top_banner_now = _top_banner_now - 1;
    if (_top_banner_now < 1)
      _top_banner_now = $("#top_banner > div").length;
    $('#top_banner_now').text (_top_banner_now);
  }).click ();

  setTimeout (function () {
    $('#top_banner').addClass ('transi');
  }, 500);

});