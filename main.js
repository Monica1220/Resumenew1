function LoadJson(file,callback){
  var a=new XMLHttpRequest();
  a.overrideMimeType("application/json");
  a.open("GET",file,true);
  a.onreadystatechange=function(){
    if(a.readyState===4 && a.status=="200"){
      callback(a.responseText);
    }
  }
  a.send();
}

LoadJson("data.json",function(text){
let data=JSON.parse(text);
console.log(data);
careerObject(data.basics);
education(data.educationQual);
technicalskills(data.tech);
achievements(data.achievements);
console.log(data.achieve);
})
var right=document.getElementById('right');

function careerObject(careerObj){

var career=document.createElement('h4');
career.textContent="Career Object:";
career.appendChild(document.createElement("hr"));
var para=document.createElement("p");
para.textContent=careerObj.content;
right.appendChild(career);
right.appendChild(para);
}
function education(edu){
var Educational=document.createElement("h4");
Educational.textContent="Educational Qualifications";
Educational.appendChild(document.createElement("hr"));
right.appendChild(Educational);
var para1=document.createElement("p");
var li="";
for(i in edu){
  li+=edu[i].name + edu[i].Inst + "<br>";
}
para1.innerHTML=li;

right.appendChild(para1);
}
function technicalskills(tec){
  var technical=document.createElement("h4");
  technical.textContent="Technical Skills";
  technical.appendChild(document.createElement("hr"));
  right.appendChild(technical);
  var para2=document.createElement("p");
  var l2="";
  for(j in tec){
    l2+=tec[j].name + tec[j].value + "<br>";
  }
  para2.innerHTML=l2;
  right.appendChild(para2);
}
function achievements(achieve){
  var achievement=document.createElement("h4");
  achievement.textContent="achievements";
  achievement.appendChild(document.createElement("hr"));
  right.appendChild(achievement);
  var para3=document.createElement("p");
  para3.textContent=achieve.details;

  right.appendChild(achievement);
  right.appendChild(para3);
}
