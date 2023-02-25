import React, { useState } from "react";
import classNames from "classnames";

import gearSolid from "../../../../services/gear-solid.svg";
import useLocalStorage from "../../../../utils/useLocalStorage";
import Toggle from "../../../../components/Toggle";
import * as Constants from "../../../../utils/constants";
import ThemesToggle from "./ThemesToggle";

import "./styles.css";

const SettingsBlock = () => {
  const [clickedGear, setClickedGear] = useState(false);
  const [renderPostsMode, setRenderPostsMode] =
    useLocalStorage("renderPostsMode");
  const onClickVerticalHandler = (bool) => {
    const str = bool ? Constants.VERTICAL_MODE : Constants.GRID_MODE;
    setRenderPostsMode(JSON.stringify(str));
  };

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
          <Toggle
            label="Toggle me"
            toggled={renderPostsMode && renderPostsMode !== Constants.GRID_MODE}
            onClick={onClickVerticalHandler}
            isVertical
          />
          <ThemesToggle />
        </div>
      )}
    </div>
  );
};

export default SettingsBlock;
