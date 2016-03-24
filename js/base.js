/**
 * Created by Administrator on 2016/1/7.
 */
//第三屏设置样式
$(function () {
    var colorArr = ["red", "blue", "green", "orange", "purple", "cyan", "yellow", "pink"];
    $(".web_technology ul li").each(function (index, item) {
        $(item).css("color", colorArr[index]);
    });
    $(".profession").fadeIn(1000);
    $("#fullPage-nav li a").on("click", function () {
        $(this).addClass("active").parent().siblings().children("a").removeClass("active");
    });
    $(window).scroll(function(){
        console.log($("body,html").scrollTop())
    })

    console.log($(window).height())
})


