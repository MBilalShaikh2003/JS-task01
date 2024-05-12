function submit(){
    const apikey="b83a3e124736a6f456532157f169dbfe";
    let city=document.getElementById("city").value || 'karachi';
    //let city='karachi';
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        console.log(data.main.temp)
        let temperature=document.getElementById("temperature");
        let roundedTemp=(data.main.temp-273).toFixed(2);
        temperature.innerText = `${roundedTemp}°C`
    
        let precipitation = data.weather[0].main; // Assuming weather data contains precipitation
        let humidity = data.main.humidity;
        let windSpeed = data.wind.speed;
        
        document.getElementById("precipitation").innerText = `Precipitation: ${precipitation}`;
        document.getElementById("humidity").innerText = `Humidity: ${humidity}%`;
        document.getElementById("windSpeed").innerText = `Wind Speed: ${windSpeed} m/s`;

        let weatherImage = document.getElementById("weatherImage");
        if (precipitation === "Rain") {
            weatherImage.src = "pics/rainy.jpeg"; 
        } 
        else if(precipitation === "Clouds"){
            weatherImage.src = "pics/cloudy.jpeg"; 
        }
        else if(precipitation === "Haze") {
            weatherImage.src = "pics/Haze.jpeg"; 
        } 
        else if(precipitation === "Clear"){
            weatherImage.src = "pics/clear.jpeg"; 
        }


    })
    .catch(error=>{
        console.log("error=",error)
    });
    
    
    //a.innerText="40c";
    }