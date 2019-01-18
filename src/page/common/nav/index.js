/*
 * @Author: 张培培
 * @Github: https: //github.com/ZiMingDaYou
 * @Date: 2019-01-18 12:46:51
 * @LastEditors: 张培培
 * @LastEditTime: 2019-01-18 15:38:17
 */
require('./index.css');
var _tools = require('util/tools.js');
var _user = require('service/user-service.js');
var _cart = require('service/cart-service.js');
var nav = {
    init: function () {
        this.bindEvent(),
        this.loadCartCount(),
        this.loadUserInfo()
        return this;
     },
    /*点击事件 */
    bindEvent: function () {
        //登录点击事件
        $('.js-login').click(function () {
            _tools.doLogin();
        });
        //注册点击事件
        $('.js-register').click(function () {
            window.location.href = './register.html';
        });
        //退出点击事件
        $('.js-logout').click(function () {
            _user.logout(function (res) { 
                window.location.reload;
            }, function (errMsg) { 
                    _tools.errorTips(errMsg);
            });
        });
     },
    /*加载用户信息 */
    loadUserInfo: function () {
        _user.checkLogin(function (res) {
            $('.user.not-login').hide().siblings('.user.login').show().find('.username').text(res.username);
        }, function (errMsg) {
           //什么也不做
        });
     },
    /*获得购物车的数量 */
    loadCartCount: function () {
        _user.getCartCount(function (res) {
            $('.nav .cart-count').text(res || 0);
        }, function (errMsg) {
            $('.nav .cart-count').text(res || 0);
        });
    }
};
module.exports = nav.init();