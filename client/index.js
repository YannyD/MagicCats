let web3 = new Web3(Web3.givenProvider);        //argument should be ethereum node url, but we use meta mask
let instance;
let user;
let contractAddress = "0xfbeB531aB9Fb14F09EdF203bD11B4FcaA7184fcB";

$(document).ready(function(){
  //ask user to enable metamask and then call a function with metamask accounts
    window.ethereum.enable().then(function(accounts){
        instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]})
        user = accounts[0];

        console.log(instance);

        instance.events.Birth().on('data', function(event){
            console.log(event);
            let owner = event.returnValues.owner;
            let kittenId = event.returnValues.kittenId;
            let momId = event.returnValues.momId;
            let dadId = event.returnValues.dadId;
            let genes = event.returnValues.genes;
            $('#creationEvent').css("display", "block");
            $('#creationEvent').text("You created cat: <br>"+"owner: "+ owner 
                                    + " Kitten ID: " + kittenId
                                    +" Mom ID: " + momId
                                    +" Dad ID: "+ dadId
                                    +" Genes: "+genes)
        }
    )
    .on('error', console.error);
})
})