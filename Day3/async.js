//console.log("hey");
//synchronously 

// console.log("hey")
// console.log("there")
// console.log("Welcome to my ")
// console.log("100 days code")
// console.log("Challenge")
// console.log("Hope you like it")

//Asynchronous function
// console.log("hey")
// console.log("there")
// setTimeout(()=>{
// console.log("Welcome to my ")
// },3000);
// console.log("100 days code")
// console.log("Challenge")
// console.log("Hope you like it")

//call back function

function one(call_two) {
    call_two();

console.log("Step1 is done and call step2")
}

function two(){
 console.log("Step2")
}
one(two);
//call back
let stocks = {
    Fruit :["starwberry","Orange","bannana","apple"],
    Liquid:["Water","Ice"],
    Holder:["Cone","cup","Stick"],
    Toppings:["Chocolate","Peanuts"]

};








//order
let order = (Fruit_name,Holder_name,call_placement)=>{
    //console.log("Order placed please call production")

setTimeout(()=>{
        console.log(`${stocks.Fruit[Fruit_name]}was selected` )
        setTimeout(()=>{
              console.log(`${stocks.Holder[Holder_name]}was selected` )
        },7000)
       call_placement();
}, 2000 );

}
//placement of icecream
let placement = ()=>{
 //console.log("order received ,starting production")
 setTimeout(()=>{
           console.log("Production started")
           setTimeout(()=>{
            console.log("Fruit has chopped")

            setTimeout(()=>{
                    console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`)

                      setTimeout(()=>{
                        console.log("Machine has started")
                    },1000);
            },1000)
        },2000)

        setTimeout(()=>{
            console.log(`${stocks.Toppings[0]} was added`)
        },8000)

 }, 0000);
 
 
}
order(0,0,placement);


