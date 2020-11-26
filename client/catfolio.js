$(document).ready(function(){
        //ask user to enable metamask and then call a function with metamask accounts
        window.ethereum.enable().then(function(accounts){
        instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]});
        instance.events.Approval().on('data', event=>console.log(event));
        console.log(instance);
        user = accounts[0];
        $('#myCatList').empty();
        web3.eth.getAccounts((error, accounts) => {
            //what is the right place to output an error?  In a try catch or something?
            getMyCats(accounts[0]);    
          })
          //I am not 100% sure why this account listener has to be inside the .enable().then() function
          ethereum.on('accountsChanged', function (accounts) {
            $('#myCatList').empty();
            web3.eth.getAccounts((error, accounts) => {
              getMyCats(accounts[0]);
            })
        })
        marketInstance = new web3.eth.Contract(marketAbi, marketContractAddress, {from: accounts[0]});
        marketInstance.events.MarketTransaction().on('data', event=>console.log(event));
        })
})

function getMyCats(addy){  
  instance.methods.getOwnedIds(addy).call()
  .then( result => 
    {
    let dnaArray = [];
      for(let i=0; i<result.length; i++){
        dnaArray.push(generateKittyDNA(result[i]))
        $("#myCatList").append(addCatBox(result[i]));
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
          renderMyCat(result[i], myDNA[i]);
        }
          } 
        )
    }
    )
    marketInstance.methods.getAllTokenOnSale().call()
      .then(
        tokensOnSale=>{
          for(let i=0;i<tokensOnSale.length;i++){
            $('.buyorsell'+tokensOnSale[i]).html("delist");
          $('.buyorsell'+tokensOnSale[i]).attr("onclick",  'delist('+tokensOnSale[i]+')');
          }
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

function sell(i){
  let price = prompt("How much you want for it in wei? \n You must enter an integer value.");
  price = parseInt(price);
  
  if(isNaN(price)){
    alert("Please use an Arabic (originally called hindu-arabic), base ten, integer digit.");
  }
  else 
  {
    console.log("The price is "+price+" and the token is "+i);
    instance.methods.approve(marketContractAddress, i).send({}, (error, txHash)=>{
      if(error) console.log(error)
      else console.log(txHash)
    })
    //do I need to get accounts here?
    web3.eth.getAccounts((error, accounts) => {
      console.log(marketInstance);
      marketInstance.methods.setOffer(price, i).send({}, function(error, txHash){
        if(error) console.log(error)
        else {
          console.log(txHash);
          alert("Kitty for sale!  You put it on the market.");
        }
      });
    })
    $('.buyorsell'+i).html("delist");
    $('.buyorsell'+i).attr("onclick",  'delist('+i+')');
  }
}

//I tried to reload here with location.reload, but it didn't work.  Why not?
function delist(i){
  marketInstance.methods.removeOffer(i).send({}, 
    (error, txHash)=>{
      if(error) console.log(error)
      else{
        console.log(txHash);
        alert("You took your kitty off the market");
        $('.buyorsell'+i).html("sell");
        $('.buyorsell'+i).attr("onclick",  'sell('+i+')');      
      }
    }
    )
}


function addCatBox(i) {
  const oneCat = `
<div class="col-lg-4 catBox m-2 light-b-shadow">
  <div class="canvas">
  <button type="button" onClick="sell('`+ i + `')" class="btn btn-primary genbut buyorsell`+i+`">Sell</button>

      <div class="bubble bubble` + i + ` bubble-bottom-left">Meooooow!</div>
      <div class="ears ears` + i + `">
          <div class="left_ear left_ear` + i + `">
              <div class="inner_left_ear"></div>
          </div>
          <div class="right_ear right_ear` + i + `">
              <div class="inner_right_ear"></div>

          </div>
      </div>
      <div class="head head` + i + `">
          <div class="stripes">
              <svg id="stripes1" height="100%" width="100%">
                  <line x1="70" y1="10" x2="110" y2="70"></line>
                  <line style="stroke: white; stroke-width:1;" x1="68" y1="10" x2="108" y2="70"></line>
                  <line style="stroke: white; stroke-width:1;" x1="72" y1="10" x2="112" y2="70"></line>
              </svg>
              <svg id="stripes2" height="100%" width="100%">
                  <line x1="110" y1="70" x2="47" y2="20"></line>
                  <line style="stroke: white; stroke-width:1;" x1="108" y1="70" x2="45" y2="20"></line>
                  <line style="stroke: white; stroke-width:1;" x1="112" y1="70" x2="49" y2="20"></line>
              </svg>
              <svg id="stripes3" height="100%" width="100%">
                  <line x1="145" y1="65" x2="213" y2="20"></line>
                  <line style="stroke: white; stroke-width:1;" x1="143" y1="65" x2="211" y2="20"></line>
                  <line style="stroke: white; stroke-width:1;" x1="146" y1="65" x2="214" y2="20"></line>
              </svg>
              <svg id="stripes4" height="100%" width="100%">
                  <line x1="145" y1="65" x2="175" y2="13"></line>
                  <line style="stroke: white; stroke-width:1;" x1="147" y1="65" x2="177" y2="13"></line>
                  <line style="stroke: white; stroke-width:1;" x1="143" y1="65" x2="173" y2="13"></line>
              </svg>
          </div>
          <div class="eyes">
              <div class="leye leye` + i + `">
                  <div class="lshut lshut` + i + `">
                      <span></span>
                  </div>
                  <div class="liris liris` + i + `"></div>
              </div>
              <div class="reye reye` + i + `">
                  <div class="rshut rshut` + i + `">
                      <span></span>
                  </div>
                  <div class="riris riris` + i + `"></div>
              </div>
          </div>
          <div class="whiskers whiskers` + i + `">
              <svg height="100%" width="100%">
                  <line id="whisker1 whisker1` + i + `" x1="10" y1="60" x2="85" y2="100"></line>
                  <line id="whisker2 whisker2` + i + `" x1="10" y1="80" x2="85" y2="100"></line>
                  <line id="whisker3 whisker3` + i + `" x1="10" y1="100" x2="85" y2="100"></line>
                  <line id="whisker4 whisker4` + i + `" x1="160" y1="100" x2="235" y2="60"></line>
                  <line id="whisker5 whisker5` + i + `" x1="160" y1="100" x2="235" y2="80"></line>
                  <line id="whisker6 whisker6` + i + `" x1="160" y1="100" x2="235" y2="100"></line>
              </svg>
          </div>
          <div class="snout">T
              <div class="mouth mouth` + i + `">{</div>
          </div>
      </div>
      <div class="catbod">
          <div class="catbod_top catbod_top` + i + `"></div>
          <div class="catbod_bottom catbod_bottom` + i + `">
              <div class="belly belly` + i + `"></div>
          </div>
      </div>
      <div class="tail1 tail1` + i + `"></div>
      <div class="tail2 tail2` + i + `"></div>
      <div class="legs">
          <div class="lleg"></div>
          <div class="rleg"></div>
      </div>
  </div>
  <br>
  <!-- dna numbers listed on front end -->
  <div class="dnaDiv" id="catDNA">
      <b>
          DNA:
          <!-- Colors -->
          <span id="dnaear` + i + `"></span>
          <span id="dnahead` + i + `"></span>
          <span id="dnabodytop` + i + `"></span>
          <span id="dnabodybottom` + i + `"></span>
          <span id="dnabelly` + i + `"></span>
          <span id="dnatailbase` + i + `"></span>
          <span id="dnatailstripe` + i + `"></span>

          <!-- Cattributes -->
          <span id="dnaface` + i + `"></span>
          <span id="dnabooty` + i + `"></span>
          <span id="dnaanimate` + i + `"></span>
      </b>
  </div>
</div>
`
  return oneCat
}