let stocks = {
    Fruit :["starwberry","Orange","bannana","apple"],
    Liquid:["Water","Ice"],
    Holder:["Cone","cup","Stick"],
    Toppings:["Chocolate","Peanuts"]

};
let shop_open = true;

//create promise

let order =(time,work)=>{
       return new Promise( (resolve,reject)=>{
              if (shop_open){
                  setTimeout(()=>{
                    resolve(work);
                 }, time);
                   
              }
              else{
                            reject(console.log("Our shop is closed"));
              }
       }
       ) 
}

order(2000, console.log(`${stocks.Fruit[0]} was selected`) )

//promise chaining
.then(()=>{
    return order (0000,()=>console.log("Productin has started"))
})

     .then(()=>{
        return order (2000,console.log("The fruit chopped"))
    }) 
  
    .then (()=>{
        return order (2000,console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`))
    })

    .then(()=>{
        return order(1000,console.log("The machine started"))
    })
    .then(()=>{
        return order(2000,console.log(` Ice cream placed on ${stocks.Holder[0]}`))
    })
    .then(()=>{
        return order(3000,console.log(`${stocks.Toppings[0]}was selected`))
    })
    .then(()=>{
        return order (1000,console.log("Icecream served"))
    })
    
    //catch error.
    .catch(()=>{
        console.log("customer left")
    })
    .finally(()=>{
        console.log("The day ended successfully")
    })