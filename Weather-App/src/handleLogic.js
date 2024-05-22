import { parse, format } from "date-fns";
import { fetchLocationOnInput, fetchForecastInfo } from "./fetchLogic";
import { manageCurrentWeatherValues, manageInfoBoxValues } from "./DOM";
import {
  createSuggestions,
  resetSuggestions,
  removeSpinLoader,
  showSpinLoader,
  showSubmitArrow,
  removeSubmitArrow,
  showSuggestions,
} from "./DOM";

export async function handleLocation(query) {
  let lData = await fetchLocationOnInput(query);
  await removeSubmitArrow();
  showSpinLoader();
  await resetSuggestions();
  if (lData.length === 0) return;
  lData.forEach((location) => {
    createSuggestions(location.name, location.region);
  });
  showSuggestions();
  await removeSpinLoader();
  showSubmitArrow();
}

export function inputCheck(query) {
  if (query.length === 0) {
    removeSpinLoader();
    removeSubmitArrow();
    return;
  } else if (query.length < 3) {
    removeSubmitArrow();
  } else {
    removeSpinLoader();
  }
}

export async function handleWeatherData(query) {
  let weatherData = await fetchForecastInfo(query);
  let locationInfo = weatherData.location;
  console.log(locationInfo);
  let currentInfo = weatherData.current;
  console.log(currentInfo);
  let forecastInfo = weatherData.forecast.forecastday;
  console.log(forecastInfo);
  manageCurrentWeatherValues(
    locationInfo.name,
    locationInfo.region,
    locationInfo.localtime,
    currentInfo.temp_c,
    forecastInfo[0].day.mintemp_c,
    forecastInfo[0].day.maxtemp_c,
    currentInfo.condition.text,
    currentInfo.condition.icon
  );
  manageInfoBoxValues(
    currentInfo.feelslike_c,
    currentInfo.precip_in,
    currentInfo.humidity,
    currentInfo.wind_kph,
    currentInfo.uv
  );
}

export function formatDateForCurrent(date) {
  let parseData = parse(date, "yyyy-MM-dd HH:mm", new Date());
  let formattedData = format(parseData, "EEEE, MMMM d, yyyy");
  return formattedData;
}

export function formatTimeForCurrent(date) {
  let parseData = parse(date, "yyyy-MM-dd HH:mm", new Date());
  let formattedTime = format(parseData, "HH:mm");
  return formattedTime;
}
