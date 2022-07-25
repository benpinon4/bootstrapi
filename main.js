let doggyClick = document.querySelector("#doggyClick")

let doggyImg = document.querySelector("#doggyImg")




doggyClick.addEventListener("click", function(event){
    console.log("clicked")
    
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function(response){
            return response.json();
        }).then(function(data){

            doggyImg.src = data.message
        })

})





let weatherClick = document.querySelector("#weatherSubmit")
let cityInput = document.querySelector("#exampleInputCity")
let weatherReport = document.querySelector("#weatherImg")

weatherClick.addEventListener("click", function(event){
    event.preventDefault()
    let url = `https://goweather.herokuapp.com/weather/${cityInput.value}` 
    console.log(encodeURI(url))
    fetch(encodeURI(url))
        .then(function(response){
            return response.json()
        }) .then(function(data){
            weatherReport.innerText = `Current Temp: ${data.temperature}\nCurrent Windspeed: ${data.wind}\nCurrent Conditions: ${data.description}`
        })
       
})
