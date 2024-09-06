'use client'
import MileRound, {MileChargeStationProps, MileChargeStatus} from "@/src/app/component/MileRound";
import {useRouter} from "next/navigation";


const MilePage = () => {
    const router = useRouter()
        const data: MileChargeStationProps = {
            checkinCount: 1,
            earnedMileage: "0.00000000",
            hasCheckedInToday: false,
            roundNum: 1,
            status: MileChargeStatus.Progress,  // 여기를 enum 값으로 변경
            // statusCode와 statusMessage, timestamp는 MileChargeStationProps에 없으므로 제거
        }

    return <div>
        <button onClick={() => {
            router.push('/')
        }} className="text-t-primary">
            뒤로가기
        </button>
        <MileRound data={data}  />
    </div>
}

export  default MilePage