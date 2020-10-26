
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors() {
    var colors = []
    for (var i = 10; i < 99; i++) {
        var color = getColor()
        colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.

function earColor(color, code) {
    $('.right_ear, .left_ear').css('background', '#' + color)  //This changes the color of the cat
    $('#earbadge').html('code: ' + code) //This updates text of the badge next to the slider
    $('#dnaear').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function headColor(color, code) {
    $('.head').css('background', '#' + color)  //This changes the color of the cat
    $('#headbadge').html('code: ' + code) //This updates text of the badge next to the slider
    $('#dnahead').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function bodyTopColor(color, code) {
    $('.catbod_top').css('background', '#' + color)  //This changes the color of the cat
    $('#bodytopbadge').html('code: ' + code) //This updates text of the badge next to the slider
    $('#dnabodytop').html(code); //This updates the body color part of the DNA that is displayed below the cat
}

function bodyBottomColor(color, code) {
    $('.catbod_bottom').css('background', '#' + color)  //This changes the color of the cat
    $('#bodybottombadge').html('code: ' + code) //This updates text of the badge next to the slider
    $('#dnabodybottom').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function bellyColor(color, code) {
    $('.belly').css('background', '#' + color)  //This changes the color of the cat
    $('#bellybadge').html('code: ' + code) //This updates text of the badge next to the slider
    $('#dnabelly').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function tailBaseColor(color, code) {
    $('.tail1').css('border-bottom-color', '#' + color)  //This changes the color of the cat
    $('#tailbasebadge').html('code: ' + code) //This updates text of the badge next to the slider
    $('#dnatailbase').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function tailStripeColor(color, code) {
    $('.tail2').css('border-bottom-color', '#' + color)  //This changes the color of the cat
    $('#tailstripebadge').html('code: ' + code) //This updates text of the badge next to the slider
    $('#dnatailstripe').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

//###################################################
//functions to change the face of our kitty
//###################################################
const faceStyles = ["normal", "worried", "suspicious", "sad", "meowing",];

//mouth
const mouthNormal = {"margin-top": "0px", "transform":"translateX(153%) translateY(-82%) rotate(90deg)"};
const mouthSuspicious = {"margin-top": "0px", "transform":"translateX(153%) translateY(-82%) rotate(45deg)"};
const mouthMeowing = {"margin-top": "5px"}


//ears
const rearNormal = {"transform":"translateX(25%)"};
const learNormal = {"transform":"translateX(-25%)"};
const earsNormal = {"transform":"translateX(150%) translateY(110%)"};

const earsWorried = {"transform":"translateX(150%) translateY(140%)"};
const learWorried = {"transform":"translateX(-120%) rotate(-45deg)"};
const rearWorried = {"transform":"translateX(135%) rotate(45deg)"};

const rearSuspicious = {"transform":"translateX(135%) rotate(45deg)"};
const learSuspicious = {"transform":"translateX(-25%) translateY(-25px)"};

//eyes
const reyeNormal = { 'border-radius': '100% 0% 100% 0%', 'transform': 'rotate(10deg)' };
const leyeNormal = { 'border-radius': '0% 100% 0% 100%', 'transform': 'rotate(-10deg)' };
const lirisNormal = { "width": "10px", "height":"30","transform": "translateX(190%) translateY(34%) rotate(10deg)" };
const ririsNormal = { "width": "10px", "height":"30","transform": "translateX(150%) translateY(45%) rotate(-10deg)" };
const eyeShutNormal = {"display":"none"};

const reyeWorried = { "transform": "rotate(45deg)", "border-radius": "100% 50% 100% 50%" }
const leyeWorried = { "transform": "rotate(-45deg)", "border-radius": "50% 100% 50% 100%" }
const lirisWorried = { "transform": "translateX(45%) translateY(34%) rotate(45deg)", "width": "25px", "height":"30" }
const ririsWorried = { "transform": "translateX(45%) translateY(45%) rotate(-45deg)", "width": "25px", "height":"30" }

const reyeSuspicious = { 'border-radius': '150% 0% 150% 0%' }

const lirisSad = {"transform":"translateX(12%) translateY(12%) rotate(45deg)", "height":"40px","width":"40px"};
const ririsSad = {"transform":"translateX(15%) translateY(14%)  rotate(-45deg)", "height":"40px","width":"40px"};
const eyeShutSad = {"display":"block"};

//this equation is run in catSettings.js when the document loads and when the bar changes
function faceVariation(num) {
    if(num.length==1){
        $('#dnaface').html("0" + num)
    }
    else{$('#dnaface').html(num)}  //this sets the dna number
    face(faceStyles[num - 1]); //this changes the face according to the equations below
    $('#facecatribute').val(num); //this sets the value of the selection bar
    $('#facebadge').html(faceStyles[num - 1]); //this changes the bage id
}
function face(style) {
    earsCatribute(style);
    eyesCatribute(style);
    mouthCatribute(style);
    whiskersCatribute(style);
}

function earsCatribute(style) {
    switch (style) {
        case "normal":
            $('.ears').css(earsNormal)
            $('.left_ear').css(learNormal)
            $('.right_ear').css(rearNormal)
            break
        case "sad":
        case "worried":
            $('.ears').css(earsWorried)
            $('.left_ear').css(learWorried)
            $('.right_ear').css(rearWorried)
            break
        case "suspicious":
            $('.ears').css(earsWorried)
            $('.left_ear').css(learSuspicious)
            $('.right_ear').css(rearSuspicious)
            break
        case "sad":
            $('.ears').css(earsWorried)
            $('.left_ear').css(learWorried)
            $('.right_ear').css(rearWorried)
            break
        case "meowing":
            $('.ears').css(earsNormal)
            $('.left_ear').css(learNormal)
            $('.right_ear').css(rearNormal)
            break
    }
}

function eyesCatribute(style) {
    switch (style) {
        case "normal":
            $('.reye').css(reyeNormal)
            $('.leye').css(leyeNormal)
            $('.liris').css(lirisNormal)
            $('.riris').css(ririsNormal)
            $('.rshut, .lshut').css(eyeShutNormal)
            break
        case "worried":
            $('.reye').css(reyeWorried)
            $('.leye').css(leyeWorried)
            $('.liris').css(lirisWorried)
            $('.riris').css(ririsWorried)
            $('.rshut, .lshut').css(eyeShutNormal)
            break
        case "suspicious":
            $('.reye').css(reyeSuspicious)
            $('.leye').css(leyeWorried)
            $('.liris').css(lirisWorried)
            $('.riris').css(ririsWorried)
            $('.rshut, .lshut').css(eyeShutNormal)
            break
        case "sad":
            $('.reye').css(reyeWorried)
            $('.leye').css(leyeWorried)
            $('.liris').css(lirisSad)
            $('.riris').css(ririsSad)
            $('.rshut, .lshut').css(eyeShutSad)
            break
        case "meowing":
            $('.reye').css(reyeNormal)
            $('.leye').css(leyeNormal)
            $('.liris').css(lirisNormal)
            $('.riris').css(ririsNormal)
            $('.rshut, .lshut').css(eyeShutNormal)
    }
}

function mouthCatribute(style) {
    switch (style) {
        case "normal":
            $('.mouth').css(mouthNormal)
            $('.mouth').text("{")
            $('.bubble').css("display", "none");
            break
        case "worried":
            $('.mouth').css(mouthNormal)
            $('.mouth').text("{")
            $('.bubble').css("display", "none");
            break
        case "suspicious":
            $('.mouth').css(mouthSuspicious)
            $('.mouth').text("{")
            $('.bubble').css("display", "none");
            break
        case "sad":
            $('.mouth').css(mouthNormal)
            $('.mouth').text("{")
            $('.bubble').css("display", "none");
            break
        case "meowing":
            $('.mouth').css(mouthMeowing)
            $('.mouth').text("{}")
            $('.bubble').css({
                "font-family": "sans-serif",
                "font-size": "14px",
                "line-height": "24px",
                "width": "150px",
                "background": "#fff",
                "border-radius": "40px",
                "padding": "24px",
                "text-align": "center",
                "color": "#000",
                "transform": "translate(160%, 210%)",
                "display": "block"})
                $('.bubble').append('<style>.bubble-bottom-left:before{content: ""; width:0px;height: 0px;border-left: 24px solid #fff;border-right: 12px solid transparent;border-top: 12px solid #fff;border-bottom: 20px solid transparent;left: 32px;bottom: -24px;}</style>');
                break
    }
}

function whiskersCatribute(style) {
    switch (style) {
        case "normal":
            moveWhiskers("up")
            break
        case "worried":
            moveWhiskers("middle")
            break
        case "suspicious":
            moveWhiskers("middle")
            break
        case "sad":
            moveWhiskers("down")

    }
}

function moveWhiskers(style) {
    switch (style) {
        case "up":
            $('#whisker1').attr("y1", 60);
            $('#whisker2').attr("y1", 80);
            $('#whisker3').attr("y1", 100);
            $('#whisker4').attr("y2", 60);
            $('#whisker5').attr("y2", 80);
            $('#whisker6').attr("y2", 100);
            break
        case "middle":
            $('#whisker1').attr("y1", 80);
            $('#whisker2').attr("y1", 100);
            $('#whisker3').attr("y1", 120);
            $('#whisker4').attr("y2", 80);
            $('#whisker5').attr("y2", 100);
            $('#whisker6').attr("y2", 120);
            break
        case "down":
            $('#whisker1').attr("y1", 100);
            $('#whisker2').attr("y1", 120);
            $('#whisker3').attr("y1", 140);
            $('#whisker4').attr("y2", 100);
            $('#whisker5').attr("y2", 120);
            $('#whisker6').attr("y2", 140);
            break
    }
}

//We change the booty below
const bootyStyle = ["skinny", "slim", "fit", "slouch", "fatty"];

function bootySize(num){
    if(num.length==1){
        $('#dnabooty').html("0" + num)
    }
    else{$('#dnabooty').html(num)}
    $('#bootycatribute').val(num);
    $('#bootybadge').html(bootyStyle[num-1]);
    booty(bootyStyle[num-1]);
}

function booty(style){
    switch(style){
        case "skinny":
            $('.catbod_bottom').css({'transform':'translateX(46%)', 'width':'220px'});
            $('.belly').css({"transform":"translateX(27%)"})
            $('.tail1, .tail2').css({"transform":"translateY(133%) translateX(40%) rotate(20deg)"})
            if($(".wagger")[0]){
                $('.tail1, .tail2').removeClass("skinnyWaggingTail slimWaggingTail waggingTail slouchWaggingTail fattyWaggingTail");
                setAnimation(2);}
            break
        case "slim":
            $('.catbod_bottom').css({'transform':'translateX(29%)', 'width':'250px'});
            $('.belly').css({"transform":"translateX(46%)"})
            $('.tail1, .tail2').css({"transform": "translateY(128%) translateX(31%) rotate(20deg)"})
            if($(".wagger")[0]){
                $('.tail1, .tail2').removeClass("skinnyWaggingTail slimWaggingTail waggingTail slouchWaggingTail fattyWaggingTail");
                setAnimation(2);}
            break
        case "fit":
            $('.catbod_bottom').css({
                "height": "300px",
                "width": "300px",
                "border-radius": "50% 30% 30% 50%",
                "background-color": "rgb(170, 114, 9)",
                "position": "absolute",
                "transform":"translateX(15%)"});
            $('.belly').css({           
                "height":"185px",
                "width":"155px",
                "background-color": "white",
                "border-radius": "80%",
                "transform": "translateX(68%) translateY(35%)"})
            $('.tail1, .tail2').css({
                "transform": "translateY(128%) translateX(25%) rotate(20deg)"})
                if($(".wagger")[0]){
                    $('.tail1, .tail2').removeClass("skinnyWaggingTail slimWaggingTail waggingTail slouchWaggingTail fattyWaggingTail");
                    setAnimation(2);}
            break
        case "slouch":
            $('.catbod_bottom').css({
                "height": "300px",
                "width": "350px",
                "border-radius": "50% 30% 30% 50%",
                "background-color": "rgb(170, 114, 9)",
                "position": "absolute",
            "transform":"translateX(0)"});
            $('.belly').css({           
                "height":"185px",
                "width":"155px",
                "background-color": "white",
                "border-radius": "80%",
                "transform": "translateX(93%) translateY(35%)"})
            $('.tail1, .tail2').css({
                "transform": "translateY(125%) translateX(10%) rotate(20deg)"})
                if($(".wagger")[0]){
                    $('.tail1, .tail2').removeClass("skinnyWaggingTail slimWaggingTail waggingTail slouchWaggingTail fattyWaggingTail");
                    setAnimation(2);}
            break
        case "fatty":
            $('.catbod_top').css({
                "width":"250px",
                "transform":"translateX(38%) translateY(-33%)"
            })
            $('.catbod_bottom').css({
                "height": "300px",
                "width": "400px",
                "border-radius": "50%",
                "background-color": "rgb(170, 114, 9)",
                "position": "absolute",
                "transform":"translateX(3%)"});
            $('.belly').css({           
                "height":"185px",
                "width":"155px",
                "background-color": "white",
                "border-radius": "80%",
                "transform": "translateX(86%) translateY(35%)"})
            $('.tail1, .tail2').css({
                "transform": "translateY(125%) translateX(15%) rotate(20deg)"})
                if($(".wagger")[0]){
                    $('.tail1, .tail2').removeClass("skinnyWaggingTail slimWaggingTail waggingTail slouchWaggingTail fattyWaggingTail");
                    setAnimation(2);}
            break
    }
}


const animations = ["none", "tailShake", "headTilt",]

function setAnimation(num){
    if(num.length==1){
        $('#dnaanimation').html("0" + num)
    }
    else{$('#dnaanimation').html(num)}
    animate(animations[num-1]);
    $('#animationid').val(num);
    $('#animationbadge').html(animations[num-1]);
}

function animate(style){
    switch(style){
        case "none":
            $('.tail1, .tail2').removeClass("skinnyWaggingTail slimWaggingTail waggingTail slouchWaggingTail fattyWaggingTail");
            $('.head').removeClass("tiltingHead");
            break
        case "tailShake":
            if($('#bootycatribute').val() ==1){
                $('.tail1, .tail2').addClass("skinnyWaggingTail wagger");
            } 
            else if($('#bootycatribute').val() ==2){
                $('.tail1, .tail2').addClass("slimWaggingTail wagger");
            } 
            else if($('#bootycatribute').val() ==3){
                $('.tail1, .tail2').addClass("waggingTail wagger");
            } 
            else if($('#bootycatribute').val() ==4){
                $('.tail1, .tail2').addClass("slouchWaggingTail wagger");
            } 
            else if($('#bootycatribute').val() ==5){
                console.log($('#bootycatribute').val());
                $('.tail1, .tail2').addClass("fattyWaggingTail wagger");
            }        
            $('.head').removeClass("tiltingHead");
            break
        case "headTilt":
        $('.head').addClass("tiltingHead");    
        $('.tail1, .tail2').removeClass("skinnyWaggingTail slimWaggingTail waggingTail slouchWaggingTail fattyWaggingTail");
        break
    }
}

