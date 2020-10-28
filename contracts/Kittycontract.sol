pragma solidity ^0.5.12;
import "./IERC721.sol";

contract Kittycontract is IERC721{


event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

string private constant _name= "Kitty Coin";
string private constant _symbol = "KTC";

struct Kitty{
    uint256 genes;
    uint64 birthTime;
    uint32 dadID;
    uint32 momID;
    uint16 generation;
}

Kitty[] kitties;

uint256[] public tokenIds;  //is this unnecessary?
mapping(address=>uint256[]) private _owners;    //is this a wallet that wouldn't be in this contract?
mapping(uint256 =>address) private _tokenOwner; //is this unnecessary?

//do I need to indicate a "return" if I specify the variable name in the "returns(uint256 balance)" parameter?
//also, do I need to delcare "uint256 balance" again or is that optional?
    function balanceOf(address owner) external view returns (uint256 balance){
        balance = _owners[owner].length;
        return balance;
    }

    function totalSupply() external view returns (uint256 total){
        return tokenIds.length;
    }

    function name() external view returns (string memory tokenName){
        return _name;
    }

    function symbol() external view returns (string memory tokenSymbol){
        return _symbol;
    }

    function ownerOf(uint256 tokenId) external view returns (address owner){
        owner = _tokenOwner[tokenId];
        return owner;
    }


    function arrayContains(uint256[] memory array, uint256 value) public pure returns(bool){
        uint i = 0;
        while(i< array.length){
            if(array[i]==value){
                i=(array.length +1);
                return true;
            }
            else{i++;}
        }
        if(i==array.length)return false;
    }

    function valueArrayIndex(uint256[] memory array, uint256 value) public pure returns(uint256){
        //is this an assert or require?  Or better for a boolean return?
        assert(arrayContains(array, value)==true);
        for(uint i = 0; i<array.length; i++){
            if(array[i]==value) return i;
        }
    }

    function transfer(address to, uint256 tokenId) external{
        require(arrayContains(_owners[msg.sender], tokenId)==true, "Sender does not own tokenId");
        uint256 index = valueArrayIndex(_owners[msg.sender], tokenId);
        delete _owners[msg.sender][index];
        _owners[to].push(tokenId);
        _tokenOwner[tokenId] = to;
        emit Transfer(msg.sender, to, tokenId);

    }
}