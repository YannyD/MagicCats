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
})

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