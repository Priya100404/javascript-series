// const user={
//     name:"Priya",
//     price:99,
//     welmes: function(){
//         console.log(`${this.name},Welcome to website`);
//         console.log(this)
//     }
// }
// user.welmes()
// user.name="sam"
// user.welmes()
// console.log(this)
// function chai(){
//     NAME:"PRYIYA"
//     console.log(this.NAME);
// }
// chai()
// const chai= function(){
//     NAME:"PRYIYA"
//     console.log(this.NAME);
// }
// //arrow function
// const chai=()=>{
//     NAME:"PRIYA"
//     console.log(this);
// }
// chai()


// const addtwo=(n1,n2)=>{//norma return 
//     return n1+n2
// }
// console.log(addtwo(3,4))

//implicit return
const addtwo=(n1,n2)=> n1+n2
//console.log(addtwo(3,4))

//curly use kiya to parenthesis use karna hoga ( ) me nahi return use karna
const addt=(n1,n2)=>({name:"priya"})
console.log(addt())

