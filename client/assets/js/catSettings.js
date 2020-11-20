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

//breeding function
function babyMaker(momsID, dadsID){
  instance.methods.breed(momsID, dadsID).send({}, function(error, txHash){
    if(error) console.log(error)
    else {
      console.log(txHash);
      alert("You birthed a new kitty!");
      let addy = document.getElementById('myAddy').value;
      instance.methods.getOwnedIds(addy).call()
      .then( result => 
        {
        let newKittyID = result.length - 1;
        let newKittyDNA = generateKittyDNA(result[newKittyID])
          Promise.resolve(newKittyDNA)
            .then( newDNA=>
              {       
              let myDNA = 
              {
              "earColor":newDNA.substring(0,2),
              "headColor" : newDNA.substring(2,4),
              "bodyTopColor" : newDNA.substring(4,6),
              "bodyBottomColor" : newDNA.substring(6,8),
              "bellyColor" : newDNA.substring(8,10),
              "tailBaseColor" : newDNA.substring(10,12),
              "tailStripeColor" : newDNA.substring(12,14),
              "face" : newDNA.substring(14,16),
              "bootySize" : newDNA.substring(16,18),
              "animate" :  newDNA.substring(18,20),
              }
              $(".babyCat").append("<h1>Meet you new kitty!</h1>");
              $(".babyCat").append(newCatBox());
              renderNewCat(myDNA);            
              } 
            )
        }
        )
    }
  })

}

  function selectionButtonj(j){
    $("#selection-box1").empty();
    $("#selection-box2").empty();
    let addy = document.getElementById('myAddy').value;
    const catSelection = getSelectionj(addy, j);
  }
  
  function getSelectionj(addy, j){  
    instance.methods.getOwnedIds(addy).call()
    .then( result => 
      {
      for(let i=0; i<result.length;i++){
        if(i+1==j){}
        else{
        $("#selection-box1").append(addBreedBox1(result[i]));
        $("#selection-box2").append(addBreedBox2(result[i]));}
      }
      let dnaArray = [];
        for(let i=0; i<result.length; i++){
          dnaArray.push(generateKittyDNA(result[i]))
        }
        Promise.all(dnaArray)
          .then( finalArray=>
            {
          for(let i = 0; i<finalArray.length;i++){
            if(i+1==j){}
            else{
            let myDNA  = {
            "earColor":finalArray[i].substring(0,2),
            "headColor" : finalArray[i].substring(2,4),
            "bodyTopColor" : finalArray[i].substring(4,6),
            "bodyBottomColor" : finalArray[i].substring(6,8),
            "bellyColor" : finalArray[i].substring(8,10),
            "tailBaseColor" : finalArray[i].substring(10,12),
            "tailStripeColor" : finalArray[i].substring(12,14),
            "face" : finalArray[i].substring(14,16),
            "bootySize" : finalArray[i].substring(16,18),
            "animate" :  finalArray[i].substring(18,20),
            }
            
            renderMyCat(result[i], myDNA);
            renderMyCat2(result[i], myDNA);
          }}
            } 
          )
      }
      )
  }


function selectionButton(event,addy){
  const catSelection = getSelection(event, addy);
}

function getSelection(event,addy){  
  event.preventDefault();
  instance.methods.getOwnedIds(addy).call()
  .then( result => 
    {
      for(let i =0; i<result.length;i++){
        $("#selection-box1").append(addBreedBox1(result[i]));
        $("#selection-box2").append(addBreedBox2(result[i]));
      }
    let dnaArray = [];
      for(let i=0; i<result.length; i++){
        dnaArray.push(generateKittyDNA(result[i]))
      }
      Promise.all(dnaArray)
        .then( finalArray=>
          {
        for(let i = 0; i<finalArray.length;i++){
          let myDNA = {
          "earColor":finalArray[i].substring(0,2),
          "headColor" : finalArray[i].substring(2,4),
          "bodyTopColor" : finalArray[i].substring(4,6),
          "bodyBottomColor" : finalArray[i].substring(6,8),
          "bellyColor" : finalArray[i].substring(8,10),
          "tailBaseColor" : finalArray[i].substring(10,12),
          "tailStripeColor" : finalArray[i].substring(12,14),
          "face" : finalArray[i].substring(14,16),
          "bootySize" : finalArray[i].substring(16,18),
          "animate" :  finalArray[i].substring(18,20),
          }
          renderMyCat(result[i], myDNA);
          renderMyCat2(result[i], myDNA);
        }
          } 
        )
    }
    )
}
var dadsID = -1;
var momsID = -1;

