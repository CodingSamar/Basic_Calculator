let input=document.getElementById("inputBox");

let button =document.querySelectorAll('button');

let string=" ";

let arr=Array.from(button);

arr.forEach((button)=>{
   button.addEventListener("click",(e)=>{      
    if(e.target.innerHTML == "=")
    {
         string=eval(string);
         input.value=string;
    }
   else if(e.target.innerHTML === "AC")
   {
        string=string.replace(string,"0");
       input.value=string;
   }
    
   else if(e.target.innerHTML === "Del")
   {     let len=string.length;
         string = string.substring(0,(len-1));
         input.value=string;
   }
    else{
        string +=e.target.innerHTML;
        input.value=string;
    }
   })
})
