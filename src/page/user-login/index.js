/*
 * @Author: 张培培
 * @Github: https: //github.com/ZiMingDaYou
 * @Date: 2019-01-15 14:20:12
 * @LastEditors: 张培培
 * @LastEditTime: 2019-02-13 00:13:40
 
 */
require('./index.css');
require('page/common/nav-simple/index.js');
var _tools = require('util/tools.js');
var _user = require('service/user-service.js');


//表单的错误提示
    var formErr = {
        show : function(errMsg){
            $('.err-item').show().find('.errmsg').text(errMsg);
        },
        hide: function() {
            $('.err-item').hide().find('.errmsg').text('');
        },
    }
//page逻辑部分
var page = {
    init : function(){
        console.log('start');
        this.bindEvent();
    },
    bindEvent : function(){
        var _this = this;
        //点击登录按钮
        $('#submit').click(function(){
            _this.submit();
        })
    },
    submit : function(){
        var formData = {
            username : $.trim($('#username').val()),
            password : $.trim($('#password').val()),
        }
        console.log('开始验证表单');
        validateInfo = this.validateResult(formData);
        if(validateInfo.status){
            _user.login(formData,function(res){
                window.location.href = _tools.getURLParam('redirect')||'./index.html';
            },function(errMsg){
                 formErr.show(errMsg);
            })
        }
        else{
            formErr.show(validateInfo.msg);
        }
    },
    validateResult : function(formData){
        var result = {
            status : false,
            msg    : ''
        };
        
        if (!_tools.validate(formData.username,'require')) {
            result.msg = '用户名不能为空';
            //console.log($.trim($('#username').val().length === 0));
            return result;
        };
        if (!_tools.validate(formData.password, 'require')) {
            result.msg = '密码不能为空';
            //console.log($.trim($('#username').val().length === 0));
            return result;
        }
        result.status = true;
        result.msg='验证成功';
        return result;
    }
};
$(function(){
    page.init();
})