function breed1(i){
    $('.selection1').css("display", "none");
    momsID=i;
    selectionButtonj(i)
    if(dadsID!=-1){
      babyMaker(momsID, dadsID);
      momsDNA = -1;
      dadsDNA = -1;
    }
}

function breed2(i){
  $('.selection2').css("display", "none");
    dadsID = i;
    selectionButtonj(i)
    if(momsID!=-1){
      babyMaker(momsID, dadsID);
      momsDNA = -1;
      dadsDNA = -1;
    }
}

function generationButton(event,addy){
  const catDNA = getMyCats(event, addy);
}

function getMyCats(event,addy){  
  event.preventDefault();
  instance.methods.getOwnedIds(addy).call()
  .then( result => 
    {
    let dnaArray = [];
      for(let i=0; i<result.length; i++){
        dnaArray.push(generateKittyDNA(result[i]))
      }
      Promise.all(dnaArray)
        .then( finalArray=>
          {
        for(let i = 0; i<finalArray.length;i++){
          let myDNA = []
          myDNA[i] = {
          "earColor":finalArray[i].substring(0,2),
          "headColor" : finalArray[i].substring(2,4),
          "bodyTopColor" : finalArray[i].substring(4,6),
          "bodyBottomColor" : finalArray[i].substring(6,8),
          "bellyColor" : finalArray[i].substring(8,10),
          "tailBaseColor" : finalArray[i].substring(10,12),
          "tailStripeColor" : finalArray[i].substring(12,14),
          "face" : finalArray[i].substring(14,16),
          "bootySize" : finalArray[i].substring(16,18),
          "animate" :  finalArray[i].substring(18,20),
          }
          $("#myCatList").append(addCatBox(i));
          renderMyCat(i, myDNA[i]);
        }
          } 
        )
    }
    )
}


//returns an array of promises with tokenIDs
function generateKittyDNA(tokenID){
  return instance.methods.getKitty(tokenID).call()
  .then(result => {
    return result.genes
  })
}

