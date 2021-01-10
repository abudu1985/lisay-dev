import React from "react";
import Layout from "../Layout";
import ScrollArrow from "../ScrollArrow";


const withGlobalLayout = WrappedComponent => props => {
    return (
        <Layout>
            <WrappedComponent
                {...props}
            />
            <ScrollArrow point={400}/>
        </Layout>
    );
};

export default withGlobalLayout;
