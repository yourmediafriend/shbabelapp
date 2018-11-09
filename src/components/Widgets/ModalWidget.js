import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";

import cx from 'classnames';
import { Button } from 'reactstrap';
import styles from './widget.scss';
import {connect} from "react-redux";
import {get} from "lodash/fp";

import { modalOpen } from "../../modules/ModalTest";

class Widget extends Component {

  static propTypes = {
    modalOpen: PropTypes.func
  };

  handleSubmit () {
    // open Modal
    console.log('handleSubmit - open Modal ');
    const { modalOpen } = this.props;



  modalOpen();

  }

  render() {
    return (
      <div className={cx(styles.widget, this.props.className)}>
        <div className={styles.inner}>
          <div className={styles.footer}>
            <Button type="submit"  onClick={this.handleSubmit.bind(this)} >Open Modal!</Button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  // console.log(state);
  // console.log('mapStateToProps', get('signUpFormModule.message', state));

  return {
    values: get('form.SignUpForm.values', state),
  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      modalOpen,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Widget);