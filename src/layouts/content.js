// Dependencies.
import React from 'react';

// Ui components.
import { Grid, Row, Col } from 'react-bootstrap';


// Define class.
class Layout extends React.Component {

    // Render method.
    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col sm={12}>
                        {this.props.children}
                    </Col>
                 </Row>
            </Grid>
        );
    }
}

Layout.propTypes = {
    children: React.PropTypes.node,
};

// Export.
export default Layout;
