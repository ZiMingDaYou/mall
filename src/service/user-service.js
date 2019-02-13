/*
 * @Author: 张培培
 * @Github: https: //github.com/ZiMingDaYou
 * @Date: 2019-01-18 14:26:04
 * @LastEditors: 张培培
 * @LastEditTime: 2019-02-13 13:51:54
 */
var _tools = require('util/tools.js');

var _user = {
    //登录接口
    login: function(userInfo,resolve, reject) {
        _tools.request({
            url: _tools.getServerURL('/user/login.do'),
            data:userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    //检查登录状态
    checkLogin : function (resolve, reject) {
        _tools.request({
            url: _tools.getServerURL('/user/get_user_info.do'),
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    //登出
    logout: function (resolve, reject) {
        _tools.request({
            url: _tools.getServerURL('/user/logout.do'),
            method: 'POST',
            success: resolve,
            error: reject
        });
    } 
}
module.exports = _user;
