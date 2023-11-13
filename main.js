const btc = document.getElementById('bitcoin');
const eth = document.getElementById('ethereum');
const doge = document.getElementById('dogecoin');


const settings = {
    'async' : true ,
    'scrossDomain' : true,
    'url' :  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd',
    'method': 'GET',
    'header': {}
}
$.ajax(settings).done((res) => {
    btc.innerHTML = res.bitcoin.usd;
    eth.innerHTML = res.ethereum.usd;
    doge.innerHTML = res.dogecoin.usd;
})

