import React, { Component } from 'react'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { setRevealFooterHeight } from "../../modules/App";
import styles from './footer.scss';
import cx from 'classnames';

import FooterMenu from './FooterMenu';
import {get} from "lodash/fp";

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = { height:0 }
  }

  componentWillMount(){
    window.addEventListener('resize', this.onResize);
    this.onResize();
  };

  componentDidMount() {
    if (this.footerElement) {
      const { height } = this.footerElement.getBoundingClientRect();
      this.setState({ height })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.footerElement) {
      const { height } =  this.footerElement.getBoundingClientRect();
      if (prevState.height !==  height ) {
        this.setState({ height })
        this.props.setRevealFooterHeight(this.state.height);
      }
    }
  }

  componentWillUnmount() {
    this.props.setRevealFooterHeight(0);
  }

  onResize = () => {
    if (this.footerElement && this.footerElement!== null) {
      const { height } =  this.footerElement.getBoundingClientRect();
      this.setState({ height })
    }
  }

  render() {

    switch(this.props.breakpoint) {
      case 'large':
      case 'medium':
        return (
          <div ref={(element) => this.footerElement = element} className={cx(styles.footer,styles.reveal)} style={{ paddingBottom:`${this.props.fixedFooterHeight}px`}}>
            <div className={styles.footerInner}>
              <FooterMenu />
            </div>
          </div>
        );
      default: return null;
    }
  }
}

export const mapStateToProps = (state) => {
  return {
    fixedFooterHeight: get('appModule.fixedFooterHeight', state),
    breakpoint: get('appModule.breakpoint', state),
  }
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setRevealFooterHeight,
    },
    dispatch
  );

Footer.propTypes = {
  setRevealFooterHeight: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
