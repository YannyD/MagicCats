var web3 = new Web3(Web3.givenProvider);        //argument should be ethereum node url, but we use meta mask

var instance;
var user;
var contractAddress = "0x04B0bF3b4f88196745de08710dC278fA37052080";

function creationCutOff(){
  $('#creationEvent').css("display", "none");
}

$(document).ready(function(){
        //ask user to enable metamask and then call a function with metamask accounts
        window.ethereum.enable().then(function(accounts){
        instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]})
        console.log(instance);
        user = accounts[0];
        instance.events.Birth().on('data', function(event){
            console.log(event);
            let owner = event.returnValues.owner;
            let kittenId = event.returnValues.kittenId;
            let momId = event.returnValues.momId;
            let dadId = event.returnValues.dadId;
            let genes = event.returnValues.genes;
            if(owner==user){
            $('#creationEvent').css({"display":"block", "background":"red", "color":"white"});
            $('#creationEvent').text("You created cat: <br>"+"owner: "+ owner 
                                    + " Kitten ID: " + kittenId
                                    +" Mom ID: " + momId
                                    +" Dad ID: "+ dadId
                                    +" Genes: "+genes);
            setTimeout(creationCutOff, 5000);
          }

        }
    )
    .on('error', console.error);
})

//we should put each of these ifs in separate js files and just upload different files for each page, right?
    if($('#myCatList')!=0){
      web3.eth.getAccounts((error, accounts) => {
        //what is the right place to output an error?  In a try catch or something?
        getMyCats(accounts[0]);
      })
    }
    //why does this break if I use else if?
    if($('#selection-box1')!=0){
      web3.eth.getAccounts((error, accounts) => {
        getSelection(accounts[0]);
      })
    }

    ethereum.on('accountsChanged', function (accounts) {
      
      if($('#myCatList')!=0){
        $('#myCatList').empty();
        web3.eth.getAccounts((error, accounts) => {
          getMyCats(accounts[0]);
        })
      }
      if($('#selection-box1')!=0){
        $('#selection-box1').empty();
        $('#selection-box2').empty();
        web3.eth.getAccounts((error, accounts) => {
          getSelection(accounts[0]);
        })
      }
    })
    

})