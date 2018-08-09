import React  from 'react';
import { Container, Row, Col } from 'reactstrap';

const Layout = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          {props.contentMain}
        </Col>
      </Row>
    </Container>
  )
};

export default Layout;