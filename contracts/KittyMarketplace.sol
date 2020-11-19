pragma solidity ^0.5.12;

import "./Kittycontract.sol";
import "./Ownable.sol";
import "./IKittyMarketplace.sol";

contract KittyMarketplace is Ownable{
    
    event MarketTransaction(string TxType, address owner, uint256 tokenId);

    Kittycontract private _kittyContract;

    struct Offer{
        address payable seller;
        uint price;
        uint index;
        uint tokenId;
        bool active;
    }

    Offer[] offers;

    mapping(uint => Offer) tokenIdToOffer;
    constructor (address _kittyContractAddress) public {
        setKittyContract(_kittyContractAddress);
    }
    
    //why does the visibility of the inerface keep getting switched in our implementation?  Does it matter?
    //shouldn't this be internal if it is called by the constructor?
    function setKittyContract(address _kittyContractAddress) internal onlyOwner{
        _kittyContract = Kittycontract(_kittyContractAddress);
    }

    //shouldn't we throw an error with a require here?
    function getOffer(uint _tokenId) public view returns(address seller, uint price, uint index, uint tokenId, bool active){
        require(tokenIdToOffer[_tokenId].active==true, "No one made an offer");
        Offer storage theOffer = tokenIdToOffer[_tokenId];
        return(theOffer.seller, theOffer.price, theOffer.index,theOffer.tokenId, theOffer.active);
    }

        //another visibility change from interface- whats the point of having an interface exactly if you can just change it?
    function getAllTokenOnSale() public view  returns(uint256[] memory listOfOffers){
        uint totalOffers = offers.length;

        if(totalOffers==0){
            uint256[] memory listOfOffers = new uint256[](0);
            return listOfOffers;
        }
        else{
            //why can't we make this a dynamic array?
            uint[] memory listOfOffers = new uint[](totalOffers);
            for(uint i =0; i<totalOffers; i++){
                //what is the logic behind why we can't use push on certain kinds of arrays?
                if(offers[i].active==true){
                    listOfOffers[i]=(offers[i].tokenId);
                }
            }
            //don't we have to return listOfOffers and not result since we declared the return name above?
                return listOfOffers
                
                ;
            }
        }
    
    function setOffer(uint256 _price, uint256 _tokenId) external {
        require(msg.sender == _kittyContract.ownerOf(_tokenId), "That thing ain't yours");
        //isn't this better than ==false, since it could also equal to 0 when not yet set
        require(tokenIdToOffer[_tokenId].active!=true, "That thing is already on offer");
        //why does he call is approvedforall? Don't we just need to check for that one _tokenId?
        require(_kittyContract.getApproved(_tokenId)==address(this), "This contract doesn't have permission to move that coin");
        
        //why do we make an explicit index here but not in our kitty contract?  Should we have added the index to the kitty struct?
        Offer memory newOffer = Offer({
            seller: msg.sender,
            price: _price, 
            index: offers.length,
            tokenId: _tokenId,
            active: true
        });
        
        tokenIdToOffer[_tokenId] = newOffer;
        offers.push(newOffer);
        emit MarketTransaction("Create offer", msg.sender, _tokenId);
    }
    
function removeOffer(uint256 _tokenId) public{
        require(tokenIdToOffer[_tokenId].seller==msg.sender, "This thing ain't yours");
        delete tokenIdToOffer[_tokenId];
        offers[tokenIdToOffer[_tokenId].index].active=false;
        emit MarketTransaction("Remove offer", msg.sender, _tokenId);
    }

    function buyKitty(uint256 _tokenId) external payable{
        Offer memory offerMade = tokenIdToOffer[_tokenId];
        require(msg.value==offerMade.price, "Pay the full amount, please");
        //why do we initialize and create an Offer struct if we just call the attributes with tokenIdToOffer[_tokenId]?  
        require(offerMade.active==true, "That kitty isn't on the market");

        delete tokenIdToOffer[_tokenId];
        offers[offerMade.index].active=false;

        //why do we have to check whether the price is positive? 
        //I don't think I understand this section.  Is this calling the transfer function from kitty contract?  
        if(offerMade.price>0){
            offerMade.seller.transfer(offerMade.price);
        }

        _kittyContract.transferFrom(offerMade.seller, msg.sender, _tokenId);

        emit MarketTransaction("Buy", msg.sender, _tokenId);
    }
}