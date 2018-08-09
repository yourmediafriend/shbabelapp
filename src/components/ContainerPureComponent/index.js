import React, { Component } from 'react';
import PropTypes from 'prop-types';


import Container from './Container';
import Sticky from './Sticky';

import verge from 'verge';
import S from 'camel-case-selector';


class SvgFlasher extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Sticky>
          {
            ({
               style,
             }) => {
              return (
                <div  style={{...styles.flasher.wrap, ...style}}>
                  OOOO
                </div>
              )
            }
          }
        </Sticky>
      </Container>
    )
  }
}

export default SvgFlasher;
