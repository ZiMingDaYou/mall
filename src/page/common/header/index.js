/*
 * @Author: 张培培
 * @Github: https: //github.com/ZiMingDaYou
 * @Date: 2019-01-18 17:51:30
 * @LastEditors: 张培培
 * @LastEditTime: 2019-01-19 11:09:05
 */

require('./index.css');
var _tools = require('util/tools.js');
var header = {
    init: function () {
        this.bindEvent();
        
    },
    //搜索字回调
    onLoad: function () {
        var keyword = _tools.getURLParam('keyword');  
        if (keyword) {
            $('#search-input').val()(keyword);
        }
    },
    //关键字提交 
    bindEvent: function () {
        var _this = this;
        $('body').on('click','#search-btn',function () {
            _this.searchSubmit(); 
        });
    },
    //搜索的提交
    searchSubmit: function () {
        var keyword = $.trim($('#search-input').val());
        if (keyword) {
            window.location.href = './list.html?keyword='+keyword;
        } else {
            //key为空则直接返回首页
            _tools.goHome();
        }
    }
};
header.init();