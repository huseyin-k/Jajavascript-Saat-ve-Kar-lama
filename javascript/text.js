let userName = prompt("Lütfen isminizi yazınız:")

let info = document.querySelector('#myName')

info.innerHTML = `${userName}`



function day(){

var bugun = new Date();

var saat = bugun.getHours() + ":" + bugun.getMinutes() + ":" + bugun.getSeconds()


var d = new Date();
var dayName= [" Pazar"," Pazartesi"," Salı"," Çarşamba"," Perşembe"," Cuma"," Cumartesi"];
document.getElementById("myClock").innerHTML = saat + dayName[d.getDay()];
}
setInterval(day,1000);




