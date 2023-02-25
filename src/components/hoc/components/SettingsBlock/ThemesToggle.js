import * as React from "react";

import useLocalStorage from "../../../../utils/useLocalStorage";
import * as Constants from "../../../../utils/constants";
import daySVG from "../../../../services/day.svg";
import nightSVG from "../../../../services/night.svg";

const ThemesToggle = () => {
  const [renderThemeMode, setRenderThemeMode] =
    useLocalStorage("renderThemeMode");

  const onClickThemeHandler = (string) => {
    const result =
      string === Constants.LIGHT_THEME_MODE
        ? Constants.LIGHT_THEME_MODE
        : Constants.DARK_THEME_MODE;
    setRenderThemeMode(JSON.stringify(result));
  };

  return renderThemeMode === Constants.DARK_THEME_MODE ? (
    <img
      src={nightSVG}
      alt="SVG as an image"
      className="svgSolid"
      onClick={() => onClickThemeHandler("light")}
    />
  ) : (
    <img
      src={daySVG}
      alt="SVG as an image"
      className="svgSolid"
      onClick={() => onClickThemeHandler("dark")}
    />
  );
};

export default ThemesToggle;
