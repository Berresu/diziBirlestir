let dizi1=["Lorem"," ipsum"," dolor"," sit"," amet"," consectetur"," adipiscing"," elit"];
let dizi2=[" Sed"," do"," eiusmod"," tempor"," incididunt"," ut"," labore"," et"," dolore"," magna"," aliqua"];
let birlesim=dizi1.concat(dizi2);
let sonuc=document.getElementById("sonuc");
let button=document.getElementById("btnBirlestir");

button.addEventListener("click", ()=>{
    console.log(dizi1);
    console.log(dizi2);
    console.log(birlesim);
    sonuc.innerHTML=birlesim;
});
