// function say(){
//     console.log("hello everyone")

// }
// // reference to object


// function add(n1,n2){//paramerter
//     // console.log(n1+n2);
//     let ans=n1+n2;

//     return ans;
    
// }
// const result=add(3,null)//argument
// console.log(result)

function loginmessage(username="sam"){ //default parameter
    if(username===undefined){
        console.log("Plese enter a user name");
        return;
    }
    return `${username} just logged in`
}
console.log(loginmessage("priye"))
console.log(loginmessage())