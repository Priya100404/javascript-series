//Immediately Invoke Function Express()
(function chai(){
    console.log("DB connected");
})();
(function chaiur(){
    console.log("DB connected");
})(); //error pata nahi hai kaha rokna hai jab do iife function hai use semicolo at end to seprate the function


//( defination)(excution ) or
 ((name)=>{
    console.log(`Db connected two${name}`)
 })("priya"); // crete  problem
//this is handle global scope ke pollution se probelem hoti hai to us polllution ko hatane ke liye