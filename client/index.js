var web3 = new Web3(Web3.givenProvider);        //argument should be ethereum node url, but we use meta mask
var instance;
var user;
var contractAddress = "0xf9aC991Be6f1Bc18071A3D3625e4cD5CE9Ea1013";

function creationCutOff(){
  $('#creationEvent').css("display", "none");
}

$(document).ready(function(){
  //ask user to enable metamask and then call a function with metamask accounts
    window.ethereum.enable().then(function(accounts){
        instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]})
        user = accounts[0];
        instance.events.Birth().on('data', function(event){
            console.log(event);
            let owner = event.returnValues.owner;
            let kittenId = event.returnValues.kittenId;
            let momId = event.returnValues.momId;
            let dadId = event.returnValues.dadId;
            let genes = event.returnValues.genes;
            $('#creationEvent').css({"display":"block", "background":"red", "color":"white"});
            $('#creationEvent').text("You created cat: <br>"+"owner: "+ owner 
                                    + " Kitten ID: " + kittenId
                                    +" Mom ID: " + momId
                                    +" Dad ID: "+ dadId
                                    +" Genes: "+genes);
            setTimeout(creationCutOff, 5000);

        }
    )
    .on('error', console.error);
})
})