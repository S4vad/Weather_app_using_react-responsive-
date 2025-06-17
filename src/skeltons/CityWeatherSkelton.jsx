import { Skeleton } from "@/components/ui/skeleton";

export const CityWeatherSkelton = () => {
  return (
    <div className="space-y-3">
      <Skeleton className="h-[70px] rounded-xl bg-slate-700" />
      <Skeleton className="h-[70px]  rounded-xl bg-slate-700" />
      <Skeleton className="h-[70px] rounded-xl bg-slate-700" />
    </div>
  );
};
