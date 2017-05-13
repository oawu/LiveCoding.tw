/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

$(function () {
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

 //                   7
          //  j  0   1   2 3 4 5 6
                // 日
 //           0   0, 1, 2, 3, 4, 5, 6
 //           1   7, 8, 9,10,11,12,13
 // weekCount 2  14,15,16,17,18,19,20
 //           3  21,22,23,4,5,6,7
 //           4  1,2,3,4,5,6,7
    
    var t = Array.apply (null, Array (weekCount)).map (function (_, i) {
      return Array.apply (null, Array (7)).map (function (_, j) {
        var d = i * 7 + j - firstDayWeek + 1;
        var m2 = m;
        var y2 = y;

        if (d <= 0) {
          d = d + prevMonthCount;
          m2 = p.m;
          y2 = p.y;
        }

        if (d > monthCount) {
          d = d - monthCount;
          m2 = n.m;
          y2 = n.y;
        }

        return {
          y: y2,
          m: m2,
          d: d
        };
      });
    });
   
  console.error (t);

  }

  createMonthArr (2017, 12);
  

});