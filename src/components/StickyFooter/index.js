import React, { Component } from 'react';
import styles from './stickyFooterStyles';

class StickyFooter extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {

    let footerHeight =  '54px'

    return (
      <div style={{paddingTop: footerHeight, pointerEvents:'none'}}>
        <div style={{...styles.footer.base, height:footerHeight}}>
          <div style={{...styles.footer.inner}}>
            <div style={{padding: '0px 15px'}}>
              Sticky Footer Thin
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StickyFooter;
