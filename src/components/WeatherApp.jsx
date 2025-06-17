import React, { useState } from "react";
import { Nav } from "./Nav";
import { CurrentWeather } from "./CurrentWeather";
import { HourlyForecast } from "./HourlyForecast";
import useFetch from "../hooks/useFetch";
import { API_WEATHER } from "../utils/constant";
import { CurrentWeatherSkeleton } from "../skeltons/CurrentWeatherSkelton";
import { HourlyForecastSkeleton } from "../skeltons/HourlyForecastSkeltons";

export const WeatherApp = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [city, setCity] = useState("London");

  const handleSearch = () => {
    if (searchQuery.length > 0) {
      setCity(searchQuery);
    }
  };

  const {
    data: currentWeather,
    loading: currentLoading,
    error: currentError,
  } = useFetch(
    city
      ? `https://api.weatherapi.com/v1/current.json?key=${API_WEATHER}&q=${city}`
      : null
  );

  const {
    data: forecastData,
    loading: forecastLoading,
    error: forecastError,
  } = useFetch(
    city
      ? `https://api.weatherapi.com/v1/forecast.json?key=${API_WEATHER}&q=${city}&days=5`
      : null
  );

  //  If either call failed (e.g., "No matching location found") when searching need to  handle
  const hasError = currentError || currentWeather?.error || forecastError || forecastData?.error;
  const errorMessage =
    currentError?.message ||
    currentWeather?.error?.message ||
    forecastError?.message ||
    forecastData?.error?.message;

  return (
    <div className="space-y-10 p-4">
      <Nav
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />

      {hasError ? (
        <div className="text-red-500 bg-slate-700 p-4 rounded-xl w-[30%]">
          {errorMessage || "Unable to load weather data."}
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {currentLoading ? (
            <CurrentWeatherSkeleton />
          ) : (
            <CurrentWeather weather={currentWeather} />
          )}

          {forecastLoading ? (
            <HourlyForecastSkeleton />
          ) : (
            <HourlyForecast weather={forecastData} />
          )}
        </div>
      )}
    </div>
  );
};
