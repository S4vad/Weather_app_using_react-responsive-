import React from "react";
import { IoSunny } from "react-icons/io5";
import { useEffect, useState } from "react";
import { API_WEATHER } from "../utils/constant";
import { CityWeatherSkelton } from "@/skeltons/CityWeatherSkelton";
import { getWeatherIcon } from "@/utils/weatherIconMap";

const cities = ["New York", "Copenhagen", "Ho Chi Minh City"];

export const CityWeather = () => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCountryCode = (country) => {
  if (country === "United States of America") return "US";
  if (country === "Denmark") return "Denmark";
  if (country === "Vietnam") return "Vietnam";
  return country;
};

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const promises = cities.map((city) =>
          fetch(
            `https://api.weatherapi.com/v1/current.json?key=${API_WEATHER}&q=${city}`
          ).then((res) => res.json())
        );
        const results = await Promise.all(promises);
        setDataList(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-w-[25%] flex flex-col justify-between  gap-4 text-gray-200 ">
      <div className="text-gray-300 text-lg">Other large cities</div>
      {loading ? (
        <CityWeatherSkelton />
      ) : (
       dataList.map((data, idx) => (
          <div
            key={idx}
            className="flex justify-between bg-slate-700 p-4 rounded-xl"
          >
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm font-semibold">
                  {getCountryCode(data?.location?.country)}
                </span>
                <span className="text-lg">{data?.location?.name}</span>
              </div>
              <div className="text-xs text-gray-400 font-semibold">
                {data?.current?.condition?.text}
              </div>
            </div>
            <div className="flex flex-col gap-1 items-end">
              {getWeatherIcon(data?.current?.condition?.text)}
              <span className="text-xl">
                {Math.round(data?.current?.temp_c)}°
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
