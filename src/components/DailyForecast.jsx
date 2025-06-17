import React from "react";
import { IoSunny } from "react-icons/io5";


export const DailyForecast = ({weather}) => {
    const forecastDays = weather?.forecast?.forecastday || [];
 
  console.log('teh wera',weather)
  return (
    <div className="space-y-4 w-full">
      <div className="text-gray-300 text-lg ">5-day forecast</div>
      {forecastDays.map((dayData,idx)=>{
        const { date, day } = dayData;
        const minTemp = day?.mintemp_c;
        const maxTemp = day?.maxtemp_c;
        const condition = day?.condition?.text;
        const iconUrl = day?.condition?.icon;
     return (
          <div
            key={date}
            className="flex items-center justify-between bg-slate-700 p-4 text-gray-200 rounded-xl gap-12"
          >
            <div className="w-1/6">{idx === 0 ? "Today" : new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}</div>

            <div className="flex items-center gap-1 w-1/4">
              {iconUrl ? (
                <img src={iconUrl} alt={condition} className="w-5 h-5" />
              ) : (
                <IoSunny />
              )}
              <span className="text-sm capitalize">{condition}</span>
            </div>

            <div className="flex items-center gap-2 w-2/4">
              <span className="text-sm">{minTemp}°</span>

              <div className="relative flex-1 h-2 bg-gray-500 rounded-full overflow-hidden">
                <div
                  className="absolute h-2 bg-blue-400 rounded-full"
                  style={{
                    left: `${((minTemp + 10) / 50) * 100}%`,
                    width: `${((maxTemp - minTemp) / 50) * 100}%`,
                  }}
                ></div>
              </div>

              <span className="text-sm">{maxTemp}°</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};