let date=new Date();
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toISOString())
// console.log(date.toLocaleDateString())
// console.log(typeof date)  //date is object
//creation of date object
let dat=new Date(2024,4,2)
// console.log(dat.toDateString())

let timestamp=Date.now()
//console.log(timestamp)
//console.log(Math.floor(Date.now()/1000))
let newdate=new Date()
newdate.toLocaleString('default',{
    weekday:'long'
})



