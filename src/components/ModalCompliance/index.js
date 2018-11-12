import React from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

import uuid from 'uuid';
import { modalOpen } from "../../modules/Modal";

import PageTitle from '../PageTitle';



class ModalCompliance extends React.Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    const { cookies } = props;

    this.state = {
      compliance: cookies.get('compliance') || false
    };

    // this.state = {
    //   compliance: false
    // };

    this.onExtendClose = this.onExtendClose.bind(this)

  }

  onExtendClose() {
     const { cookies } = this.props;
     cookies.set('compliance', true, { path: '/' });
  }

  componentWillMount() {


  }


}



  /*render() {

    const modalConfig = {
      isModalOpen: true,
      preventScroll: true,
      extendClose: this.onExtendClose,
      overlayClose: true,
    }

    return (
      !this.state.compliance ?
      <Modal { ...modalConfig } >
          <PageTitle title={"Important Cookie Information"}/>
          <p>This site uses cookies to give you the best possible experience. By continuing to use the site you agree that we can save cookies on your device. Cookies are small text files placed on your device that remember your preferences and some details of your visit. Our cookies don’t collect personal information. For more information and details of how to disable cookies, please read our updated privacy and cookie policy.</p>
      </Modal> : ''
    )
  }*/

const mapStateToProps = (state) => {

  // console.log(state);
  // console.log('mapStateToProps', get('signUpFormModule.message', state));

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


export default connect(mapStateToProps, mapDispatchToProps)(ModalCompliance);
