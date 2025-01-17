import { FC, memo } from "react";
import { Asset, AssetStatus } from "../Types";
import Status from "./Status";

const Card: FC<Asset & { onClick(): void }> = ({
  id,
  owner,
  area,
  location,
  status,
  onClick,
}) => {
  return (
    <div className="flex items-center rounded-xl shadow-md px-4 py-2 gap-4 bg-white">
      <div className="w-1/5">
        <Status status={status as AssetStatus} />
      </div>
      <div className="flex flex-col">
        <span className="font-bold">{id}</span>
        <span className="font-medium text-sm text-slate-800">
          Owned by {owner}
        </span>
        <div className="flex gap-3">
          <span className="text-sm text-slate-500">{location}</span>
          <span className="text-sm text-slate-500">{area} m2</span>
        </div>
      </div>
      {status === AssetStatus.REGISTERED && (
        <div className="ml-auto">
          <button
            className="max-w-fit inline-flex justify-center px-4 py-1 text-sm font-medium text-white bg-emerald-700 border border-transparent rounded-md hover:bg-emerald-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
            onClick={onClick}
          >
            Transfer
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(Card);
