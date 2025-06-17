import React from "react";
import { getWeatherIcon } from "../utils/weatherIconMap"; // import your util

export const HourlyForecast = ({ weather }) => {
  if(!weather){
    return
  }
  const hours = weather?.forecast?.forecastday?.[0]?.hour || [];
  const threeHourData = hours.filter((_, idx) => idx % 3 === 0);

  return (
    <div className="flex gap-4 flex-wrap">
      {threeHourData.map((hour, idx) => (
        <div
          key={idx}
          className="bg-slate-700 flex flex-col items-center text-white rounded-xl justify-center px-2 gap-2 md:px-4 min-w-[95px]"
        >
          <div className="text-sm">{hour.time.split(" ")[1]}</div>
          <div className="w-full h-0.5 bg-gray-600"></div>
          {getWeatherIcon(hour.condition.text)}
          <span className="text-xs text-slate-400">{hour.condition.text}</span>
          <div className="text-2xl font-semibold">{hour.temp_c}°</div>
        </div>
      ))}
    </div>
  );
};
