import React from "react";
import { IoSnow } from "react-icons/io5";
import { IoMdSpeedometer } from "react-icons/io";
import { getWeatherIcon } from "@/utils/weatherIconMap";

export const CurrentWeather = ({weather}) => {
  if(!weather){
    return;
  }
  console.log('the werather',weather)
  const localtime=weather.location.localtime; //code for split and take only time
  const time= localtime.split(" ")[1]

  const condition = weather.current.condition.text;
  const Icon = getWeatherIcon(condition); 
  return (
    <div className="bg-slate-700 p-2 md:p-4 rounded-xl text-white min-w-[25%] flex flex-col justify-evenly gap-6">
      <div className="flex items-center justify-between ">
        <div className="text-6xl font-bold">{weather.current.temp_c}</div>
        <div className="flex flex-col gap-1 items-start">
          <span className="text-lg font-semibold">{weather.location.name}</span>
          <span className="text-xs font-semibold">{time}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {Icon}
            <span className="text-xs text-slate-400">Snow</span>
          </div>
          <div className="flex items-center gap-2">
            <IoMdSpeedometer className="text-yellow-200 text-2xl " />
            <span>3.13 m/s</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <span>Feel like: {weather.current.temp_c}</span>
          </div>
          <div>
            <span>1 to 5</span>
          </div>
        </div>
      </div>
    </div>
  );
};
