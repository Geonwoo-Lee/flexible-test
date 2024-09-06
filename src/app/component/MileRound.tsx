import MileStatus from "@/src/app/component/MileStatus";
import WideCheck from "@/src/app/component/WideCheck";
import NarrowCheck from "@/src/app/component/NarrowCheck";


export const enum MileChargeStatus {
    Progress = "Progress",
    Success = "Success",
    New = "New",
    Retry = "Retry"
}

export interface MileChargeStationProps {
    status: MileChargeStatus;
    roundNum: number;
    earnedMileage: string;
    checkinCount: number;
    hasCheckedInToday: boolean
}


const MileRound = ({data}: {data?: MileChargeStationProps}) => {
    return <div className="p-6 w-full ">
        <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-2">
                <div className="text-lg font-semiBold text-t-primary">
                    {data ? `Round ${data.roundNum}` : "Round 1"}
                </div>
                <MileStatus status={data ? data.status : MileChargeStatus.Retry}/>
            </div>
            <div className="hidden md:block">
                <WideCheck data={data}/>
            </div>
            <div className="block md:hidden">
                <NarrowCheck data={data}/>
            </div>
        </div>
    </div>
}

export default MileRound