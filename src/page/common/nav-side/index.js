/*
 * @Author: 张培培
 * @Github: https: //github.com/ZiMingDaYou
 * @Date: 2019-01-19 15:51:19
 * @LastEditors: 张培培
 * @LastEditTime: 2019-01-21 20:57:31
 */
require('./index.css');
var _tools = require('util/tools.js');
var htmltemplate = require("./index.string");
var navSide = {
    option: {
        name: '',
        navList: [
            { name : 'user-center' , desc : '个人中心' , href : './user-center.html'},
            { name : 'order-list' , desc : '我的订单' , href : './oder-list.html'},
            { name : 'pass-update' , desc : '修改密码' , href : './pass-update.html'},
            { name: 'about', desc: '关于我', href: 'https: //github.com/ZiMingDaYou'},
        ]
    },
    init: function (option) {
        //合并选项
        $.extend(this.option, option);
        this.renderNav();
    },  
//渲染导航菜单
    renderNav: function () {
        //计算active数据
        for (var i = 0, iLength = this.option.navList.length; i < iLength; i++){
            if (this.option.navList[i].name === this.option.name) {
                this.option.navList[i].isActive =true;
            }
        };
        //渲染list数据
        var navHtml = _tools.renderHtml(htmltemplate, {
            navList: this.option.navList
        });
        //将html放入容器
        $('.nav-side').html(navHtml);
    }
};
module.exports = navSide;