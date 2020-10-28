const Kittycontract = artifacts.require("Kittycontract");
const Ownable = artifacts.require("Ownable");

module.exports = function(deployer) {
    deployer.deploy(Ownable);
    deployer.deploy(Kittycontract);
};
