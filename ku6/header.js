// ==UserScript==
// @name         ku6HTML5
// @description  Parse video link source for ku6.com
// @include      http://v.ku6.com/*
// @version      1.1
// @license      GPLv3
// @author       LiuLang
// @email        gsushzhsosgsu@gmail.com
// @run-at       document-end
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// ==/UserScript==

var uw = unsafeWindow,
    log = uw.console.log,
    error = uw.console.error;

