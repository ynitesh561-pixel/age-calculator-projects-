

function calculateAge(){

let dob = document.getElementById("dob").value;

if(dob == ""){
alert("Please select Date of Birth");
return;
}

let birthDate = new Date(dob);
let today = new Date();

let years = today.getFullYear() - birthDate.getFullYear();
let months = today.getMonth() - birthDate.getMonth();
let days = today.getDate() - birthDate.getDate();

if(days < 0){
months--;
days += 30;
}

if(months < 0){
years--;
months += 12;
}


let ageText = "Your Age is ";

if(years > 0){
ageText += years + " Years ";
}

if(months > 0){
ageText += months + " Months ";
}

if(days > 0){
ageText += days + " Days";
}

document.getElementById("result").innerHTML = ageText;

}

function clearInput(){
document.getElementById("dob").value = "";
document.getElementById("result").innerHTML = "";
}