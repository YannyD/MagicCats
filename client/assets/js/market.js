var web3 = new Web3(Web3.givenProvider);        //argument should be ethereum node url, but we use meta mask
var marketInstance;
var user;
var marketContractAddress = "0x337447E8F8Fa831Ff094F90bC48e504E88F19465";


function addTokenForSale(i){
    //gonna have to render cats here....
    `<div class="row">
        <div class = "col-md-2 tokenID`+i+`"></div> 
        <div class="col-md-6 tokenDetails`+i+`">
            <div class="price`+i+`">Price: </div>
            <div 
        </div>
    </div>`
}

$(document).ready(function(){
    marketInstance = new web3.eth.Contract(marketAbi, marketContractAddress, {from: accounts[0]})
    user = accounts[0];
//input more events
marketInstance.methods.getAllTokenOnSale().call()
    .then(tokensForSale=>
        {
            for(let i = 0; i<tokensForSale.length;i++){
                $('.market').append(addTokenForSale(tokensForSale[i]));
                let offerDetails = marketInstance.methods.tokenIdToOffer[tokensForSale[i]];
                //gonna have to render based on offer and cat dna
            }
        }

        )
    
}


)