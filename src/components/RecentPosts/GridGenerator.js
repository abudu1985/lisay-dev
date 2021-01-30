import React from 'react'
import {Container, Row, Col} from 'react-grid-system';
import {splitEvery} from "../../utils/functions"

const GridGenerator = ({ cols, children }) => {
    const rows = splitEvery(React.Children.toArray(children), cols);
    return (
        <Container>
            {rows.map((cols, index) => (
                <Row key={index}>
                    {cols.map((col, index) => (
                        <Col xxl={4} xl={4} lg={6} md={6} sm={6} xs={12} key={index}>
                            {col}
                        </Col>
                    ))}
                </Row>
            ))}
        </Container>
    )
};
export default GridGenerator