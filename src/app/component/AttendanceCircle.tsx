import Image from 'next/image'
import AttendanceCheck from '@/public/AttendanceCheck.svg'
import AttendanceNotCheck from '@/public/AttendanceNotChecked.svg'
export interface AttendanceCircleProps {
    status: boolean;
    numbering: number;
    isMile: boolean;
}

const AttendanceCircle = ({status, isMile, numbering}: AttendanceCircleProps) => {
    const baseStyle = `rounded-full font-bold h-[92px] w-[92px] flex flex-col justify-center items-center text-xl font-bold gap-2`
    const checkedStyle = `${isMile ? 'text-orange-500 bg-orange-100 border-orange-500  ' : 'text-t-primary border-emerald-400  '} bg-alpha-00 border rounded-full`
    const uncheckedStyle = 'bg-gray-100  text-gray-400 text-xl border border-state-base-border  rounded-full'
    const IconRender = () => {
        if(isMile) {
            if(status) {

                return   <Image src={'/MileMedium.svg'}  alt={'mile'}  width={24} height={24}/>
            } else {
                return <Image src={'/UnCheckedMile.svg'}  alt={'mile'} width={24} height={24} />
            }
        }else {
            if(status) {
                return <AttendanceCheck/>
            } else {
                return <AttendanceNotCheck/>
            }
        }
    }

    return (
        <div className={`${baseStyle} ${status ? checkedStyle : uncheckedStyle}`}>
            {IconRender()}
            <div>
                {isMile ? `+200` : numbering}
            </div>
        </div>
    )
}

export default AttendanceCircle