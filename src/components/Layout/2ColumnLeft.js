import React  from 'react';
import { Container, Row, Col } from 'reactstrap';
import cx from 'classnames'

const Layout = (props) => {

  return (
    <Container className={cx(props.className)}>
      <Row>
        <Col sm={12} md={3}>
          {props.contentColumnLeft}
        </Col>
        <Col sm={12} md={9}>
          {props.contentMain}
        </Col>
      </Row>
    </Container>
  )
};

export default Layout;