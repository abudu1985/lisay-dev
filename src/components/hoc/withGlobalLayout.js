import * as React from "react";
import { ThemeProvider } from "styled-components";
import { Row, Col } from "react-grid-system";
import ScrollArrow from "./components/ScrollArrow";
import SettingsBlock from "./components/SettingsBlock";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import * as Constants from "../../utils/constants";
import useLocalStorage from "../../utils/useLocalStorage";

import {
  LayoutStylesWrapper,
  GlobalStyle,
} from "../../styles/StyledComponents";

import { light, dark } from "../../styles/themes";

const withGlobalLayout = (WrappedComponent) => (props) => {
  const defaultThemeMode = Constants.DARK_THEME_MODE;
  const [renderThemeMode, setRenderThemeMode] =
    useLocalStorage("renderThemeMode");

  const renderThemeByMode = (mode) => {
    const renderThemesModeEnum = {
      [Constants.LIGHT_THEME_MODE]: light,
      [Constants.DARK_THEME_MODE]: dark,
    };
    if (!mode) {
      setRenderThemeMode(JSON.stringify(defaultThemeMode));
      return renderThemesModeEnum[defaultThemeMode];
    }
    return renderThemesModeEnum[mode];
  };

  return (
    <ThemeProvider theme={renderThemeByMode(renderThemeMode)}>
      <GlobalStyle />
      <LayoutStylesWrapper>
        <div id="container--main">
          <Row gutterWidth={16}>
            <Col md={9}>
              <WrappedComponent {...props} />
              <ScrollArrow point={400} />
              <SettingsBlock />
            </Col>
            <Col md={3}>
              <Sidebar width={"100%"} />
            </Col>
          </Row>
        </div>
      </LayoutStylesWrapper>
      <Footer />
    </ThemeProvider>
  );
};

export default withGlobalLayout;
