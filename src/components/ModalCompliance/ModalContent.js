import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import PropTypes, { instanceOf } from 'prop-types';
import {connect} from "react-redux";
import { withCookies, Cookies } from 'react-cookie';
import { modalOpen } from "../../modules/Modal";
import uuid from "uuid";


class ModalContent extends Component {
  render() {
    return (
      <div>
        HELLO I AM THE COMPLIANCE MODAL
      </div>
    );
  }
}


class ModalCompliance extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    const { cookies } = props;

    this.state = {
      compliance: cookies.get('compliance') || false
    };

    this.onClose = this.onClose.bind(this)

  }

  onClose() {

  }


  openModal() {

    const { modalOpen } = this.props;

    modalOpen({
      id: uuid.v4(),
      type: 'confirmation',
      text: 'Are you sure to do this?',
      content: <ModalContent />,
      overlayClose: true,
      preventScroll: true,
      onClose: this.onClose.bind(this),
      onConfirm: () => console.log("fire at confirming event"),
    });

  }

  componentDidMount() {
    !this.state.compliance ? this.openModal() : null;
  }

  render(){
    return  null
  }
}



export default withCookies(ModalCompliance);
