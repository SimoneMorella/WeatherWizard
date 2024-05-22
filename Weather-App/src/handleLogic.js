import { parse, format, isAfter, isBefore } from "date-fns";
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
  changeWBoxBg,
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
  changeWBoxBg(
    checkTimeForBg(
      locationInfo.localtime,
      forecastInfo[0].astro.sunset,
      forecastInfo[0].astro.sunrise
    )
  );
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

function checkTimeForBg(time, sunsetH, dawnH) {
  const parseData = parse(time, "yyyy-MM-dd HH:mm", new Date());
  const formattedSunset = parse(sunsetH, "hh:mm a", new Date());
  const formattedDawn = parse(dawnH, "hh:mm a", new Date());
  console.log(parseData, formattedSunset, formattedDawn)
  if (
    isAfter(parseData, formattedSunset) ||
    isBefore(parseData, formattedDawn)
  ) {
    return "bg-nightBg";
  } else {
    return "bg-dayBg";
  }
}
