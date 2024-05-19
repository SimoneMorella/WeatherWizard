import "./index.css";

let search = "Barletta";

async function fetchCurrentWeatherData(search) {
  try {
    let response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=329fad4d4a1143e7bd2154311241705&q=${search}`
    );
    let weatherData = await response.json();
    console.log(weatherData);
    //insert the weather Data inside a box
  } catch (error) {
    console.log(error);
  }
}

async function fetchLocationOnInput(searchValue) {
  try {
    let response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=329fad4d4a1143e7bd2154311241705&q=${searchValue}`
    );
    let locationsData = await response.fetch();
    // to put them inside a select option box (datalist and option)
    console.log(locationsData)
  } catch (error) {
    console.log(error);
  }
}

// forecast function gives also current so use only 1 function
// 

async function fetchForecastInfo(search) {
    try {
        let response = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=329fad4d4a1143e7bd2154311241705&q=${search}&days=3`
        );
        let weatherData = await response.json();
        console.log(weatherData);
        //insert the weather Data inside a box
      } catch (error) {
        console.log(error);
      }
}



fetchForecastInfo(search);
