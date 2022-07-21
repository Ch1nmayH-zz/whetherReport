'use strict'


let cityP = document.getElementById('cName');
let cWeather = document.getElementById('weather');
let temp = document.getElementById('temp');

function fetchData(){

    let city = document.getElementById('city').value;
    // let url = 'https://api.cod.pm';
    let url = 'https://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=6a57febba0722d094c4edfca00b4df0a'
    fetch(url)
    .then(response => response.json())
    .then(data => {
       let cName = data['name'];
       let cTemp = Math.floor(data['main']['temp'] - 274.15);
       let weather =  data['weather'][0]['description'];
       
        
       cityP.textContent = cName;
       temp.textContent = cTemp + ' degree C';
       cWeather.textContent = weather;

        

       
    })
    .catch(err => alert("Wrong City Name"));

    

}






