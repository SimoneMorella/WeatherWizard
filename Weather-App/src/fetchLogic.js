
export async function fetchLocationOnInput(searchValue) {
    try {
      let response = await fetch(
        `http://api.weatherapi.com/v1/search.json?key=329fad4d4a1143e7bd2154311241705&q=${searchValue}`, {mode: "cors"}
      );
      let locationsData = await response.json();
      // to put them inside a select option box (datalist and option)
    //   console.log(locationsData)
      return locationsData;
    } catch (error) {
      console.log(error);
    }
  }
