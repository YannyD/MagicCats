pragma solidity ^0.5.12;
import "./IERC721.sol";
import "./Ownable.sol";
import "./IERC721Receiver.sol";

contract Kittycontract is IERC721, Ownable{

    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Birth(address owner, uint256 kittenId, uint256 momId, uint256 dadId, uint256 genes);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);

    //do I need to include an IERC165 in the "is" portion of the contract title?
    bytes4 private constant _INTERFACE_ID_ERC721 = 0x80ac58cd;
    bytes4 private constant _INTERFACE_ID_ERC165 = 0x01ffc9a7;

    uint16 private constant gen0Limit = 10;
    string private constant _name= "Kitty Coin";
    string private constant _symbol = "KTC";
    uint256 public gen0Counter;
    bytes4 internal constant MAGIC_ERC721_RECEIVED = bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"));
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
    //approval to transfer one of my tokens
    mapping(uint256 => address) public kittyIndexApproved;    

    //approval for all the tokens owned by an address
    mapping(address =>mapping(address=>bool)) private _operatorApprovals;  //first input is the token owner's address

    function supportsInterface(bytes4 _interfaceId) external view returns(bool){
        return (_interfaceId == _INTERFACE_ID_ERC721 || _interfaceId ==_INTERFACE_ID_ERC165);

    }

    function _isApprovedOrOwner(address _spender, address _from, address _to, uint256 _tokenId) internal view returns(bool){
        require(_tokenId<kitties.length,"That cat doesn't exist yet... Did you come here from the future?!");
        require(_to != address(0), "Don't send that cat into the oblivion, please");
        require(_owns(_from, _tokenId), "This guy doesn't own that token");
        //spender is from OR spender is approved OR spender is operator for from
        return (_spender == _from 
        || _approvedFor(_spender, _tokenId)
        || isApprovedForAll(_from, _spender));
    }


    function transferFrom(address _from, address _to, uint256 _tokenId) external{
        //does this fit here?
        require(_isApprovedOrOwner(msg.sender, _from, _to, _tokenId));
        _transfer(_from, _to, _tokenId);
   }

    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes memory _data) internal{
        require(_isApprovedOrOwner(msg.sender, _from, _to, _tokenId));
        _safeTransfer(_from, _to, _tokenId, _data);
    }

    function safeTransferFrom(address _from, address _to, uint256 _tokenId) external{
        safeTransferFrom(_from, _to, _tokenId, "");
    }


    function _safeTransfer(address _from, address _to, uint256 _tokenId, bytes memory _data) internal {
        _transfer(_from, _to, _tokenId);
        //why does the require come after?
        require(_checkERC721Support(_from, _to, _tokenId, _data));
    }

    function approve(address _approved, uint256 _tokenId) public{
        require(_owns(msg.sender, _tokenId));
        _approve(_approved, _tokenId);
        emit Approval(msg.sender, _approved, _tokenId);
    }

    function setApprovalForAll(address _operator, bool _approved) external{
        require(_operator !=msg.sender, "Why are you ding this?  You already have access to your tokens");
        _operatorApprovals[msg.sender][_operator]=_approved;
        emit ApprovalForAll(msg.sender, _operator, _approved);
    }

    function getApproved(uint256 _tokenId) external view returns (address){
        require(_tokenId<kitties.length, "That token doesn't exist, bro");
        
        return kittyIndexApproved[_tokenId];
    }

    function isApprovedForAll(address _owner, address _operator) public view returns (bool){
        return _operatorApprovals[_owner][_operator];
    }

    function createKittyGen0(uint256 _genes) public onlyOwner returns(uint256){
    require(gen0Counter<gen0Limit, "The garden of eden has closed");
    gen0Counter ++;
    return _createKitty(0, 0, 0, _genes, msg.sender);
    }

    function transfer(address to, uint256 tokenId) external{
        require(to != address(0), "Don't send your token into the endless abyss");
        require(to != address(this), "Don't send your token to this address");
        require(_tokenOwner[tokenId]==msg.sender, "Sender does not own tokenId");
        
        _transfer(msg.sender, to, tokenId);
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

    function _transfer(address from, address to, uint256 tokenId) internal{
        _tokenOwner[tokenId]= to;
        _ownersTokenBalance[to]++;
        if(from!=address(0)) {
            _ownersTokenBalance[from]--;
            delete kittyIndexApproved[tokenId];
        }

            emit Transfer(from, to, tokenId);
    }

    function _balanceOf(address owner) internal view returns (uint256 balance){
        balance = _ownersTokenBalance[owner];
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

    //does it cost more or less gas to use internal functions like _owns and _approve within external functions?
    //I am not quite sure why we do this instead of simply writing require(_tokenOwner[_tokenId]==msg.sender); to check ownership
    function _owns(address _claimant, uint256 _tokenId) internal view returns (bool){
        return _tokenOwner[_tokenId]==_claimant;
    }
    function _approve(address _approved, uint256 _tokenId) internal{
        kittyIndexApproved[_tokenId]=_approved;
    }

    function _approvedFor(address _claimant, uint256 _tokenId) internal view returns(bool){
        return kittyIndexApproved[_tokenId] == _claimant;
    }

 

    function _checkERC721Support(address _from, address _to, uint256 _tokenId, bytes memory _data) internal returns(bool){
        if(!_isContract(_to)){
            return true;
        }

        //onERC721Recieved execution in the _to contract and check return value
        bytes4 returnData = IERC721Receiver(_to).onERC721Received(msg.sender, _from, _tokenId, _data);
        return returnData == MAGIC_ERC721_RECEIVED;
    }

    function _isContract(address _to) view internal returns(bool){
        uint32 size;
        assembly{
            size:=extcodesize(_to)
        }
        return size>0;
    
    }

}