const  num=[1,2,3,4,5,6,7,34]
//  const nums=num.map((num)=> num+10)
//chaining 
//const nums=num.map((num)=>num*10).map((num)=>num+1)
const nums=num.map((num)=>num*10).filter((num)=>num>=40)
console.log(nums)