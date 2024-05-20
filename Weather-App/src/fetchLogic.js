export async function fetchLocationOnInput(searchValue) {
  try {
    let response = await fetch(
      `http://api.weatherapi.com/v1/search.json?key=329fad4d4a1143e7bd2154311241705&q=${searchValue}`,
      { mode: "cors" }
    );
    let locationsData = await response.json();
    return locationsData;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchForecastInfo(search) {
    try {
      let response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=329fad4d4a1143e7bd2154311241705&q=${search}&days=3`,
        { mode: "cors" }
      );
      let weatherData = await response.json();
      console.log(weatherData);
      //insert the weather Data inside a box
    } catch (error) {
      console.log(error);
    }
  }
