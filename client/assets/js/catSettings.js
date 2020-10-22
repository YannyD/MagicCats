
var colors = Object.values(allColors())

var defaultDNA = {
    "earColor":92,
    "headColor" : 10,
    "bodyTopColor" : 51,
    "bodyBottomColor" : 51,
    "bellyColor" : 50,
    "tailBaseColor" : 50,
    "tailStripeColor" : 93,
    //Cattributes
    "eyesShape" : 1,
    "decorationPattern" : 1,
    "decorationMidcolor" : 13,
    "decorationSidescolor" : 13,
    "animation" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnaear').html(defaultDNA.earColor);
  $('#dnahead').html(defaultDNA.headColor);
  $('#dnabodytop').html(defaultDNA.bodyTopColor);
  $('#dnabodybottom').html(defaultDNA.bodyBottomColor);
  $('#dnabelly').html(defaultDNA.bellyColor);
  $('#dnatailbase').html(defaultDNA.tailBaseColor);
  $('#dnatailstripe').html(defaultDNA.tailStripeColor);
    
//   $('#dnashape').html(defaultDNA.eyesShape)
//   $('#dnadecoration').html(defaultDNA.decorationPattern)
//   $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
//   $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
//   $('#dnaanimation').html(defaultDNA.animation)
//   $('#dnaspecial').html(defaultDNA.lastNum)

  renderCat(defaultDNA);
});

function getDna(){
    var dna = ''
    dna += $('#dnaear').html()
    dna += $('#dnahead').html()
    dna += $('#dnabodytop').html()
    dna += $('#dnabodybottom').html()
    dna += $('#dnabelly').html()
    dna += $('#dnatailbase').html()
    dna += $('#dnatailstripe').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna){
    earColor(colors[dna.earColor], dna.earColor);
    $('#earcolor').val(dna.earColor);

    headColor(colors[dna.headColor],dna.headColor);
    $('#headcolor').val(dna.headColor);

    bodyTopColor(colors[dna.bodyTopColor], dna.bodyTopColor);
    $('#bodytopcolor').val(dna.bodyTopColor);

    bodyBottomColor(colors[dna.bodyBottomColor], dna.bodyBottomColor);
    $('#bodybottomcolor').val(dna.bodyBottomColor);
 
    bellyColor(colors[dna.bellyColor],dna.bellyColor);
    $('#bellycolor').val(dna.bellyColor);
    
    tailBaseColor(colors[dna.tailBaseColor],dna.tailBaseColor);
    $('#tailbasecolor').val(dna.tailBaseColor);

    tailStripeColor(colors[dna.tailStripeColor],dna.tailStripeColor);
    $('#tailstripecolor').val(dna.tailStripeColor);
}

// Changing cat colors
$('#earcolor').change(()=>{
  var colorVal = $('#earcolor').val()
  earColor(colors[colorVal],colorVal)
})
$('#headcolor').change(()=>{
    var colorVal = $('#headcolor').val()
    headColor(colors[colorVal],colorVal)
})

$('#bodytopcolor').change(()=>{
  var colorVal = $('#bodytopcolor').val()
  bodyTopColor(colors[colorVal],colorVal)
})

$('#bodybottomcolor').change(()=>{
  var colorVal = $('#bodybottomcolor').val()
  bodyBottomColor(colors[colorVal],colorVal)
})

$('#bellycolor').change(()=>{
  var colorVal = $('#bellycolor').val()
  bellyColor(colors[colorVal],colorVal)
})

$('#tailbasecolor').change(()=>{
  var colorVal = $('#tailbasecolor').val()
  tailBaseColor(colors[colorVal],colorVal)
})

$('#tailstripecolor').change(()=>{
  var colorVal = $('#tailstripecolor').val()
  tailStripeColor(colors[colorVal],colorVal)
})