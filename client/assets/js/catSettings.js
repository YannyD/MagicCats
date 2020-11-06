
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
    "earColor": Math.round(Math.random()*92)+10,
    "headColor" : Math.round(Math.random()*92)+10,
    "bodyTopColor" : Math.round(Math.random()*92)+10,
    "bodyBottomColor" : Math.round(Math.random()*92)+10,
    "bellyColor" : Math.round(Math.random()*92)+10,
    "tailBaseColor" : Math.round(Math.random()*92)+10,
    "tailStripeColor" : Math.round(Math.random()*92)+10,
    "face" : String(Math.round(Math.random()*5) + 1),
    "bootySize" : String(Math.round(Math.random()*5) + 1),
    "animate" :  String(Math.round(Math.random()*3) + 1),
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
  console.log(dna + " is a " + typeof(dna))
  return dna
}

//is this an async?  
//and does it go here or in the index.js file?  Does it matter as long as we use onclick?
function kittyCreation(){
  let dna = getDna();
  instance.methods.createKittyGen0(dna).send({}, function(error, txHash){
    if(error) console.log(error)
    else {
      console.log(txHash);
      alert("You birthed a new kitty!");
    }
  })
}

function getMyCats(addy){  
  let catList = instance.methods.getOwnedIds(addy).call({from: addy})
  .then(function(result){
    console.log(result);
  })
  
  console.log(catList);

}
