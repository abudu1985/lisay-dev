import * as React from "react";

import useLocalStorage from "../../../../utils/useLocalStorage";
import * as Constants from "../../../../utils/constants";
import gridSVG from "../../../../services/grid.svg";
import verticalSVG from "../../../../services/vertical.svg";
import horizontalSVG from "../../../../services/horizontal.svg";

const PostsModeToggle = () => {
  const [renderPostsMode, setRenderPostsMode] =
    useLocalStorage("renderPostsMode");

  const modesToSvgMap = {
    [Constants.VERTICAL_MODE]: verticalSVG,
    [Constants.GRID_MODE]: gridSVG,
    [Constants.HORISONTAL_MODE]: horizontalSVG,
  };

  const onClickModeHandler = (string) => {
    const arr = Object.keys(modesToSvgMap);
    let i = arr.findIndex((item) => item === renderPostsMode);
    i++;
    if (i === arr.length) {
      i = 0;
    }
    setRenderPostsMode(JSON.stringify(arr[i]));
  };

  return (
    <img
      src={modesToSvgMap[renderPostsMode]}
      alt="SVG as an image"
      className="svgSolid"
      onClick={() => onClickModeHandler(renderPostsMode)}
    />
  );
};

export default PostsModeToggle;
