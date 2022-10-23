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
      <label className={`${style.option} ${isSwitched ? style.active : null}`}>
        <input onClick={onChange} />
        <span> {options[0]}</span>
      </label>
      <label className={`${style.option} ${!isSwitched ? style.active : null}`}>
        <input onClick={onChange} />
        <span>{options[1]}</span>
      </label>
    </div>
  );
};

export { Switch };
