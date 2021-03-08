var slider = $(".range")[0];
$(".value")[0].innerHTML = "$ " + slider.value + ",00";;

slider.oninput = function () {
    $(".value")[0].innerHTML = "$ " + this.value + ",00";
}