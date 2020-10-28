pragma solidity ^0.5.12;
import "./IERC721.sol";
import "./Ownable.sol";

contract Kittycontract is IERC721, Ownable{


event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
event Birth(address owner, uint256 kittenId, uint256 momId, uint256 dadId, uint256 genes);

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

mapping(address=>uint256[]) private _owners;    //is this a wallet that wouldn't be in this contract?
mapping(uint256 =>address) private _tokenOwner; //is this unnecessary?



//function createKittyGen0(uint256 genes) public onlyOwner{
 //   _createKitty();

//}
function _createKitty(uint256 _momID, uint256 _dadID, uint256 _generation, uint256 _genes, address _owner) public returns(uint256){
    Kitty memory _kitty = Kitty({
        genes: _genes, 
        birthTime: uint64(now),
        momID: uint32(_momID),
        dadID: uint32(_dadID),
        generation: uint16(_generation)
    });

    uint256 newKittenId = kitties.push(_kitty)-1; //returns length of new array
    emit Birth(_owner, newKittenId, _momID, _dadID, _genes);
    
    _transfer(address(0), _owner, newKittenId);
    
    return newKittenId;
}

//do I need to indicate a "return" if I specify the variable name in the "returns(uint256 balance)" parameter?
//also, do I need to delcare "uint256 balance" again or is that optional?
    function balanceOf(address owner) external view returns (uint256 balance){
        balance = _owners[owner].length;
        return balance;
    }

    function totalSupply() external view returns (uint256 total){
        return kitties.length;
    }

    function name() external view returns (string memory tokenName){
        return _name;
    }

    function symbol() external view returns (string memory tokenSymbol){
        return _symbol;
    }

    function ownerOf(uint256 tokenId) external view returns (address owner){
        require(tokenId < kitties.length, "This token does not exist");
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
        require(to != address(0), "Don't send your token into the endless abyss");
        require(to != address(this), "Don't send your token to this address");
        require(arrayContains(_owners[msg.sender], tokenId)==true, "Sender does not own tokenId");
        
        _transfer(msg.sender, to, tokenId);
    }
    //can we overload with a different access modifier?
    function _transfer(address from, address to, uint256 tokenId) internal{
        if(from==address(0)) {
            _owners[to].push(tokenId);
            _tokenOwner[tokenId]=to;
        }
        else{
        uint256 index = valueArrayIndex(_owners[from], tokenId);
        //does the delete actually remove or just replace with zeros?
        delete _owners[from][index];
        _owners[to].push(tokenId);
        _tokenOwner[tokenId] = to;
        emit Transfer(msg.sender, to, tokenId);
            }
    }
}