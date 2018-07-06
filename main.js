function LoadJson(file,callback){
var a=new XMLHttpRequest();
a.overrideMimeType("application/json");
a.open("GET",file,true);
a.onreadystatechange=function(){
  if(a.readyState===4 && a.status="200"){
    callback(a.responseText);
    console.log(a.response);
  }}
a.send();
}
LoadJson("data.json",function(text){
let data=JSON.parse(text);
console.log(data);
})
var right=document.getElementById('right');
var career=document.createElement('h4');
career.textContent="Career Object :";
career.appendchild(document.createElement("HR"))
function career(Aadhi) {
  var cop=document.createElement("p");
cop.textContent=Aadhi.co;
career.appendChild(cop);
}
right.appendChild(career);

let a=10;
for (x in y){
  var =20;
  console.log(a);
}
