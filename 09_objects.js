//singleton
//Object.
//object 
const  mysby=Symbol("key1")

const jsuser={
    name:"priya",
    age:9,
    [mysby]:"mykey",

}
//Object.freeze(jsuser)
// // console.log(jsuser.name)
// console.log(jsuser["name"])// best way

jsuser.greeting= function(){
    console.log("hello Js ");
}
jsuser.greeting2= function(){
    console.log(`hello Js user,${this.name}`);
}
console.log( jsuser.greeting())
console.log( jsuser.greeting2())


