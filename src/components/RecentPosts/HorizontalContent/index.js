import React from "react";

import WideContent from "./WideContent";
import MobileContent from "./MobileContent";
import { useMatchMedia } from "../../../utils/useMatchMedia";

const HorizontalContent = ({ articles }) => {
  const { isMobile, isTablet } = useMatchMedia();
  return isMobile || isTablet ? (
    <MobileContent articles={articles} />
  ) : (
    <WideContent articles={articles} />
  );
};

export default HorizontalContent;
