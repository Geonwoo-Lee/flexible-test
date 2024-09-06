'use client';
import { animated, useTransition } from "react-spring";
import {ReactNode} from "react";

export interface BottomSheetPropsType {
  children: ReactNode;
  onClose: () => void;
  open: boolean;
  nonPadding?: boolean;
}

const BottomSheet: React.FC<BottomSheetPropsType> = ({
                                                       open,
                                                       onClose,
                                                       children,
                                                       nonPadding,
                                                     }) => {
  const transitionConfig = {
    from: { opacity: 1, transform: "translateY(100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(100%)" },
  };

  const backdropTransitions = useTransition(open, transitionConfig);
  const sheetTransitions = useTransition(open, transitionConfig);
  return (
      <>
        {backdropTransitions((style, item) =>
            item ? (
                <animated.div
                    style={{
                      ...style,
                      transform: undefined,
                      maxWidth: "640px",
                      margin: "0 auto",
                    }}
                    onClick={onClose}
                    className="fixed inset-0 bg-alpha-400 bg-opacity-10  z-[60] "
                ></animated.div>
            ) : null
        )}

        {sheetTransitions((style, item) =>
            item ? (
                <animated.div
                    style={{ ...style, left: "50%", transform: "translateX(-50%)" }}
                    className="w-full max-w-[640px] bg-alpha-00 rounded-t-[24px] max-h-1/2 fixed bottom-0 z-[60]"
                >
                  <div
                      className={`${!nonPadding && "pl-6 pr-6 pt-[24px] pb-[34px]"} `}
                  >
                    {children}
                  </div>
                </animated.div>
            ) : null
        )}
      </>
  );
};

export default BottomSheet;
