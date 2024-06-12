import { parse, format, isAfter, isBefore } from "date-fns";
import { fetchLocationOnInput, fetchForecastInfo } from "./fetchLogic";
import {
  manageCurrentWeatherValues,
  manageInfoBoxValues,
  manageFirstHourValues,
  manageSecondHourValues,
  manageThirdHourValues,
  manageFirstDayValues,
  manageSecondDayValues,
  manageThirdDayValues,
  showError
} from "./DOM";
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
import nightBg from "./img/nightBg.png";
import dayBg from "./img/dayBg.png";

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
  try {
    let weatherData = await fetchForecastInfo(query);
    if (weatherData === undefined) throw new Error("Location not found!");
    let locationInfo = weatherData.location;
    let currentInfo = weatherData.current;
    let forecastInfo = weatherData.forecast.forecastday;
    let nextHours = giveNextThreeHours(locationInfo.localtime, forecastInfo);
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
      forecastInfo[0].hour[parseHour(locationInfo.localtime)].chance_of_rain,
      currentInfo.humidity,
      currentInfo.wind_kph,
      currentInfo.uv
    );
    manageFirstHourValues(
      parseHour(nextHours[0].time),
      nextHours[0].condition.icon,
      nextHours[0].chance_of_rain,
      nextHours[0].temp_c
    );
    manageSecondHourValues(
      parseHour(nextHours[1].time),
      nextHours[1].condition.icon,
      nextHours[1].chance_of_rain,
      nextHours[1].temp_c
    );
    manageThirdHourValues(
      parseHour(nextHours[2].time),
      nextHours[2].condition.icon,
      nextHours[2].chance_of_rain,
      nextHours[2].temp_c
    );
    manageFirstDayValues(
       getDay(forecastInfo[0].date),
       forecastInfo[0].day.condition.icon,
       forecastInfo[0].day.mintemp_c,
       forecastInfo[0].day.maxtemp_c
    );
    manageSecondDayValues(
      getDay(forecastInfo[1].date),
      forecastInfo[1].day.condition.icon,
      forecastInfo[1].day.mintemp_c,
      forecastInfo[1].day.maxtemp_c
    );
    manageThirdDayValues(
      getDay(forecastInfo[2].date),
      forecastInfo[2].day.condition.icon,
      forecastInfo[2].day.mintemp_c,
      forecastInfo[2].day.maxtemp_c
    )
    return true;

  } catch(error) {
    showError(error);
    return false;
  }
  
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
  if (
    isAfter(parseData, formattedSunset) ||
    isBefore(parseData, formattedDawn)
  ) {
    return nightBg;
  } else {
    return dayBg;
  }
}

function giveNextThreeHours(time, forecastH) {
  const slot = 3;
  let hourNum = parseHour(time);
  let resultHoursInfo = [];
  if (hourNum < 21) {
    resultHoursInfo = forecastH[0].hour.slice(hourNum + 1, hourNum + 4);
    return resultHoursInfo;
  } else if (hourNum >= 21 && hourNum < 23) {
    let hDiff = 23 - hourNum;
    resultHoursInfo.push(
      ...forecastH[0].hour.slice(hourNum + 1, hourNum + 1 + hDiff)
    );
    resultHoursInfo.push(...forecastH[1].hour.slice(0, slot - hDiff));
    return resultHoursInfo;
  } else if (hourNum === 23) {
    resultHoursInfo.push(...forecastH[1].hour.slice(0, slot));
    return resultHoursInfo;
  }
}

function parseHour(time) {
  let parseData = parse(time, "yyyy-MM-dd HH:mm", new Date());
  let hourNum = parseInt(format(parseData, "HH"));
  return hourNum;
}

function getDay(date) {
  let parseData = parse(date, "yyyy-MM-dd", new Date());
  let day = format(parseData, "EEE");
  return day;
}
