let inputDate=document.querySelector('.input_data')
let buttons=document.querySelectorAll('button')
console.log(inputDate);

console.log(buttons);

let arr=Array.from(buttons)
let string=" "
arr.forEach(button =>{
button.addEventListener('click',(e)=>{
  console.log(e.target.innerHTML);

  if (e.target.innerHTML=='=') {
    string=eval(string)
    inputDate.value=string
  }else if(e.target.innerHTML =='AC'){
    string =""
    inputDate.value=string
  }
  else if(e.target.innerHTML== "DEL"){
    string=string.substring(0,string.length-1)
    inputDate.value=string
  }else{
    string +=e.target.innerHTML
    inputDate.value=string
  }
  
})
})
