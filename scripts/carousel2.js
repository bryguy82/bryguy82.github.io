
$(function () {

    var box1 = $(".temple-info1");
    var box2 = $(".temple-info2");
    var box3 = $(".temple-info3");
    var box4 = $(".temple-info4");

    function left1() {
        box1.css("display", "none");
        box4.addClass("show-temple");        
    }

    $(".click-left1").click(left1);

    function left4() {
        box4.removeClass("show-temple");
        box3.addClass("show-temple");
    }

    $(".click-left4").click(left4);

    function left3() {
        box3.removeClass("show-temple");
        box2.addClass("show-temple");
    }

    $(".click-left3").click(left3);

    function left2() {
        box2.removeClass("show-temple");
        box1.css("display", "grid");
    }

    $(".click-left2").click(left2);
/*-------------------------------------------*/

    function right1() {
        box1.css("display", "none");
        box2.addClass("show-temple");        
    }

    $(".click-right1").click(right1);

    function right2() {
        box2.removeClass("show-temple");
        box3.addClass("show-temple");
    }

    $(".click-right2").click(right2);

    function right3() {
        box3.removeClass("show-temple");
        box4.addClass("show-temple");
    }

    $(".click-right3").click(right3);

    function right4() {
        box4.removeClass("show-temple");
        box1.css("display", "grid");
    }

    $(".click-right4").click(right4);

})