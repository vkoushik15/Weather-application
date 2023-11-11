const searchinput = document.querySelector("#sbar") 
const searchbtn = document.querySelector("#sicon")

const wicon = document.querySelector(".forecast")

async function checkweather(cityname){
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=bd970241225a7525c38f8a7941ba0429&units=metric`
const response = await fetch(apiurl)
var data = await response.json()
console.log(data)

document.querySelector(".cname").innerHTML=data.name
document.querySelector(".hvalue").innerHTML= data.main.humidity
document.querySelector(".temp").innerHTML= data.main.temp +"°C"
document.querySelector(".wvalue").innerHTML=data.wind.speed +"kmph"
if(data.weather[0].main == "Clouds"){
    wicon.src ="./cloudy.png"
}
if(data.weather[0].main == "Rain"){
    wicon.src ="./rainy weather.png"
}
if(data.weather[0].main == "Snow"){
    wicon.src ="./snow.png"
}
if(data.weather[0].main == "Clear"){
    wicon.src ="./sunny.png"
}
}

searchbtn.addEventListener("click",()=>{

    const cityname = searchinput.value
    checkweather(cityname)
    
    })