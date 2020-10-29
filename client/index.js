//why vars and not lets or consts?

var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0xfbeB531aB9Fb14F09EdF203bD11B4FcaA7184fcB";

$(document).ready(function(){
    window.ethereum.enable().then(function(accounts){
        instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]})
        user = accounts[0];

        console.log(instance);
         Birth(address owner, uint256 kittenId, uint256 momId, uint256 dadId, uint256 genes);

        instance.events.Birth().on('data', function(event){
            console.log(event);
            let owner = event.returnValues.owner;
            let kittenId = event.returnValues.kittenId;
            let momId = event.returnValues.momId;
            let dadId = event.returnValues.dadId;
            let genes = event.returnValues.genes;
        }
    })
})