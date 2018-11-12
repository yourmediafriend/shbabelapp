import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import PropTypes, { instanceOf } from 'prop-types';
import {connect} from "react-redux";
import { withCookies, Cookies } from 'react-cookie';
import { modalOpen } from "../../modules/Modal";
import uuid from "uuid";
import PageTitle from '../PageTitle';

class ModalContent extends Component {
  render() {
    return (
      <div>
        <PageTitle title={"Important Cookie Information"}/>
        <p>This site uses cookies to give you the best possible experience. By continuing to use the site you agree that we can save cookies on your device. Cookies are small text files placed on your device that remember your preferences and some details of your visit. Our cookies don’t collect personal information. For more information and details of how to disable cookies, please read our updated privacy and cookie policy.</p>
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
    const { cookies } = this.props;
    cookies.set('compliance', true, { path: '/' });
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

const mapStateToProps = (state) => {
  return {

  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      modalOpen,
    },
    dispatch
  );


export default withCookies(connect(mapStateToProps, mapDispatchToProps)(ModalCompliance));