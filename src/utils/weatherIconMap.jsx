import {
  IoSnow,
  IoRainy,
  IoThunderstorm,
  IoSunny,
  IoCloudyNight,
  IoPartlySunny,
  IoCloud,
  IoWater,
} from "react-icons/io5";

export const getWeatherIcon = (condition) => {
  const lower = condition.toLowerCase();

  if (lower.includes("snow")) return <IoSnow className="text-blue-300 text-4xl" />;
  if (lower.includes("rain")) return <IoRainy className="text-blue-400 text-4xl" />;
  if (lower.includes("thunder")) return <IoThunderstorm className="text-purple-400 text-4xl" />;
  if (lower.includes("clear")) return <IoSunny className="text-yellow-300 text-4xl" />;
  if (lower.includes("cloudy")) return <IoCloudyNight className="text-gray-300 text-4xl" />;
  if (lower.includes("cloud")) return <IoCloud className="text-gray-300 text-4xl" />;
  if (lower.includes("mist") || lower.includes("fog")) return <IoWater className="text-gray-400 text-4xl" />;

  return <IoPartlySunny className="text-yellow-200 text-4xl" />; 
};
