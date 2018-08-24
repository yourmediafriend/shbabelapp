import React, { Component } from 'react';
import cx from 'classnames';
import { Container, Row, Col } from 'reactstrap';
import styles from './pageTitle.scss';


class PageTitle extends Component {

  setBackgroundColor = () => {
    return this.props.backgroundColor ? {backgroundColor: this.props.backgroundColor } : '';
  }

  setBackgroundImage = () => {
    return this.props.backgroundImg ? {backgroundImage: `url(${this.props.backgroundImg})`,  backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}: '';
  }

  setIcon = () => {
    return;
  }

  setLayout = () => {
    return this.props.layout ? this.props.layout === 'full' ? styles.full :  this.props.layout === 'center' ?  styles.centerAlign  : ''  : styles.full;
  }

  render() {
    const { title } = this.props;
    return (
      <Container className={cx(styles.pageTitleContainer)}  style={{...this.setBackgroundColor(), ...this.setBackgroundImage(), ...this.props.style}}>
        <Row className={cx(styles.pageTitleInner, this.setLayout())}>
          <Col className={cx(styles.pageTitleCell, styles.titleCell)}>
            {this.setIcon()}
            <h1 className={cx(styles.pageTitle)}>{title}</h1>
          </Col>

{/*          <div className={cx(styles.pageTitleCell, styles.actionCell)}>
           Actions
          </div>*/}

        </Row>
      </Container>
    )

  }
}

export default PageTitle;
