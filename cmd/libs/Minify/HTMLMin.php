<?php

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2017 OA Wu Design
 * @license     http://creativecommons.org/licenses/by-nc/2.0/tw/
 */

class HTMLMin {
  public static function minify ($html) {
    return trim (preg_replace (array ('/\>[^\S ]+/su', '/[^\S ]+\</su', '/(\s)+/su'), array ('>', '<', '\\1'), $html));
  }
}