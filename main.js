//creating the data for the obj using obj.create with enum , writable and methods baked in

const financialAdvisor = Object.create({
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
        BTC:3,
        ETH:7,
        DASH:2,
        WTC:60,
        NEO:20,
        writable:true,
        enumerable:false
    },
    worth: {
        BTC:7726.63,
        ETH:454.70,
        DASH:242.74,
        WTC:6.05,
        NEO:32.85,
        enumerable: true,
        writable:true
        
    },
    purchase: function () {
        
        console.log(worth);
    },
    
    
}
)

console.log(financialAdvisor)

    // purchase: {
    //     value: function purchStock(portfolio,purchased){
    //       return this.portfolio + purchased;
    //       console.log(purchStock('BTC',21));},
    //         enumerable: true,
    //         writable:true
           
           
    //     } 
    // })
    
    
        // sell:{ 
        //     value:function sellStock (x,y,z){
        //         return portfolio.BTC + "" }
                
        //       },})
        //       console.log(sellStock("BTC","22"))
            