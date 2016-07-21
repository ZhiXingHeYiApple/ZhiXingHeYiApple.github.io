$(document).ready(function () {
  var sidebarTop = $('.header-inner').height() + 10;

  $('#sidebar').css({ 'margin-top': sidebarTop }).show();


});

//两种写法:$(function(){}) 和$(document).ready(function(){})
//这两个方法的效果都是一样的，都是在dom文档树加载完之后执行一个函数
//$(function(){
//  $("body").append("<div id='main_bg' style='position: absolute; left: 0px; top: 0px'/>");
//  $("#main_bg").append("<img src='/images/cover_bg.jpg' id='bigpic'>");
//  cover();
//  $(window).resize(function(){ //浏览器窗口变化
//    cover();
//  });
//});
//
//function cover(){
//  var win_width = $(window).width();
//  var win_height = $(window).height();
//  $("#bigpic").attr({width:win_width,height:win_height});
//}
