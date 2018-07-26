import React from 'react'
import PropTypes from 'prop-types';
import GoogleMap from '../../GeoLoction/googleMap';
import PageTitle from '../../PageTitle';

class ModalContent extends React.Component {

  render() {
    return (
      <div>
        <div style={{maxWidth: '620px', height: '100%', margin: '0 auto', textAlign: 'center'}}>
          <PageTitle title={"Current Location"}/>
        </div>
        <GoogleMap />
      </div>
    )
  }
}

export default ModalContent;
