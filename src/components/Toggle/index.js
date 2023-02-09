import React, { useState } from "react";
import classNames from "classnames";
import "./styles.css";

const Toggle = ({
  label,
  toggled,
  onClick,
  isVertical = false,
  show = true,
}) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  // const sliderClass = `slider round ${vertical ? "vertical" : ""}`;
  // const switchClass = `switch ${show ? "" : "switchHidden"}`;

  const sliderClass = classNames("slider round", { vertical: isVertical });
  const switchClass = classNames("switch ", { switchHidden: !show });

  return (
    <label class={switchClass}>
      <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
      <span class={sliderClass}></span>
    </label>
  );
};

export default Toggle;
