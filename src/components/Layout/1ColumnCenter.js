import React  from 'react';
import { Container, Row, Col } from 'reactstrap';

const Layout = (props) => {
  return (
    <Container className={props.className}>
      <Row>
        <Col>
          {props.contentMain}
        </Col>
      </Row>
    </Container>
  )
};

export default Layout;