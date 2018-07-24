//creating the data for the obj using obj.create with enum , writable and methods baked in

const financialAdvisor = Object.create({},{
    company: {
        value: "Wills Money Managenment",
        enumerable: true,
        writable:true
    },
    
    specialty: {
        value: "Crypto",
        enumerable: true,
        writable:true
    },
    name: {
        value: "Larry Parnell",
        enumerable: true,
        writable:true
    },
    portfolio: {
       value: [],
        writable:true,
        enumerable:false
    },
    worth: {
        value:function(){
            let worth = this.portfolio.reduce((accumulator, coin) => {
                return accumulator + (coin.price * coin.quantity);
            }, 0);
            return worth;
        },
          enumerable: false,
            writable:true
             } ,
    purchase: {value: function(symbol, amount, price){
        let newPurchase = {
            symbol: symbol,
            amount: amount,
            price: price,
            sold: false
        };
            enumerable: false,
        this.portfolio.push(newPurchase)},

          sell: {
        value: function(symbol, amount, price){

            let checkCoin = this.portfolio.find(coin => {
                return coin.symbol === symbol && coin.sold === false;
            })
            
            if(checkCoin.amount < amount){
                alert(`You aint that rich in ${symbol}!`);
            }else{
                let index = this.portfolio.indexOf(checkCoin);
    
                this.portfolio.splice(index, 1);
    
                let soldCoins = {
                    symbol: symbol,
                    amount: amount,
                    price: price,
                    sold: true
                }
    
                let updatedCoin = {
                    symbol: checkCoin.symbol,
                    amount: checkCoin.amount - soldCoins.amount,
                    price: soldCoins.price,
                    sold: false
                }
    
                this.portfolio.push(soldCoins, updatedCoin);
            }

        },
        enumerable: false
    }
}}
);
financialAdvisor.purchase("BTC", 3, 7425);
financialAdvisor.purchase("ETH", 12, 479);
console.log(financialAdvisor);

financialAdvisor.purchase("DASH", 66, 254);
financialAdvisor.sell("LTC", 25, 87);
