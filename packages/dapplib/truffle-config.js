require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name release place million hope arch metal gesture'; 
let testAccounts = [
"0xe8a04c65997bf009d2398361b4ec5e8eef8f35fe096a826ff6ee2478b9aa1f79",
"0x62f8ba06d7fb22dcfe378b942f1eb9371e95c2121b0f9b18b426657884cd0e77",
"0x49a220162d77e10fc93c70b04251f9e63d4d2e98d58d3da5623ba154b63dfbcf",
"0x456143762f8b62e238c8611e1bc51310623482ca198aa3ee340be68fcc86d5a2",
"0x6634607d7d8cf3a6201dca1ac563781ba11a5e0b35c3576e708b25b45b66b954",
"0xb6790f7a82f129c3ebaff9e4573279e3004d644d10c6ae639c9854fe166765b0",
"0x391864db780be9f2360b697529de88c6f87d9e2c32267740d49ae485d2370d39",
"0xfd00f1cae380d3d161abaed0c3fa1e410c93eb10a281749389911b89e721a04b",
"0x68dc3f3e946897776b29319ad2f32204a41f96fa91af374579f512009ac8af9c",
"0xd007d0214bb3e1b7fe27e5afa778633bbb3557617291c5cda5b4e0e2d323c6ee"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

