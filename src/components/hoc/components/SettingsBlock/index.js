import React, { useState } from "react";
import classNames from "classnames";

import gearSolid from "../../../../services/gear-solid.svg";
import Toggle from "../../../../components/Toggle";
import ThemesToggle from "./ThemesToggle";
import PostsModeToggle from "./PostsModeToggle";

import "./styles.css";

const SettingsBlock = () => {
  const [clickedGear, setClickedGear] = useState(false);

  const handleClick = () => {
    const curr = !clickedGear;
    setClickedGear(curr);
  };

  return (
    <div className="settingsBlock">
      <div className="settingsIcon" onClick={handleClick}>
        <img
          src={gearSolid}
          className={classNames("svgSolid ", { rotated: !!clickedGear })}
        />
      </div>
      {clickedGear && (
        <div className="settingsItemsBlock">
          <Toggle
            label="Toggle me"
            toggled={true}
            onClick={() => {}}
            show={false}
          />

          <PostsModeToggle />
          <ThemesToggle />
        </div>
      )}
    </div>
  );
};

export default SettingsBlock;
