import React from "react";
import style from "./Switch.module.css";

interface SwitchProps {
  isSwitched: boolean;
  onChange: () => void;
  options: [string, string];
}
const Switch = ({ isSwitched, onChange, options }: SwitchProps) => {
  return (
    <div className={style.switch}>
      <div
        className={`${style.option} ${isSwitched ? style.active : null}`}
        onClick={() => {
          onChange();
        }}
      >
        {options[0]}
      </div>

      <div
        className={`${style.option} ${!isSwitched ? style.active : null}`}
        onClick={() => {
          onChange();
        }}
      >
        {options[1]}
      </div>
    </div>
  );
};

export { Switch };
