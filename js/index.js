function report() {
    alert(">> Did you really think you could REPORT me!? \n >> ... \n >> ha, ha, ha.");
}

$(function () {
    // Change the background image depending on the local time of the user.

    var dt = new Date;
    var time = dt.getHours();
    var bg = "";
    var text = false

    if (time >= 6 && time <= 9) {
        console.log("Morning");
        bg = "1";
    } else if (time >= 9 && time <= 12) {
        console.log("Late Morning");
        bg = "2";
    } else if (time >= 12 && time <= 15) {
        console.log("Afternoon");
        bg = "3";
    } else if (time >= 15 && time <= 18) {
        console.log("Late Afternoon");
        bg = "4";
    } else if (time >= 18 && time <= 21) {
        console.log("Evening");
        bg = "5";
    } else if (time >= 21 && time <= 24) {
        console.log("Late Evening");
        bg = "6";
    } else if (time >= 24 && time <= 3) {
        console.log("Night");
        bg = "7";
        text = true;
    } else {
        console.log("Late Night");
        bg = "8";
        text = true;
    }

    // Change the backgrouund image.
    $('body').css({
        backgroundImage: 'url(images/backgrounds/bg-' + bg + '.png)'
    });

    // Change the color of the text to white if the background is a dark image.
    if (text) {
        $('.dynamic-text').css({
            color: '#fff'
        });
    }
});