import AttendanceCircle from "@/src/app/component/AttendanceCircle";
import {MileChargeStationProps} from "@/src/app/component/MileRound";


const NarrowCheck = ({ data }: { data?: MileChargeStationProps }) => {
    const checkinCount = data ? data.checkinCount : 0;

    const getBarColor = (count: number) =>
        checkinCount >= count ? "bg-emerald-300" : "bg-gray-200";

    const getBorderColor = (count: number) =>
        checkinCount >= count ? "#6EE7B7" : "#E1E1E2";

    return (
        <div className="h-[324px] w-full flex items-center pr-6">
            <div className="flex flex-col gap-2 z-20 w-full items-center">
                <div className="flex flex-row w-full items-center max-w-[280px] justify-between">
                    <div>
                        <AttendanceCircle status={checkinCount >= 1} isMile={false} numbering={1} />
                    </div>
                    <div className={`h-[15px] w-full ${getBarColor(1)}`}></div>
                    <div className="relative">
                        <AttendanceCircle status={checkinCount >= 2} isMile={false} numbering={2} />
                        <div
                            className="h-[115px] w-[115px] top-[38.5px] -right-6 absolute"
                            style={{
                                borderTopRightRadius: "1000px",
                                borderBottomRightRadius: "1000px",
                                borderTop: `15px solid ${getBorderColor(2)}`,
                                borderRight: `15px solid ${getBorderColor(2)}`,
                                borderBottom: `15px solid ${getBorderColor(2)}`,
                                zIndex: "-1",
                            }}
                        ></div>
                    </div>
                </div>
                <div className="flex flex-row w-full max-w-[280px] justify-center items-center">
                    <div className="relative">
                        <AttendanceCircle status={checkinCount >= 4} isMile={false} numbering={4} />
                        <div
                            className="h-[115px] w-[150px] top-[38.5px] left-0 absolute"
                            style={{
                                borderTopLeftRadius: "1000px",
                                borderBottomLeftRadius: "1000px",
                                borderTop: `15px solid ${getBorderColor(4)}`,
                                borderLeft: `15px solid ${getBorderColor(4)}`,
                                borderBottom: `15px solid ${getBorderColor(4)}`,
                                zIndex: "-1",
                            }}
                        ></div>
                    </div>
                    <div className={`h-[15px] w-full ${getBarColor(3)}`}></div>
                    <div>
                        <AttendanceCircle status={checkinCount >= 3} isMile={false} numbering={3} />
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <AttendanceCircle status={checkinCount >= 5} isMile={true} numbering={5} />
                </div>
            </div>
        </div>
    );
};

export default NarrowCheck;
