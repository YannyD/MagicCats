//we have  glitch when the the i+i cat is 11 or 22 when an i=11 or i=22 cat exists
//fix by adding simple breedbox id for the selector 

var colors = Object.values(allColors())

var defaultDNA = {
    "earColor":92,
    "headColor" : 10,
    "bodyTopColor" : 51,
    "bodyBottomColor" : 51,
    "bellyColor" : 50,
    "tailBaseColor" : 50,
    "tailStripeColor" : 93,
    "face" : '01',
    "bootySize" : "03",
    "animate" :  1,
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
    
$('#dnaface').html(defaultDNA.face)
$('#dnabooty').html(defaultDNA.bootySize)
$('#dnaanimation').html(defaultDNA.animation)

renderCat(defaultDNA);
});

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

    faceVariation(dna.face);

    bootySize(dna.bootySize);

    setAnimation(dna.animate);
}

// Changing cat facts when the selection bar moves
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

$('#facecatribute').change(()=>{
  var face =$('#facecatribute').val()
  faceVariation(face)
})

$('#bootycatribute').change(()=>{
  var booty = $('#bootycatribute').val()
  bootySize(booty)
})

$('#animationid').change(()=>{
  var animation = $('#animationid').val()
  setAnimation(animation)
})

$('#default_button').click(()=>{
  renderCat(defaultDNA);
})

$('#random_button').click(()=>{

  var randomDNA = {
    "earColor": Math.floor(Math.random()*(89))+10,
    "headColor" : Math.floor(Math.random()*(89))+10,
    "bodyTopColor" : Math.floor(Math.random()*(89))+10,
    "bodyBottomColor" : Math.floor(Math.random()*(89))+10,
    "bellyColor" : Math.floor(Math.random()*(89))+10,
    "tailBaseColor" : Math.floor(Math.random()*(89))+10,
    "tailStripeColor" : Math.floor(Math.random()*(89))+10,
    "face" : String(Math.floor(Math.random()*(5) + 1)),
    "bootySize" : String(Math.floor(Math.random()*(5) + 1)),
    "animate" :  String(Math.floor(Math.random()*(3) + 1)),
    } 
  renderCat(randomDNA);
})

//Kitty creation link to web3

function getDna(){
  var dna = ''
  dna += $('#dnaear').html()
  dna += $('#dnahead').html()
  dna += $('#dnabodytop').html()
  dna += $('#dnabodybottom').html()
  dna += $('#dnabelly').html()
  dna += $('#dnatailbase').html()
  dna += $('#dnatailstripe').html()
  dna += $('#dnaface').html()
  dna += $('#dnabooty').html()
  //we do not pull the animation because the number is too big
  return dna
}



