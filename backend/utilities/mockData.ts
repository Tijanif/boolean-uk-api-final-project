
const users = [
 {
  userName: 'Lars',
  email: 'lars@lars.com',
  password: '12345',
  wallet: [{

  }]
 },
  {
  userName: 'lotte',
  email: 'lotte@lotte.com',
  password: 'loije5',
  wallet: [{
   
  }]
 },
  {
  userName: 'ole',
  email: 'ole@ole.com',
  password: '12345123',
  wallet: [{
   
  }]
 },
  {
  userName: 'bob',
  email: 'bob@bob.com',
  password: '12345678',
  wallet: [{
   
  }]
 }
]

const coins = [ {
 name: 'BTC',
 value: 560,
 coinInWallet: []
},
{
 name: 'ETH',
 value: 760,
 coinInWallet: []
},
{
 name: 'Matec',
 value: 4567,
 coinInWallet: []
},
{
 name: 'Neo',
 value: 7442,
 coinInWallet: []
},
{
 name: 'Sol',
 value: 253,
 coinInWallet: []
},
{
 name: 'Doge',
 value: 9876,
 coinInWallet: []
},
]

const wallets = [{
 userId: '1'
},
{
 userId: '2'
},
{
 userId: '4'
},
{
 userId: '5'
},{
 userId: '2'
}
]

const coinsInWallet = [{
 walletId = ?,
 coinId = 2,

},
{
 walletId = ?,
 coinId = 3,

},
{
 walletId = ?,
 coinId = 4,

},
{
 walletId = ?,
 coinId = 5,

},]

module.exports = {
 users, coins, wallets, coinsInWallet
}