function renderMyCat(i, dna){
  $('.right_ear'+i).css('background', '#' + colors[dna.earColor])
  $('.left_ear'+i).css('background', '#' + colors[dna.earColor])  //This changes the color of the cat
  $("#dnaear"+i).html(dna.earColor) //This updates the body color part of the DNA that is displayed below the cat
  $('.head'+i).css('background', '#' + colors[dna.headColor])  //This changes the color of the cat
  $("#dnahead"+i).html(dna.headColor) //This updates the body color part of the DNA that is displayed below the cat
  
  $('.catbod_top'+i).css('background', '#' + colors[dna.bodyTopColor])  //This changes the color of the cat
  $("#dnabodytop"+i).html(dna.bodyTopColor); //This updates the body color part of the DNA that is displayed below the cat
  
  $('.catbod_bottom'+i).css('background', '#' + colors[dna.bodyBottomColor])  //This changes the color of the cat
  $("#dnabodybottom"+i).html(dna.bodyBottomColor) //This updates the body color part of the DNA that is displayed below the cat

  $('.belly'+i).css('background', '#' + colors[dna.bellyColor])  //This changes the color of the cat
  $("#dnabelly"+i).html(dna.bellyColor) //This updates the body color part of the DNA that is displayed below the cat

  
  $('.tail1'+i).css('border-bottom-color', '#' + colors[dna.tailBaseColor])  //This changes the color of the cat
  $("#dnatailbase"+i).html(dna.tailBaseColor) //This updates the body color part of the DNA that is displayed below the cat

  $('.tail2'+i).css('border-bottom-color', '#' + colors[dna.tailStripeColor])  //This changes the color of the cat
  $("#dnatailstripe"+i).html(dna.tailStripeColor) //This updates the body color part of the DNA that is displayed below the cat

  face(faceStyles[dna.face - 1], i)
  $("#dnaface"+i).html(dna.face)

  booty(bootyStyle[dna.bootySize-1], i);
  $("#dnabooty"+i).html(dna.bootySize)

  const animations = ["none", "tailShake", "headTilt",]
  animate(animations[dna.animate -1], i);
  $("#dnaanimate"+i).html(dna.animate)
}
function renderNewCat(dna){
  $('.right_ear').css('background', '#' + colors[dna.earColor])
  $('.left_ear').css('background', '#' + colors[dna.earColor])  //This changes the color of the cat
  $("#dnaear").html(dna.earColor) //This updates the body color part of the DNA that is displayed below the cat
  
  $('.head').css('background', '#' + colors[dna.headColor])  //This changes the color of the cat
  $("#dnahead").html(dna.headColor) //This updates the body color part of the DNA that is displayed below the cat
  
  $('.catbod_top').css('background', '#' + colors[dna.bodyTopColor])  //This changes the color of the cat
  $("#dnabodytop").html(dna.bodyTopColor); //This updates the body color part of the DNA that is displayed below the cat
  
  $('.catbod_bottom').css('background', '#' + colors[dna.bodyBottomColor])  //This changes the color of the cat
  $("#dnabodybottom").html(dna.bodyBottomColor) //This updates the body color part of the DNA that is displayed below the cat

  $('.belly').css('background', '#' + colors[dna.bellyColor])  //This changes the color of the cat
  $("#dnabelly").html(dna.bellyColor) //This updates the body color part of the DNA that is displayed below the cat

  
  $('.tail1').css('border-bottom-color', '#' + colors[dna.tailBaseColor])  //This changes the color of the cat
  $("#dnatailbase").html(dna.tailBaseColor) //This updates the body color part of the DNA that is displayed below the cat

  $('.tail2').css('border-bottom-color', '#' + colors[dna.tailStripeColor])  //This changes the color of the cat
  $("#dnatailstripe").html(dna.tailStripeColor) //This updates the body color part of the DNA that is displayed below the cat

  face(faceStyles[dna.face - 1])
  $("#dnaface").html(dna.face)

  booty(bootyStyle[dna.bootySize-1]);
  $("#dnabooty").html(dna.bootySize)

  const animations = ["none", "tailShake", "headTilt",]
  animate(animations[dna.animate -1]);
  $("#dnaanimate").html(dna.animate)
}
function renderMyCat2(i, dna){
  $('.right_ear'+i).css('background', '#' + colors[dna.earColor])
  $('.left_ear'+i).css('background', '#' + colors[dna.earColor])  //This changes the color of the cat
  $("#dnaear"+i+i).html(dna.earColor) //This updates the body color part of the DNA that is displayed below the cat

  $('.head'+i).css('background', '#' + colors[dna.headColor])  //This changes the color of the cat
  $("#dnahead"+i+i).html(dna.headColor) //This updates the body color part of the DNA that is displayed below the cat
  
  $('.catbod_top'+i).css('background', '#' + colors[dna.bodyTopColor])  //This changes the color of the cat
  $("#dnabodytop"+i+i).html(dna.bodyTopColor); //This updates the body color part of the DNA that is displayed below the cat
  
  $('.catbod_bottom'+i).css('background', '#' + colors[dna.bodyBottomColor])  //This changes the color of the cat
  $("#dnabodybottom"+i+i).html(dna.bodyBottomColor) //This updates the body color part of the DNA that is displayed below the cat

  $('.belly'+i).css('background', '#' + colors[dna.bellyColor])  //This changes the color of the cat
  $("#dnabelly"+i+i).html(dna.bellyColor) //This updates the body color part of the DNA that is displayed below the cat

  
  $('.tail1'+i).css('border-bottom-color', '#' + colors[dna.tailBaseColor])  //This changes the color of the cat
  $("#dnatailbase"+i+i).html(dna.tailBaseColor) //This updates the body color part of the DNA that is displayed below the cat

  $('.tail2'+i).css('border-bottom-color', '#' + colors[dna.tailStripeColor])  //This changes the color of the cat
  $("#dnatailstripe"+i+i).html(dna.tailStripeColor) //This updates the body color part of the DNA that is displayed below the cat

  face(faceStyles[dna.face - 1], i)
  $("#dnaface"+i+i).html(dna.face)

  booty(bootyStyle[dna.bootySize-1], i);
  $("#dnabooty"+i+i).html(dna.bootySize)

  const animations = ["none", "tailShake", "headTilt",]
  animate(animations[dna.animate -1], i);
  $("#dnaanimate"+i+i).html(dna.animate)
}