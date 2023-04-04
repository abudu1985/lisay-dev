import React, { useState } from "react";
import classNames from "classnames";

import gearSolid from "../../../../services/gear-solid.svg";
import Toggle from "../../../../components/Toggle";
import ThemesToggle from "./ThemesToggle";
import PostsModeToggle from "./PostsModeToggle";
import popSound from "../../../../services/pop.mp3"
import "./styles.css";

const SettingsBlock = () => {
  const [clickedGear, setClickedGear] = useState(false);

  const handleClick = () => {
    const curr = !clickedGear;
    let POP_SOUND = new Audio(popSound);
    POP_SOUND.volume = 0.1;
    POP_SOUND.play();
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
