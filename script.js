const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const btn_res = document.querySelector("#reset")
const btn_search = document.querySelector("#search")
const texttie = document.querySelector("#text")
let toggle = false
var code = parseInt(author.innerHTML.split(" ")[0])
var le = parseInt(length.value)
var calc = code + le
ogauthor = author.innerText

btn_toggle.onclick = () => {
  if(!toggle){
  author.innerText = calc
  btn_toggle.innerText = "Show Author"
  toggle = true
}else{
  author.innerText = ogauthor
  btn_toggle.innerText = "Show Calculation"
    toggle = false
  }
}
btn_res.onclick = () =>{
  location.reload()
}
/*
btn_search.onclick = ()=>{
  let text = texttie.innerText.split(" ") 
  for(x of text){
    if(x.length >= le)
    x = "<span style ="color:" + color +">"" x + "</span>"
  }
}
*/


// more codes for Search and Reset buttons here
