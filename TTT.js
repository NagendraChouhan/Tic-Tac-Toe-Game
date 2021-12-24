var row_btn = document.getElementsByClassName("row_btn");
var ox_text = document.getElementsByClassName("ox");
var o_text = document.getElementsByClassName("o");
var x_text = document.getElementsByClassName("x");
var result = document.getElementById("result");
var star_btn = document.getElementById("star_btn");
var t = 1;
var o_score = 0;
var x_score = 0;
var click_audio = new Audio('audio/mixkit-fast-double-click-on-mouse-275.wav');
var same_audio = new Audio('audio/mixkit-sci-fi-click-900.wav');


ox_text[0].style.boxShadow = "1px 2px 2px mediumslateblue";
class Row_btn_class {
    constructor() {
    }
    set_method(i, values, at) {
        t = at;
        row_btn[i].innerHTML = values;
        row_btn[i].style.cursor = "auto";
        row_btn[i].disabled = true;
        row_btn[i].style.color = "black";
    }

    disabled_method() {
        for (var i = 0; i < 9; i++) {
            row_btn[i].style.cursor = "auto";
            row_btn[i].disabled = true;
            row_btn[i].style.opacity = "0.5";
        }
        ox_text[0].style.boxShadow = "none";
        ox_text[1].style.boxShadow = "none";
    }

    set_color_method(x, y, z) {
        row_btn[x].style.backgroundColor = "#00FFFD";
        row_btn[y].style.backgroundColor = "#00FFFD";
        row_btn[z].style.backgroundColor = "#00FFFD";
        row_btn[x].style.opacity = "1";
        row_btn[y].style.opacity = "1";
        row_btn[z].style.opacity = "1";
        row_btn[x].style.boxShadow = "5px 5px 3px black";
        row_btn[y].style.boxShadow = "5px 5px 3px black";
        row_btn[z].style.boxShadow = "5px 5px 3px black";
    }
}
function star() {
    click_audio.play();
    for (var x = 0; x < 9; x++) {
        row_btn[x].innerHTML = "&nbsp;";
        row_btn[x].disabled = false;
        row_btn[x].style.cursor = "pointer";
        row_btn[x].style.opacity = "1";
        row_btn[x].style.backgroundColor = "gainsboro";
        row_btn[x].style.boxShadow = "none";
    }
    result.style.display = "none";
    ox_text[t - 1].style.boxShadow = "1px 2px 2px mediumslateblue";
}
function btnValueFun(i) {
    click_audio.play();
    var obj = new Row_btn_class();
    if (t == 1) {
        obj.set_method(i, "O", 2);
        ox_text[0].style.boxShadow = "none";
        ox_text[1].style.boxShadow = "1px 2px 2px mediumslateblue";
    }
    else {
        obj.set_method(i, "X", 1);
        ox_text[0].style.boxShadow = "1px 2px 2px mediumslateblue";
        ox_text[1].style.boxShadow = "none";
    }


    if ((row_btn[0].innerHTML == row_btn[1].innerHTML && row_btn[1].innerHTML == row_btn[2].innerHTML && row_btn[0].innerHTML != "&nbsp;") ||
        (row_btn[3].innerHTML == row_btn[4].innerHTML && row_btn[4].innerHTML == row_btn[5].innerHTML && row_btn[3].innerHTML != "&nbsp;") ||
        (row_btn[6].innerHTML == row_btn[7].innerHTML && row_btn[7].innerHTML == row_btn[8].innerHTML && row_btn[6].innerHTML != "&nbsp;") ||

        (row_btn[0].innerHTML == row_btn[3].innerHTML && row_btn[3].innerHTML == row_btn[6].innerHTML && row_btn[0].innerHTML != "&nbsp;") ||
        (row_btn[1].innerHTML == row_btn[4].innerHTML && row_btn[4].innerHTML == row_btn[7].innerHTML && row_btn[1].innerHTML != "&nbsp;") ||
        (row_btn[2].innerHTML == row_btn[5].innerHTML && row_btn[5].innerHTML == row_btn[8].innerHTML && row_btn[2].innerHTML != "&nbsp;") ||

        (row_btn[0].innerHTML == row_btn[4].innerHTML && row_btn[4].innerHTML == row_btn[8].innerHTML && row_btn[0].innerHTML != "&nbsp;") ||
        (row_btn[2].innerHTML == row_btn[4].innerHTML && row_btn[4].innerHTML == row_btn[6].innerHTML && row_btn[2].innerHTML != "&nbsp;")
    ) {

        if (t == 2) {
            o_score++;
            result.style.display = "inline-block";
            result.innerText = "O is Win";
            ox_text[0].value = o_score;
            obj.disabled_method();
            same_audio.play();
        }
        else {
            x_score++;
            result.style.display = "inline-block";
            result.innerText = "X is Win";
            ox_text[1].value = x_score;
            obj.disabled_method();
            same_audio.play();
        }
        end:
        {
            for (var x = 0; x <= 6; x += 3) {
                if (row_btn[x].innerHTML == row_btn[x + 1].innerHTML && row_btn[x + 1].innerHTML == row_btn[x + 2].innerHTML && row_btn[x].innerHTML != "&nbsp;") {
                    obj.set_color_method(x, x + 1, x + 2);
                    break end;
                }
            }
            for (var x = 0; x < 3; x++) {
                if (row_btn[x].innerHTML == row_btn[x + 3].innerHTML && row_btn[x + 3].innerHTML == row_btn[x + 6].innerHTML && row_btn[x].innerHTML != "&nbsp;") {
                    obj.set_color_method(x, x + 3, x + 6);
                    break end;
                }
            }
            for (var x = 2; x >= 0; x -= 2) {
                if (row_btn[x].innerHTML == row_btn[4].innerHTML && row_btn[4].innerHTML == row_btn[8 - x].innerHTML && row_btn[x].innerHTML != "&nbsp;") {
                    obj.set_color_method(x, 4, 8 - x);
                    break end;
                }
            }
        }
    }
    else
        if (row_btn[0].innerHTML != "&nbsp;" && row_btn[1].innerHTML != "&nbsp;" && row_btn[2].innerHTML != "&nbsp;" &&
            row_btn[3].innerHTML != "&nbsp;" && row_btn[4].innerHTML != "&nbsp;" && row_btn[5].innerHTML != "&nbsp;" &&
            row_btn[6].innerHTML != "&nbsp;" && row_btn[7].innerHTML != "&nbsp;" && row_btn[8].innerHTML != "&nbsp;") {
            result.style.display = "inline-block";
            result.innerText = "Match is Draw";
            ox_text[0].style.boxShadow = "none";
            ox_text[1].style.boxShadow = "none";
        }
}