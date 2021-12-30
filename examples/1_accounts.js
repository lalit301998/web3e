const Web3 = require('web3')
const rpcURL = 'https://mainnet.infura.io/v3/b517a22380fe4dc8a1e63037aaaaf28a' // Your RCkP URL goes here
const web3 = new Web3(rpcURL)
const address = '0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8' // Your account address goes here
web3.eth.getBalance(address, (err, wei) => { balance = web3.utils.fromWei(wei, 'ether') })

