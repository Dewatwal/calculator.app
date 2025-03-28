let buttons = document.querySelectorAll(".button");
let display = document.querySelector(".display");

let s = "";
buttons.forEach(element => {
  element.addEventListener("click",()=>{
    display.innerText = display.innerText + element.innerText;
     s = display.innerText;
     opEnalble();
  })
});

let operator = document.querySelectorAll(".operator");
operator.forEach(op=>{
  op.addEventListener("click",()=>{
     point.disabled = false;
    display.innerText = display.innerText+op.innerText;
    if(op.innerText=="*" || op.innerText == "/"){
      opDisable1();
    }
    else{
      opDisable2();
    }   
  })
})
const opDisable1 = ()=>{
  operator.forEach(op=>{
     if(op.innerText!='-'){
      op.disabled = true;
     }
  })
}
const opDisable2 = ()=>{
  operator.forEach(op=>{
    op.disabled= true;
  })
}
const opEnalble = ()=>{
 operator.forEach(op=>{
  op.disabled=false;
 })
}

let point = document.querySelector(".point");
point.addEventListener("click",()=>{
  opDisable2();
  point.disabled = true;
})


let clear = document.querySelector(".clear").addEventListener("click",()=>{
  display.innerText = "";
  s = "";
})
let Delete = document.querySelector(".Delete").addEventListener("click",()=>{
  display.innerText =  s.substring(0,s.length-1); 
  s = display.innerText;
})

function safeEval(expr) {
  return new Function(`return ${expr}`)();
}

let equal = document.querySelector(".equal");
equal.addEventListener("click",()=>{
  const result = safeEval(s); 
  display.innerText = result;
})
