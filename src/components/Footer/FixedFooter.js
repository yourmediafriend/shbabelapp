import React, { Component } from 'react';
import styles from './footer.scss';
import cx from 'classnames';
import FooterMusicPlayer from './FooterMusicPlayer';
import ReactDOM from "react-dom";


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
    }

   console.log('XcomponentDidUpdate prevState', prevState.height);
   console.log('XcomponentDidUpdate height', height);

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

export default Footer;
