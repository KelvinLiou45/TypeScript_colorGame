"use strict";
var answerID = document.getElementsByClassName('answerID');
var squares = document.getElementsByClassName('squares_square');
var reflashID = document.getElementsByClassName('reflashID');
var squares_bgColor;
setTopic();
reflashID[0].addEventListener('click', function () {
    setTopic();
});
//設定題目
function setTopic() {
    //設置格子的顏色
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.opacity = '1';
        var color = void 0;
        var r = void 0, g = void 0, b = void 0;
        r = getRandomNum(255);
        g = getRandomNum(255);
        b = getRandomNum(255);
        color = "rgb(" + r + "," + g + "," + b + ")";
        squares[i].style.background = color;
        console.log(squares[i].style.background);
    }
    //設定答案至answerID
    var answer = getRandomNum(5);
    answerID[0].textContent = squares[answer].style.background;
    var _loop_1 = function (i) {
        squares[i].addEventListener('click', function () {
            console.log(squares[i].style.background);
            if (squares[i].style.background == answerID[0].textContent) {
                console.log('Yes u are right');
                finishGame(answerID[0].textContent);
            }
            else {
                console.log('No');
                squares[i].style.opacity = '0';
            }
        });
    };
    //設置按鈕事件 判斷是否正確
    for (var i = 0; i < squares.length; i++) {
        _loop_1(i);
    }
}
//正確顏色填滿全部squares
function finishGame(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.opacity = '1';
        squares[i].style.background = color;
    }
}
//隨機變數
function getRandomNum(num) {
    var result = 0;
    result = Math.floor(Math.random() * (num + 1));
    return result;
}
