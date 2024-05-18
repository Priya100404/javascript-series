const num=[1,2,3,4,5]

//const sumfun=num.reduce((sum,curval)=>sum+curval,0);
// const sumfun=num.reduce(function (sum,curval){
//     return sum+curval
// },0)
// console.log(sumfun)
const cart=[
    {
        name:"Js",
        price:99,
    },
    {
        name:"Java",
        price:802,

    },
    {
        name:"python",
        price:190
    }
]
const total=cart.reduce((sum,key)=>sum+key.price,0)
console.log(total)