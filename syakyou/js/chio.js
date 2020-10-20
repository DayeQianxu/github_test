$(function () {
    $(".hum_menu").on('click', function () {
        $("header").toggleClass("open");
    });
});
// ハンバーガーを押すことで、ulに何かしらのクラス名をつければいいんですかね

function area(bottom, height) {
    console.log(bottom * height / 2);
}

area(4, 5);

$(function () {
    $("#enhance").on('click', function () {
        $("img").css('width', '600px');
    });
    $("#change_image").on('click', function () {
        $("img").attr('src', 'image/photo_01.png');
    });
    $("#English").on('click', function () {
        $("#one").text("headline");
        $("#two").text("flex");
        $("#three").text("centering");
        $("#four").text("works");
    });
    $("#Japanese").on('click', function () {
        $("#one").text("見出しのエリア");
        $("#two").text("flexのエリア");
        $("#three").text("センタリングエリア");
        $("#four").text("制作実績");
    });
    $("#add_box").on('click', function () {
        $(".flex_area").append('<div class="add_area"><h2>flexを使って左から詰めていく</h2><p>ここにflexに関してのテキストが入りますここにflexに関してのテキストが入りますここにflexに関してのテキストが入りますここにflexに関してのテキストが入りますここにflexに関してのテキストが入りますここにflexに関してのテキストが入りますここにflexに関してのテキストが入りますここにflexに関してのテキストが入ります</p></div>');
    });
});