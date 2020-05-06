require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn prosper harvest merry flock thought'; 
let testAccounts = [
"0xfa55dc94f2f7e631f78d5dfc87d77e23e416873822bcd731ca91c93b9993588a",
"0x5020586d6b8ee1d8529f38d6f39ad6b1e50706caf46c1dee21c4c60a3a17d20d",
"0x7a44e74eb5799049091c03e5bd4a042dc12fe3d033c5faac353a9915e89b949e",
"0xfdba8495a7d3b0ecf2479e4da78329bcc8976ebbed4cb6ce45a0e10999ba4981",
"0x1b21689c5f23e3b7c9c0f665e2b01bf4df682885eae0d45b6412de35db1e7a9e",
"0xe016b81e688cd72373d622092183a58b89397a6dc4c72413a55ed78f6f5ae54d",
"0xc8c3ef7d3a70ee20383e39a66b3cdc752d39711d69f1406b005796e3d9d9cf54",
"0xb9db5925d1bcbb76723cc1ad4bbc2ac8858b96d69078397077f47dd4031053d9",
"0x018cd81900b3a6bad94b10c9162dc5d586533339dd16378fa3961c5bdbfb0dc2",
"0xbc2db3b025346da9e27f2e29568559f55d0b2e251775a79b41f3a53ba2592d00"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
