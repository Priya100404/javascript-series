const rancolo=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];

    }
    return color;
};
const changebG=function(){
    document.body.style.backgroundColor=rancolo();
    
}
let intevalid;

const startchangingcolor=function(){
    if(!intevalid){
        intevalid=setInterval(changebG,1000);
    }

}
const stopchangingcolor=function(){
    clearInterval(intevalid)
    intevalid=NULL

}
document.querySelector("#start").addEventListener('click',startchangingcolor)
document.querySelector('#stop').addEventListener('click',stopchangingcolor)

