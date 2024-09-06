import {MileChargeStatus} from "@/src/app/component/MileRound";


const MileStatus = ({status}: {
    status: MileChargeStatus
}) => {

    const statusStyle = () => {
        switch (status) {
            case MileChargeStatus.Progress:
                return 'text-blue-600 bg-blue-100 border border-blue-100'
            case MileChargeStatus.Success:
                return 'text-orange-600 bg-orange-100 border border-orange-100'
            case MileChargeStatus.New:
                return 'text-red-600 bg-red-100 border border-red-100'
            case MileChargeStatus.Retry:
                return 'text-violet-600 bg-violet-100 border border-violet-100'
            default :
                return 'text-blue-600 bg-blue-100 border border-blue-100'
        }
    }

    return <div
        className={`inline-flex  h-[28px] justify-center items-center rounded-full cursor-pointer  ${statusStyle()}`}
    >
        <div
            className={`text-xs  whitespace-nowrap font-regular px-3 `}>
            In progress
        </div>
    </div>
}

export default MileStatus