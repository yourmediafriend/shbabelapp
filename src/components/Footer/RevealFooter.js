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
    const { height } =  this.footerElement.getBoundingClientRect();
    this.setState({ height })
  }

  componentDidUpdate(prevProps, prevState) {

    const { height } =  this.footerElement.getBoundingClientRect();

    if (prevState.height !==  height ) {
      this.setState({ height })
      this.props.setRevealFooterHeight(this.state.height);
      console.log('RF componentDidUpdate height', height);
      console.log('RF componentDidUpdate state.height', this.state.height);
      console.log('RF componentDidUpdate fixedFooterHeight', this.props.fixedFooterHeight);
    }

  }

  onResize = () => {
    if (this.footerElement && this.footerElement!== null) {
      const { height } =  this.footerElement.getBoundingClientRect();
      this.setState({ height })
    }
  }

  render() {
    return (
      <div ref={(element) => this.footerElement = element} className={cx(styles.footer,styles.reveal)} style={{ paddingBottom:`${this.props.fixedFooterHeight + 20}px`}}>
          <FooterMenu />
      </div>
    )
  }
}



export const mapStateToProps = (state) => {
  return {
    fixedFooterHeight: get('appModule.fixedFooterHeight', state),
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
