// jQueryプラグイン

/*console.log("Hello World");

var position = "Presidemt";
console.log(position);

var num = 5
console.log(num + 5);
console.log(num - 2);
console.log(num * 3);
console.log(num / 1);
console.log(num % 2);

var num2 = "12";
console.log(num2 + 3);

var count;
count = 0;
console.log(count);

console.log(count += 1);
console.log(count -= 1);
console.log(count *= 1);

var click = 0;
console.log(++click);

var click2 = 0;
console.log(click2++);
console.log(click2--);
console.log(click2);
//clickと入力されてる時の数字が画面に出る

var str1;
var str2;

str1 = "chio"
str2 = "ono"

str3 = str1 + str2
console.log(str3);

str3 = str2 + str1;
console.log(str3)

str2 = str1;
str3 = str1 + str2;
console.log(str3);

var surname = "Suna";
var name1 = "Baco";

console.log(surname + name1);

var name2 = "Ba";
console.log(surname + name2);

surname = "Tori";
console.log(surname + name1);

console.log("沖縄、八代、江別、高松".split("、"));
console.log("香川県高松市".split("県"));

var regions = ["沖縄", "八代", "江別", "高松"];
console.log(regions);
console.log(regions[0]);

regions[2] = "東京";
console.log(regions);

regions = {
    "沖縄": "コザ",
    "熊本": "八代",
    "北海道": "江別",
    "香川": "高松"
};

console.log(regions);
console.log(regions["香川"]);
regions["北海道"] = "東京";
console.log(regions);
//辞書型配列

var items = {
    "ケーキ": 500,
    "ティー": 300,
    "アイス": 300
};

sum = items.ケーキ + items.ティー;
console.log(sum)*/

// var x = 1;
// var y = 5;
// var z = "1";

// console.log(x == y);
// console.log(x < y);
// console.log(x > y);
// console.log(x != y);
// console.log(x == z);
// console.log(x === z);

// ==  等しいか
// === 厳密に等しいか 

// var wakeupTime = 10;

// if (wakeupTime > 11) {
//     console.log("寝坊");
// } else if (wakeupTime > 9) {
//     console.log("間に合った");
// } else {
//     console.log("早起き");
// };

// var limit = 10;
// var getup = 8;

// if (limit < getup) {
//     console.log("遅刻です");
// } else if (limit == getup) {
//     console.log("ギリギリセーフ！");
// } else {
//     console.log("よくがんばりました");
// };

// for (var i = 10; i > 0; i--) {
//     console.log(i);
// }

// function greet(name) {
//     message = "aさん" + name;
//     return (message);
// }

// console.log(greet("Hello"));

// function sum(x) {
//     total = x + 10;
//     return total;
// }

// console.log(sum(3));

// var text_node = document.getElementById("text");
// text_node.textContent = "書き換えた";
// console.log(text_node.textContent);

// htmlのスクリプトとの連携をBodyのさいごにする


// var btn_node = document.getElementById("change");
// btn_node.addEventListener("click", changeText);

// function changeText() {
//     var text_node = document.getElementById("text");
//     text_node.textContent = "ボタンがクリックされた!";
// }

$(function () {
    $("#text").text("ノードの更新");
    $("#toggle_btn").on('click', function () {
        $("p").toggle();
    });
    $("#toggle_btn").on('click', function () {
        $("header").toggle();
    });
    $("#color_btn").on('click', function () {
        $("#color").css('color', 'red');
    });
    $("#color_btn").on('click', function () {
        $("#color").css('background-color', 'blue');
    });
    $("#add_class").on('click', function () {
        $("#text").toggleClass("sunabaco");
    });
    $("#change_image").on('click', function () {
        $("img").attr('src', '../syakyou/image/2331.jpg');
    });
});