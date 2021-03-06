const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');

const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'obtain clock venue syrup fix unable adjust raw host trash engage pyramid',
    'https://rinkeby.infura.io/v3/c523ed2b6e6d41a39da30e1f31dac95d'
);

const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
                    .deploy({data: '0x' + bytecode, arguments: ['deployed to rinkeby test network']})
                    .send({gas: '1000000', from: accounts[0]});
    console.log('Deployed to ', result.options.address);
    };

deploy();