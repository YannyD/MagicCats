//is it better to repeat a few small functions in separate js files tied to each page?
// the main problem here is that we can pass in our active user parameter into selectionj and babymaker
//a secondary problem is the async nature of the new cat generation after breeding.  You prob cant show it right off the bat.
$(document).ready(function(){
    $('#selection-box1').empty();
    $('#selection-box2').empty();
    //ask user to enable metamask and then call a function with metamask accounts
    window.ethereum.enable().then(function(accounts){

        instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]})
        console.log(instance);
        
        //I still don't know what this user account does?
        user = accounts[0];
        
        web3.eth.getAccounts()
        .then(
            accounts => {
                getSelection(accounts[0]);
            }
        )


  ethereum.on('accountsChanged', function (accounts) {
    $('#selection-box1').empty();
    $('#selection-box2').empty();
    web3.eth.getAccounts((error, accounts) => {
        getSelection(accounts[0]);
    })
})
   
    })
    
})

function selectionButtonj(j){
    $("#selection-box1").empty();
    $("#selection-box2").empty();
    console.log(user)
    const catSelection = getSelectionj(user, j);
}

//breeding function
function babyMaker(momsID, dadsID){
instance.methods.breed(momsID, dadsID).send({}, function(error, txHash){
  if(error) console.log(error)
  else {
    console.log(txHash);
    alert("You birthed a new kitty!");
    instance.methods.getOwnedIds(user).call()
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



function addBreedBox1(i) {
    const oneCat = `
    <div class="col-lg-4 catBox m-2 light-b-shadow">
        <div class="canvas">
        <button type="button" onClick="breed1('`+ i + `')" class="btn btn-primary genbut">Select</button>
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
            <br>
        </div>
    </div>
    `
    return oneCat
}

function addBreedBox2(i) {
    const oneCat = `
                        <div class="col-lg-4 catBox m-2 light-b-shadow">
                            <div class="canvas">
                            <button type="button" onClick="breed2('`+ i + `')" class="btn btn-primary genbut">Select</button>
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
                                    <span id="dnaear` + i + i + `"></span>
                                    <span id="dnahead` + i + i + `"></span>
                                    <span id="dnabodytop` + i + i + `"></span>
                                    <span id="dnabodybottom` + i + i + `"></span>
                                    <span id="dnabelly` + i + i + `"></span>
                                    <span id="dnatailbase` + i + i + `"></span>
                                    <span id="dnatailstripe` + i + i + `"></span>
                        
                                    <!-- Cattributes -->
                                    <span id="dnaface` + i + i + `"></span>
                                    <span id="dnabooty` + i + i + `"></span>
                                    <span id="dnaanimate` + i + i + `"></span>
                                </b>
                            </div>
                        </div>
                        `
    return oneCat
}
function addCat() {
    const oneCat = `
                        <div class="col-lg-4 catBox m-2 light-b-shadow">
                            <div class="canvas">
                                <div class="bubble bubble bubble-bottom-left">Meooooow!</div>
                                <div class="ears ears">
                                    <div class="left_ear left_ear">
                                        <div class="inner_left_ear"></div>
                                    </div>
                                    <div class="right_ear right_ear">
                                        <div class="inner_right_ear"></div>
                        
                                    </div>
                                </div>
                                <div class="head head">
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
                                        <div class="leye leye">
                                            <div class="lshut lshut">
                                                <span></span>
                                            </div>
                                            <div class="liris liris"></div>
                                        </div>
                                        <div class="reye reye">
                                            <div class="rshut rshut">
                                                <span></span>
                                            </div>
                                            <div class="riris riris"></div>
                                        </div>
                                    </div>
                                    <div class="whiskers whiskers">
                                        <svg height="100%" width="100%">
                                            <line id="whisker1 whisker1" x1="10" y1="60" x2="85" y2="100"></line>
                                            <line id="whisker2 whisker2" x1="10" y1="80" x2="85" y2="100"></line>
                                            <line id="whisker3 whisker3" x1="10" y1="100" x2="85" y2="100"></line>
                                            <line id="whisker4 whisker4" x1="160" y1="100" x2="235" y2="60"></line>
                                            <line id="whisker5 whisker5" x1="160" y1="100" x2="235" y2="80"></line>
                                            <line id="whisker6 whisker6" x1="160" y1="100" x2="235" y2="100"></line>
                                        </svg>
                                    </div>
                                    <div class="snout">T
                                        <div class="mouth mouth">{</div>
                                    </div>
                                </div>
                                <div class="catbod">
                                    <div class="catbod_top catbod_top"></div>
                                    <div class="catbod_bottom catbod_bottom">
                                        <div class="belly belly"></div>
                                    </div>
                                </div>
                                <div class="tail1 tail1"></div>
                                <div class="tail2 tail2"></div>
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
                                    <span id="dnaear"></span>
                                    <span id="dnahead"></span>
                                    <span id="dnabodytop"></span>
                                    <span id="dnabodybottom"></span>
                                    <span id="dnabelly"></span>
                                    <span id="dnatailbase"></span>
                                    <span id="dnatailstripe"></span>
                        
                                    <!-- Cattributes -->
                                    <span id="dnaface"></span>
                                    <span id="dnabooty"></span>
                                    <span id="dnaanimate"></span>
                                </b>
                            </div>
                        </div>
                        `
    return oneCat
}

  //generate cat list without cat index j after one has been chosen to breed
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
  
  function getSelection(addy){  
    instance.methods.getOwnedIds(addy).call()
    .then( result => 
      {
      let dnaArray = [];
        for(let i=0; i<result.length; i++){
          dnaArray.push(generateKittyDNA(result[i]));
          $("#selection-box1").append(addBreedBox1(result[i]));
          $("#selection-box2").append(addBreedBox2(result[i]));
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

  function newCatBox() {
    const oneCat = `
                    <div class="col-lg-4 catBox m-2 light-b-shadow">
                        <div class="canvas">
                            <div class="bubble bubble-bottom-left">Meooooow!</div>
                            <div class="ears">
                                <div class="left_ear">
                                    <div class="inner_left_ear"></div>
                                </div>
                                <div class="right_ear">
                                    <div class="inner_right_ear"></div>
                    
                                </div>
                            </div>
                            <div class="head">
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
                                    <div class="leye">
                                        <div class="lshut">
                                            <span></span>
                                        </div>
                                        <div class="liris"></div>
                                    </div>
                                    <div class="reye">
                                        <div class="rshut">
                                            <span></span>
                                        </div>
                                        <div class="riris"></div>
                                    </div>
                                </div>
                                <div class="whiskers">
                                    <svg height="100%" width="100%">
                                        <line id="whisker1" x1="10" y1="60" x2="85" y2="100"></line>
                                        <line id="whisker2" x1="10" y1="80" x2="85" y2="100"></line>
                                        <line id="whisker3" x1="10" y1="100" x2="85" y2="100"></line>
                                        <line id="whisker4" x1="160" y1="100" x2="235" y2="60"></line>
                                        <line id="whisker5" x1="160" y1="100" x2="235" y2="80"></line>
                                        <line id="whisker6" x1="160" y1="100" x2="235" y2="100"></line>
                                    </svg>
                                </div>
                                <div class="snout">T
                                    <div class="mouth">{</div>
                                </div>
                            </div>
                            <div class="catbod">
                                <div class="catbod_top"></div>
                                <div class="catbod_bottom">
                                    <div class="belly"></div>
                                </div>
                            </div>
                            <div class="tail1"></div>
                            <div class="tail2"></div>
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
                                <span id="dnaear"></span>
                                <span id="dnahead"></span>
                                <span id="dnabodytop"></span>
                                <span id="dnabodybottom"></span>
                                <span id="dnabelly"></span>
                                <span id="dnatailbase"></span>
                                <span id="dnatailstripe"></span>
                    
                                <!-- Cattributes -->
                                <span id="dnaface"></span>
                                <span id="dnabooty"></span>
                                <span id="dnaanimate"></span>
                            </b>
                        </div>
                    </div>
                    `
    return oneCat
}

//returns an array of promises with tokenIDs
function generateKittyDNA(tokenID){
    return instance.methods.getKitty(tokenID).call()
    .then(result => {
      return result.genes
    })
  }