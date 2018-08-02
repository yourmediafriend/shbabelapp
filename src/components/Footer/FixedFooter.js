import React, { Component } from 'react'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { setFixedFooterHeight } from "../../modules/Main";
import styles from './footer.scss';
import cx from 'classnames';
import FooterMusicPlayer from './FooterMusicPlayer';


class Footer extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = { height:0 }
  }

  componentWillMount(){
    window.addEventListener('resize', this.onResize);
    this.onResize();
  };

  componentDidMount() {
    const { height } =  this.fixedFooter.getBoundingClientRect();
    this.setState({ height })
  }

  componentDidUpdate(prevProps, prevState) {

    // this doesn't help initial render.
    const { height } =  this.fixedFooter.getBoundingClientRect();

    if (prevState.height !==  height ) {
      this.setState({ height })
      this.props.setFixedFooterHeight(this.state.height);
    }

    console.log('FF componentDidUpdate height', height);
    console.log('FF componentDidUpdate state.height', this.state.height);

  }

  onResize = () => {
    if (this.fixedFooter && this.fixedFooter!== null) {
      const { height } =  this.fixedFooter.getBoundingClientRect();
      this.setState({ height })
    }
  }

  render() {
    return (
      <div ref={(element) => this.fixedFooter = element} className={cx(styles.footer, styles.fixed)}>
        <FooterMusicPlayer />
      </div>
    )
  }
}

export const mapStateToProps = (state) => {
  return {}
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setFixedFooterHeight,
    },
    dispatch
  );

Footer.propTypes = {
  setFixedFooterHeight: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
