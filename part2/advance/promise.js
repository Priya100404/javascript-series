const promiseOne= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("promise consume")
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Asysn task 2')
        resolve()
    },1000)
}).then(function(){
    console.log('Asys 2 resolve')
})
const promiseTree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'chai',email:"chai@example.com"})

    },1000)
})
promiseTree.then(function(user){
    console.log(user)

})
const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:'priya',email:"chai@example.com"})
        }
        else{
            reject("something went wrong")
        }

    },1000)
})
promiseFour.
then((user)=>{
    console.log(user)
    return user.username

}).
then((username)=>{
    console.log(username)
}).
catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("rosolve or rejected")
})


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:'Javascript',pass:"Password@123"})
        }
        else{
            reject("ERROR: something went wrong")
        }

    },1000)
})
async function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response)
    }catch(e){
        console.log(e)
    }

}
consumePromiseFive()
// async function getalluser(){
//     try{
//         const response=await fetch('https://api.github.com/users')
        
//         const data=await  response.json()
//         console.log(data);

//     }
//     catch(error){
//         console.log("E : ,error");

//     }
// }
// getalluser()
fetch('https://api.github.com/users')
.then((response)=>{
    return response.json()

}).then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))