// for dark mode
const Btn = document.getElementById("Btn");
        const btn = document.getElementById("btn");
const calc = document.getElementById("calc");
Btn.addEventListener("click", ()=>{

    if(Btn.value === "Dark"){
        Btn.value = "Light";
    }else{
        Btn.value= "Dark";
    }
})
function toggleDarkMode() {
  const main = document.getElementById("body");
  if(main.style.background != "black"){
  main.style.background = "black";
  btn.style.background = "black";
  calc.style.color = "white";
  btn.style.color = "white";
}
else{
main.style.background = "white";
calc.style.color = "black";
btn.style.color = "black";
btn.style.background = "white";
}
}
// for calculator
let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string)
            document.querySelector('.input').value = string;
        }
        else if(e.target.innerHTML == 'C'){;
            string = "";
            document.querySelector('.input').value = string;
        }
        else if(e.target.innerHTML == '%'){
            string = string/100;
            document.querySelector('.input').value = string;
        }
        else if(e.target.innerHTML == 'sin'){
            string = Math.sin(string);
            document.querySelector('.input').value = string;
        }
        else if(e.target.innerHTML == 'cos'){
            string = Math.cos(string);
            document.querySelector('.input').value = string;
        }
        else if(e.target.innerHTML == 'del'){
            string = string.slice(0,-1)
            document.querySelector('.input').value = string;
            
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('.input').value = string;
        }
    })
})
