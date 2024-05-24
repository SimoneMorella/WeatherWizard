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
        `http://api.weatherapi.com/v1/forecast.json?key=329fad4d4a1143e7bd2154311241705&q=${search}&days=4`,
        { mode: "cors" }
      );
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}, ${response.statusText}`)
      }
      let weatherData = await response.json();
      return weatherData;
      // catch errors, like if I don't get nothing or smth 
      // maybe then I put in the handle func how to do
    } catch (error) {
      console.log(error);
    }
  }
