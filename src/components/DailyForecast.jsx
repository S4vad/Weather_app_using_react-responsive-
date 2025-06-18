import { useContext } from "react";
import { UnitContext } from "@/utils/unitContext";
import { IoSunny } from "react-icons/io5";

export const DailyForecast = ({ weather }) => {
  const { unit } = useContext(UnitContext);
  const forecastDays = weather?.forecast?.forecastday || [];

  //  Find global min/max across all days in the selected unit
  const allTemps = forecastDays.flatMap((day) => [
    unit === "C" ? day.day.mintemp_c : day.day.mintemp_f,
    unit === "C" ? day.day.maxtemp_c : day.day.maxtemp_f,
  ]);

  const globalMin = Math.min(...allTemps);
  const globalMax = Math.max(...allTemps);
  const globalRange = globalMax - globalMin || 1; // avoid divide by 0

  return (
    <div className="space-y-4 w-full">
      <div className="text-gray-300 text-lg">5-day forecast</div>
      {forecastDays.map((dayData, idx) => {
        const { date, day } = dayData;

        const min = Math.round(unit === "C" ? day.mintemp_c : day.mintemp_f);
        const max = Math.round(unit === "C" ? day.maxtemp_c : day.maxtemp_f);
        const minTemp = `${min}°${unit}`;
        const maxTemp = `${max}°${unit}`;

        const condition = day?.condition?.text;
        const iconUrl = day?.condition?.icon;

        const leftPercent = ((min - globalMin) / globalRange) * 100;
        const widthPercent = ((max - min) / globalRange) * 100;

        return (
          <div
            key={date}
            className="flex items-center justify-between bg-slate-700 p-4 text-gray-200 rounded-xl gap-12"
          >
            {/* Day */}
            <div className="w-1/6">
              {idx === 0
                ? "Today"
                : new Date(date).toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
            </div>

            {/* Weather condition */}
            <div className="flex items-center gap-1 w-1/4">
              {iconUrl ? (
                <img src={iconUrl} alt={condition} className="w-5 h-5" />
              ) : (
                <IoSunny />
              )}
              <span className="text-sm capitalize">{condition}</span>
            </div>

            {/* Temp + progress */}
            <div className="flex items-center gap-2 w-2/4">
              <span className="text-sm">{minTemp}</span>
              <div className="relative flex-1 h-2 bg-gray-500 rounded-full overflow-hidden">
                <div
                  className="absolute h-2 bg-blue-400 rounded-full"
                  style={{
                    left: `${leftPercent}%`,
                    width: `${widthPercent}%`,
                  }}
                ></div>
              </div>
              <span className="text-sm">{maxTemp}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
