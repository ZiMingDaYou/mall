/*
 * @Author: 张培培
 * @Github: https: //github.com/ZiMingDaYou
 * @Date: 2019-01-25 21:08:36
 * @LastEditors: 张培培
 * @LastEditTime: 2019-01-25 23:27:31
 */
require('./index.css');
require('page/common/nav-simple/index.js');
var _tools = require('util/tools.js');
$(function () {
    var type = _tools.getURLParam('type') || 'default',
        $element = $('.' + type + '-success').show();
})