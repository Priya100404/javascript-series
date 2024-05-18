//singleton
const obj=new Object()
// const user={}
// user.id="1233"
// user.name="same"
// user.islogged=false
// console.log(user)

const regularuser={
    email:"same@gmail.com",
    fullname:{
        userfullname:{
            first:"priya",
            middle:"kumari",
            last:"jha",
        }

    }
}
//console.log(regularuser.fullname.userfullname.first)
const ob1={
    1:'a',
    2:'b',

}
const ob2={
    3:'c',
    4:'d',
}
// const ob3={ob1,ob2}
//const ob3=Object.assign({},ob1,ob2);
// const ob3={...ob1,...ob2}
// const oobj={
//     {
//         id:'12',
//         name:89,
//     },
//     {
//         id:'12',
//         name:89,
//     },{
//         id:'12',
//         name:89,
//     },
    

// }
// console.log(oobj)
console.log(ob1)
console.log(Object.keys(ob1))// in list form we can iterate
console.log(Object.entries(ob1))
console.log(ob1.hasOwnProperty(1))
