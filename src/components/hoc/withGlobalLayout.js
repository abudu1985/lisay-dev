import React from "react";
import Layout from "../Layout";


const withGlobalLayout = WrappedComponent => props => {
    return (
        <Layout>
            <WrappedComponent
                {...props}
            />
        </Layout>
    );
};

export default withGlobalLayout;
