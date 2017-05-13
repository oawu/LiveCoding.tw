/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

$(function () {
  var _weeks = ['日', '一', '二', '三', '四', '五', '六'];
  // 1 產生出 二維 陣列
  // 2 二維陣列 是月份內的每天 資訊(日期)

  // 3 產生出 html 元素，加到 month
  function monthDayCount (y, m) {
    return (--m == 1) ? ((y % 4) === 0) && ((y % 100) !== 0) || ((y % 400) === 0) ? 29 : 28 : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m];
  }
  function prevMonth (y, m) {
    return { y: m == 1 ? y - 1 : y, m: m == 1 ? 12 : (m - 1) };
  }
  function nextMonth (y, m) {
    return { y: m == 12 ? y + 1 : y, m: m == 12 ? 1 : (m + 1) };
  }
  function createMonthArr (y, m) {
    // 1 號 在星期幾
    // 本月 有幾天
    // 本月 有幾週
    var firstDayWeek = new Date (y, m - 1, 1).getDay ();
    var monthCount = monthDayCount (y, m);
    var weekCount = parseInt ((firstDayWeek + monthCount) / 7, 10) + (((firstDayWeek + monthCount) % 7) ? 1 : 0);

    var p = prevMonth (y, m);
    var prevMonthCount = monthDayCount (p.y, p.m);
    var n = nextMonth (y, m);

    return Array.apply (null, Array (weekCount)).map (function (_, i) {
      return Array.apply (null, Array (7)).map (function (_, j) {
        var d = i * 7 + j - firstDayWeek + 1;
        var m2 = m;
        var y2 = y;
        var l = true; // 是否為本月份

        if (d > monthCount) {
          d = d - monthCount;
          m2 = n.m;
          y2 = n.y;
          l = false;
        }

        if (d <= 0) {
          d = d + prevMonthCount;
          m2 = p.m;
          y2 = p.y;
          l = false;
        }

        return {
          y: y2,
          m: m2,
          d: d,
          l: l
        };
      });
    });
  }

  function renderMonth (y, m) {
    var monthArr = createMonthArr (y, m);

    var w = $('<div />').addClass ('weeks').append (
      _weeks.map (function (t) {
        return $('<div />').text (t);
      }));

    var ds = monthArr.map (function (w) {
      return $('<div />').addClass ('days').append (
        w.map (function (d) {
          return $('<div />').addClass (d.l ? null : 'next-prev-month')
                             .attr ('data-y', d.y)
                             .attr ('data-m', d.m)
                             .attr ('data-d', d.d);
        }));
    });

    $('.month').empty ().append (w).append (ds);
    $('.calendar .top .title').attr ('data-y', y).attr ('data-m', m);
  }

  var date = new Date ();
  
  renderMonth (date.getFullYear (), date.getMonth () + 1);

  $('.top .btns .prev').click (function () {
    var y = parseInt ($('.calendar .top .title').attr ('data-y'), 10);
    var m = parseInt ($('.calendar .top .title').attr ('data-m'), 10);
    
    var p = prevMonth (y, m);

    renderMonth (p.y, p.m);
  });
  $('.top .btns .next').click (function () {
    var y = parseInt ($('.calendar .top .title').attr ('data-y'), 10);
    var m = parseInt ($('.calendar .top .title').attr ('data-m'), 10);
    var n = nextMonth (y, m);
    renderMonth (n.y, n.m);
  });

});