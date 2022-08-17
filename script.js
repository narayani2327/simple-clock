let monday="The bad news is time flies. The good news is you’re the pilot.", tuesday="No man goes before his time. Unless the boss leaves early.", wednesday="Time and tide wait for no man.",thrusday="The two most powerful warriors are patience and time.", friday="The most precious resource we all have is time.", saturday="Time has a wonderful way of showing us what really matters.",sunday="Time is what we want most, but what we use worst."
let time=document.querySelector(".time")
let background=document.querySelector(".container")
let quote=document.querySelector(".quote")
setInterval(()=>{
    let d = new Date()
    time.innerHTML=d.toLocaleTimeString()
},1000)
function hour_count(){
    let hour = new Date().getHours()
    if(hour<12){
        document.querySelector(".greet").innerHTML="Good Morning"
        background.style.backgroundImage = "url('./assets/morning.jpg')";
    }
    else if(hour>=12 && hour<16){
        document.querySelector(".greet").innerHTML="Good Afternoon"
        background.style.backgroundImage = "url('./assets/afternoon.jpg')";
    }
    else if(hour>=16 && hour<21){
        document.querySelector(".greet").innerHTML="Good Evening"
        background.style.backgroundImage = "url('./assets/evening.jpg')";
    }
    else{
        document.querySelector(".greet").innerHTML="Good Night"
        background.style.backgroundImage = "url('./assets/night.jpg')";
    }
}
hour_count()
setInterval(hour_count(),1000*60)
let day = new Date().getDay()
switch(day){
    case 0:quote.innerHTML=sunday
        break
    case 1:quote.innerHTML=monday
        break
    case 2:quote.innerHTML=tuesday
        break
    case 3:quote.innerHTML=wednesday
        break
    case 4:quote.innerHTML=thrusday
        break
    case 5:quote.innerHTML=friday
        break
    case 6:quote.innerHTML=saturday
        break
}