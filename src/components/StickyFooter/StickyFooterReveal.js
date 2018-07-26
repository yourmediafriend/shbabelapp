import React, { Component } from 'react';
import styles from './stickyFooterStyles';

class StickyFooterReveal extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {

    let footerHeight =  '200px'

    return (
      <div style={{paddingTop: footerHeight, pointerEvents:'none'}}>
        <div style={{...styles.footer.base,...styles.footer.reveal, height:footerHeight,  bottom: '54px',}}>

        </div>
      </div>
    )
  }
}

export default StickyFooterReveal;
