
let text = document.getElementById("heading");
const btn = document.getElementById("button");
let text2 = "PW skills";
console.log(text.innerText);
console.log(btn);

function change(){
let temp = text2;

text2=text.innerText;
text.innerText=temp;

}

btn.addEventListener("click",change);







