import React from 'react'
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

import Modal from '../';

import PageTitle from '../../PageTitle';


class ModalContent extends React.Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    const { cookies } = props;


    this.state = {
      compliance: cookies.get('compliance') || false
    };

    this.onExtendClose = this.onExtendClose.bind(this)

  }

  onExtendClose() {
     const { cookies } = this.props;
     cookies.set('compliance', true, { path: '/' });
  }

  render() {
    return (
      !this.state.compliance ?
      <Modal isModalOpen={true} extendClose={this.onExtendClose}   >
          <PageTitle title={"Important Cookie Information"}/>
          <p>This site uses cookies to give you the best possible experience. By continuing to use the site you agree that we can save cookies on your device. Cookies are small text files placed on your device that remember your preferences and some details of your visit. Our cookies don’t collect personal information. For more information and details of how to disable cookies, please read our updated privacy and cookie policy.</p>
      </Modal> : ''
    )
  }
}

export default withCookies(ModalContent);
