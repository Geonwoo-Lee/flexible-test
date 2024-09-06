'use client'
import BottomSheet from "@/app/component/BottomSheetSelect";
import {useState} from "react";

export default function Home() {
    const [bottomSheeetOpen, setBottomSheetOpen] = useState(false);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={() => {setBottomSheetOpen(true)}}>
        open
      </button>
      <BottomSheet onClose={() => {setBottomSheetOpen(false)}} open={bottomSheeetOpen} >
        <div className="flex flex-col gap-6  pt-6">
          <div className="text-xxl font-semiBold">
            Notice
          </div>
          <div className="p-4 bg-bg-state rounded-[12px]">
            <ul className="flex flex-col gap-1 pl-4 max-h-[300px] overflow-auto  list-disc  text-sm  font-regular">
              <li>The miles earned in the corresponding month of the previous year will automatically expire at 00:00 (UTC) on the 15th of each month.</li>
              <li>Miles can only be used within the Alt.town service and cannot be used with other services.</li>
              <li>Already used miles cannot be refunded, canceled, or have the service changed.</li>
              <li>Miles can be converted when it is 10,000 miles or more.</li>
              <li>The maximum convertible miles in a day is 50,000 miles.</li>
              <li>The maximum miles that can be converted in a single transaction is 10,000 miles.</li>
              <li>When swapping assets, the exchange rate is 1 Mile to 0.1 KEY.</li>
              <li>In the future, miles may be integrated with external services and points(separate notice will be provided).</li>
            </ul>
          </div>
        </div>
      </BottomSheet>
    </div>
  );
}
