import React, { useContext } from "react";
import { getWeatherIcon } from "../utils/weatherIconMap";
import { UnitContext } from "@/utils/unitContext";


export const HourlyForecast = ({ weather }) => {
  const {unit} = useContext(UnitContext)
  if(!weather){
    return
  }
  const hours = weather?.forecast?.forecastday?.[0]?.hour || [];
  const threeHourData = hours.filter((_, idx) => idx % 3 === 0);

  return (
    <div className="flex gap-8 flex-wrap">
      {threeHourData.map((hour, idx) => (
        <div
          key={idx}
          className="bg-slate-700 flex flex-col items-center text-white rounded-xl justify-center py-2 px-2 gap-2 md:px-4 md:py-3 min-w-[95px]"
        >
          <div className="text-sm">{hour.time.split(" ")[1]}</div>
          <div className="w-full h-0.5 bg-gray-600"></div>
          {getWeatherIcon(hour.condition.text)}
          <span className="text-xs text-slate-400">{hour.condition.text}</span>
          <div className="text-2xl font-semibold">{unit === "C" ? `${hour.temp_c}°` : `${hour.temp_f}°`}</div>
        </div>
      ))}
    </div>
  );
};
