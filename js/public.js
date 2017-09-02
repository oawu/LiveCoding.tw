/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2017 OA Wu Design
 * @license     http://creativecommons.org/licenses/by-nc/2.0/tw/
 */

$(function () {
  var $infos = $('#infos');
  var i = 0;

  var objs = [
    {
      time: {str: '約 1 年之前', date: '2016-01-01'},
      icon: 'icon-location',
      img: 'https://cdn.ioa.tw/upload/articles/icon/0/0/0/33/c300x300_1538083424_59a8353cafadc.jpg',
      title: '123',
      desc: '使用簡單的 JavaScript 與 SCSS 實作數字翻轉計數器，藉由設定每個計數器元素的 class 來達成不同數字的顯示，分別以 n0~n9 的 …',
      link: { href: '', text: '詳細內容'}
    },
    {
      time: {str: '約 2 年之前', date: '2015-01-01'},
      icon: 'icon-star-full',
      img: 'https://cdn.ioa.tw/upload/articles/icon/0/0/0/33/c300x300_1538083424_59a8353cafadc.jpg',
      title: 'qwe',
      desc: '使用簡單的 JavaScript 與 SCSS 實作數字翻轉計數器，藉由設定每個計數器元素的 class 來達成不同數字的顯示，分別以 n0~n9 的 …',
      link: { href: '', text: '詳細內容'}
    },
    {
      time: {str: '約 3 年之前', date: '2014-01-01'},
      icon: 'icon-heart',
      img: 'https://cdn.ioa.tw/upload/articles/icon/0/0/0/33/c300x300_1538083424_59a8353cafadc.jpg',
      title: 'asd',
      desc: '使用簡單的 JavaScript 與 SCSS 實作數字翻轉計數器，藉由設定每個計數器元素的 class 來達成不同數字的顯示，分別以 n0~n9 的 …',
      link: { href: '', text: '詳細內容'}
    },
  ];

  function createInfo (i) {
    var obj = objs[i % objs.length];
    return $('<div />').addClass ('info').append ($('<time />').text (obj.time.str).attr ('data-time', obj.time.date))
                                         .append ($('<i />').addClass (obj.icon))
                                         .append ($('<div />').addClass ('content').append ($('<img />').attr ('src', obj.img))
                                                                                   .append ($('<h3 />').text (obj.title))
                                                                                   .append ($('<p />').text (obj.desc))
                                                                                   .append ($('<a />').attr ('href', obj.link.href).text (obj.link.text)));
  }

  $('#load').click (function () {
    $infos.append (createInfo (i++));
  });

});