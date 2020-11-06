pragma solidity ^0.5.12;
import "./IERC721.sol";
import "./Ownable.sol";

contract Kittycontract is IERC721, Ownable{

    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Birth(address owner, uint256 kittenId, uint256 momId, uint256 dadId, uint256 genes);

    uint16 private constant gen0Limit = 10;
    string private constant _name= "Kitty Coin";
    string private constant _symbol = "KTC";
    uint256 public gen0Counter;

    struct Kitty{
    uint256 genes;
    uint256 birthTime;
    uint256 dadID;
    uint256 momID;
    uint256 generation;
    }
    
    Kitty[] public kitties;    //is this set as private by default if I don't use public?

    mapping(address=>uint256) private _ownersTokenBalance;    //each address's token balance
    mapping(uint256 =>address) private _tokenOwner; //tokenID equal to the number of tokens when kitty created maps to each owner


    function createKittyGen0(uint256 _genes) public onlyOwner returns(uint256){
    require(gen0Counter<gen0Limit, "The garden of eden has closed");
    gen0Counter ++;
    return _createKitty(0, 0, 0, _genes, msg.sender);
    }

    function _createKitty(uint256 _momID, uint256 _dadID, uint256 _generation, uint256 _genes, address _owner) internal 
    returns(uint256){
    Kitty memory _kitty = Kitty({
        genes: _genes, 
        birthTime: uint64(now),
        momID: uint32(_momID),
        dadID: uint32(_dadID),
        generation: uint16(_generation)
    });

    kitties.push(_kitty); 
    uint256 newKittenId = kitties.length-1;
    emit Birth(_owner, newKittenId, _momID, _dadID, _genes);
    _transfer(address(0), _owner, newKittenId);

    return newKittenId;
    }

    function transfer(address to, uint256 tokenId) external{
        require(to != address(0), "Don't send your token into the endless abyss");
        require(to != address(this), "Don't send your token to this address");
        require(_tokenOwner[tokenId]==msg.sender, "Sender does not own tokenId");
        
        _transfer(msg.sender, to, tokenId);
    }

    function _transfer(address from, address to, uint256 tokenId) internal{
        if(from==address(0)) {
            _tokenOwner[tokenId]= to;
            _ownersTokenBalance[to]++;
        }
        else{
            _tokenOwner[tokenId] = to;
            _ownersTokenBalance[to]++;
            _ownersTokenBalance[from]--;
        emit Transfer(msg.sender, to, tokenId);
            }
    }

    function getOwnedIds(address owner) public view returns(uint256[] memory){
        //do I need this internal balanceOf?
        uint256 arrayLength = _balanceOf(owner);
        uint[] memory c = new uint[](arrayLength);
        uint256 cIndex = 0;
            for(uint256 i = 0; i<kitties.length; i++){
                if(_tokenOwner[i]==owner){
                c[cIndex]= i;
                cIndex++;
                }
            }
        return c;
    }

    function getKitty(uint256 tokenId) public view returns(
    uint256 genes, 
    uint256 birthTime, 
    uint256 dadID, 
    uint256 momID, 
    uint256 generation,
    address owner){
   
    genes = kitties[tokenId].genes;
    birthTime = kitties[tokenId].birthTime;
    dadID = kitties[tokenId].dadID;
    momID = kitties[tokenId].momID;
    generation = kitties[tokenId].generation;
    owner = _tokenOwner[tokenId];
    }

    function _balanceOf(address owner) internal view returns (uint256 balance){
        balance = _ownersTokenBalance[owner];
    }
    function balanceOf(address owner) external view returns (uint256 balance){
        balance = _ownersTokenBalance[owner];
    }

    function totalSupply() external view returns (uint256 total){
        total = kitties.length;
    }

    function name() external view returns (string memory tokenName){
        tokenName = _name;
    }

    function symbol() external view returns (string memory tokenSymbol){
        tokenSymbol= _symbol;
    }

    function ownerOf(uint256 tokenId) external view returns (address owner){
        require(kitties.length>=tokenId && tokenId!=0, "This token does not exist");
        owner = _tokenOwner[tokenId];
    }
}