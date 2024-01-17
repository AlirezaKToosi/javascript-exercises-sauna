window.alert("Welcome to our Sauna");
let temperaturC=0
,temperaturF=0;
do {
  temperaturF = window.prompt("please enter the heater temperature");
  temperaturC = (temperaturF - 32) / 1.8;
  if (temperaturC < 73) {
    temperaturF = window.alert("Entered temprature is too cold.");
  } else if (temperaturC > 77){
    temperaturF = window.alert("Entered temprature is too hot.");
  }
} while (temperaturC > 77 || temperaturC < 73);
window.alert("You logged in");
