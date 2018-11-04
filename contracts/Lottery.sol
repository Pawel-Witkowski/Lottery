pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address[] public players;
    
    function Lottery() public {
        manager = msg.sender;
    }
    
    function enter() public payable {
        require(msg.value >= 0.01 ether);
        players.push(msg.sender);
    }
    
    function random() public view returns (uint256) {
        return uint256(keccak256(block.difficulty, now, players));
    }
    
    function pickWinner() public restricted {
        
        uint index = random() % players.length;
        players[index].transfer(this.balance);
        players = new address[](0);
    }
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
}