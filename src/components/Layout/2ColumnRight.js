import React  from 'react';
import { Container, Row, Col } from 'reactstrap';

const Layout = (props) => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={9}>
          {props.contentMain}
        </Col>
        <Col sm={12} md={3}>
          {props.contentColumnRight}
        </Col>
      </Row>
    </Container>
  )
};

export default Layout;