

function akan(){
    var date = document.getElementById(date).value;
    var month = document.getElementById(month).value;
    var year=document.getElementById(year)


if (date===""&&date<1&&date>31) {
    alert("date between 1 and 31");
    
}
else if(month===""&&month<1&&month>12){
    alert("date must be between 1 and 12");
}
else if (year==="") {
    alert("you must enter a value year"  );

    
}
else{
    return false;
}
}
function generateName(){
    var date =document.getElementById("date").value;
    var month =document.getElementById("month").value;
    var yearOfBirth =document.getElementById("year").value;
    var century=year.slice(0,2);

    var yearOfBirth=year.slice(2,4);

    var genders =document.getElementById("gender")
    var gender =gender.options[genders.selectedIndex].text;

    var maleName =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var femaleNames=["Akosu","Adwoa","Abenaa","Akua","Yaa","Afua","Amna"];
    var dayOfweek=["sunday","monday",]

    


}
