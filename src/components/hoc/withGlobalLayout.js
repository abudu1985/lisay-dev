import React from "react";
import Layout from "../Layout";
import ScrollArrow from "./components/ScrollArrow";
import SettingsBlock from "./components/SettingsBlock";

const withGlobalLayout = (WrappedComponent) => (props) => {
  return (
    <Layout>
      <WrappedComponent {...props} />
      <ScrollArrow point={400} />
      <SettingsBlock />
    </Layout>
  );
};

export default withGlobalLayout;
