
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.

function earColor(color,code) {
    $('.right_ear, .left_ear').css('background', '#' + color)  //This changes the color of the cat
    $('#earbadge').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaear').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function headColor(color,code) {
    $('.head').css('background', '#' + color)  //This changes the color of the cat
    $('#headbadge').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnahead').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function bodyTopColor(color,code) {
    $('.catbod_top').css('background', '#' + color)  //This changes the color of the cat
    $('#bodytopbadge').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabodytop').html(code); //This updates the body color part of the DNA that is displayed below the cat
}

function bodyBottomColor(color,code) {
    $('.catbod_bottom').css('background', '#' + color)  //This changes the color of the cat
    $('#bodybottombadge').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabodybottom').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function bellyColor(color,code) {
    $('.belly').css('background', '#' + color)  //This changes the color of the cat
    $('#bellybadge').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabelly').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function tailBaseColor(color,code) {
    $('.tail1').css('border-bottom-color', '#' + color)  //This changes the color of the cat
    $('#tailbasebadge').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnatailbase').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function tailStripeColor(color,code) {
    $('.tail2').css('border-bottom-color', '#' + color)  //This changes the color of the cat
    $('#tailstripebadge').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnatailstripe').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('#dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Basic')
            break
    }
}

function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break
    }
}

async function normalEyes() {
    await $('.cat__eye').find('span').css('border', 'none')
}

async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}
