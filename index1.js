let userScore=0;
let compScore=0;
let userScorepar=document.querySelector("#user-score");
let compScorepar=document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");
const printmsg=document.querySelector("#msg");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log(userchoice);
        compchoice(userchoice);
    })
})

const compchoice=(userchoice)=>{
    const allchoice=["rock","paper","scissor"];
    let index=Math.floor(Math.random()*3);
    const compch=allchoice[index];
    let userwin=true;
    if(compch===userchoice){
        showdrawmsg();
    }
    else{
     if(userchoice==="rock"){
        userwin= compch==="paper" ? false : true;
    }
    else if(userchoice==="paper"){
        userwin= compch==="scissor" ? false :true;
    }
    else{
        userwin= compch==="rock" ? false:true;
    }
    showallmsg(userwin);
    }
}
const showdrawmsg=()=>{
    console.log("Match was Draw!! Try again");
    printmsg.innerText="Match was Draw!! Try again";
    printmsg.style.background="green";

}
const showallmsg=(userwin)=>{
    if(userwin){
        userScore++;
        console.log("You Win!!");
        printmsg.innerText="You Win!!"
        printmsg.style.background="orange";
        userScorepar.innerText=userScore;
    }
    else{
        compScore++;
        console.log("You LOOSE");
        printmsg.innerText="You Loose!!"
        printmsg.style.background="red";
        compScorepar.innerText=compScore;
    }
}