import { OTPInput, type OTPInputProps, type SlotProps } from "input-otp";
import React from "react";

export type InputOTPProps = OTPInputProps;
export const InputOTP = ({ maxLength = 6, ...props }: OTPInputProps) => {
  return (
    // @ts-expect-error idk
    <OTPInput
      {...props}
      maxLength={maxLength}
      containerClassName="group flex w-fit h-fit items-center has-[:disabled]:opacity-33 has-[:disabled]:cursor-not-allowed border border-stroke rounded-12 overflow-clip"
      render={({ slots }) => (
        <div className="flex">
          {slots.map((slot, index) => (
            <Slot key={slot.placeholderChar} {...slot} />
          ))}
        </div>
      )}
    />
  );
};

function Slot(props: SlotProps) {
  return (
    <div
      className={`relative flex h-[2.5rem] w-[2rem] items-center justify-center border-r border-stroke bg-fg-2 p-12 text-text shadow-material-component last:border-none ${{ "border-accent-reversed": props.isActive }}`}
    >
      {props.char !== null && <div>{props.char}</div>}
      {props.hasFakeCaret && <Caret />}
    </div>
  );
}

function Caret() {
  return (
    <div className="pointer-events-none absolute inset-0 flex h-[80%] animate-caret-blink items-end justify-center">
      <div className="h-[0.125rem] w-[0.75rem] rounded-full bg-accent-reversed" />
    </div>
  );
}
