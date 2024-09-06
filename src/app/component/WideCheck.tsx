import {MileChargeStatus} from "@/src/app/component/MileRound";
import AttendanceCircle from "@/src/app/component/AttendanceCircle";


export interface MileChargeStationProps {
    status: MileChargeStatus;
    roundNum: number;
    earnedMileage: string;
    checkinCount: number;
    hasCheckedInToday: boolean
}

const WideCheck = ({ data }: { data?: MileChargeStationProps }) => {
    const checkinCount = data ? data.checkinCount : 0;

    const getBarColor = (count: number) =>
        checkinCount >= count ? "bg-emerald-300" : "bg-gray-200";

    const getBorderColor = (count: number) =>
        checkinCount >= count ? "#6EE7B7" : "#E1E1E2";

    return (
        <div className="h-[216px] w-full flex items-center">
            <div className="flex flex-col gap-2 z-20 w-full items-center">
                <div className="flex flex-row w-full items-center max-w-[450px] justify-between">
                    <div>
                        <AttendanceCircle status={checkinCount >= 1} isMile={false} numbering={1} />
                    </div>
                    <div className={`h-[15px] w-full ${getBarColor(1)}`}></div>
                    <div>
                        <AttendanceCircle status={checkinCount >= 2} isMile={false} numbering={2} />
                    </div>
                    <div className={`h-[15px] w-full ${getBarColor(2)}`}></div>
                    <div className="relative">
                        <AttendanceCircle status={checkinCount >= 3} isMile={false} numbering={3} />
                        <div
                            className="h-[115px] w-[155px] top-[38.5px] -right-0 absolute"
                            style={{
                                borderTopRightRadius: "1000px",
                                borderBottomRightRadius: "1000px",
                                borderTop: `15px solid ${getBorderColor(3)}`,
                                borderRight: `15px solid ${getBorderColor(3)}`,
                                borderBottom: `15px solid ${getBorderColor(3)}`,
                                zIndex: "-1",
                            }}
                        ></div>
                    </div>
                </div>
                <div className="flex flex-row w-full justify-center items-center">
                    <div className="w-full flex justify-end">
                        <AttendanceCircle status={checkinCount >= 5} isMile={true} numbering={5} />
                    </div>
                    <div className={`h-[15px] w-full max-w-[56px] ${getBarColor(5)}`}></div>
                    <div className="w-full">
                        <AttendanceCircle status={checkinCount >= 4} isMile={false} numbering={4} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WideCheck;
