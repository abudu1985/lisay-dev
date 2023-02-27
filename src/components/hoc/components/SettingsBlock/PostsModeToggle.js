import * as React from "react";

import useLocalStorage from "../../../../utils/useLocalStorage";
import * as Constants from "../../../../utils/constants";
import gridSVG from "../../../../services/grid.svg";
import verticalSVG from "../../../../services/vertical.svg";

const PostsModeToggle = () => {
  const [renderPostsMode, setRenderPostsMode] =
    useLocalStorage("renderPostsMode");

  const onClickModeHandler = (string) => {
    const result =
      string === Constants.VERTICAL_MODE
        ? Constants.VERTICAL_MODE
        : Constants.GRID_MODE;
    setRenderPostsMode(JSON.stringify(result));
  };

  return renderPostsMode === Constants.VERTICAL_MODE ? (
    <img
      src={verticalSVG}
      alt="SVG as an image"
      className="svgSolid"
      onClick={() => onClickModeHandler(Constants.GRID_MODE)}
    />
  ) : (
    <img
      src={gridSVG}
      alt="SVG as an image"
      className="svgSolid"
      onClick={() => onClickModeHandler(Constants.VERTICAL_MODE)}
    />
  );
};

export default PostsModeToggle;
