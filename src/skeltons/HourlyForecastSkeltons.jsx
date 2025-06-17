import { Skeleton } from "@/components/ui/skeleton";

export const HourlyForecastSkeleton = () => {
  return (
    <>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[180px] w-[82px] rounded-xl bg-slate-700" />
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[180px] w-[82px] rounded-xl bg-slate-700" />
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[180px] w-[82px] rounded-xl bg-slate-700" />
      </div>

      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[180px] w-[82px] rounded-xl bg-slate-700" />
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[180px] w-[82px] rounded-xl bg-slate-700" />
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[180px] w-[82px] rounded-xl bg-slate-700" />
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[180px] w-[82px] rounded-xl bg-slate-700" />
      </div>

      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[180px] w-[82px] rounded-xl bg-slate-700" />
      </div>
    </>
  );
};
