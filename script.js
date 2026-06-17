let btns=document.querySelectorAll('.btn')
let msg=document.getElementById("value")
let clear=document.getElementById("clear")
let enter=document.getElementById("enter")
let exp="";
let stack=[]
let operators=['+','-','/','*']
let text='';
for(let btn of btns)
{
    btn.addEventListener("click",function(){
    msg.innerText+=btn.innerText
    // console.log(1,stack)
    exp+=btn.innerText;
    
    console.log(stack,exp);
})

}


clear.addEventListener("click",function(){
    msg.innerText=""
    exp="";
    stack=[]
    console.log(stack,exp);
})


enter.addEventListener("click",function(){
    try {
        let result = eval(exp);

        msg.innerText = result;
        exp = result.toString();
    }
    catch {
        msg.innerText = "Error";
        exp = "";
    }
    
})
console.log(stack)

let back=document.getElementById("last_remove")

back.addEventListener("click",function(){
    exp=exp.slice(0,exp.length-1);
    msg.innerText=exp;
})
