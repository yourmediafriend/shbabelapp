import React from 'react'
import { LoginForm, SignupForm, PasswordForgotForm } from '../../Forms';
import Slider from "react-slick";

const FormNav = ({style, slideGoTo, id, text}) => {
  return (
      <a href={''} style={style} onClick={(e) => slideGoTo(id)}>{text}</a>
  )
};

class Slide extends React.Component {

  render() {

    let Form =  this.props.node.form;
    let navigation =  this.props.node.navigation;

    return (
      <div style={{height:'100%'}}>
        <div style={{padding:'80px 40px', height:'100%'}} >
          <h2  style={{marginBottom:'30px'}}>{this.props.node.title}</h2>
          <Form />
          <div style={{marginTop: '15px'}}>
            {navigation.map((node, index) =>
              <FormNav
                key={index}
                slideGoTo={this.props.slideGoTo}
                text={node.text}
                id={node.id}
                style={{fontSize: '0.95em', marginRight: '20px'}}
              />
          )}
          </div>
        </div>
      </div>
    );

  }
}

class SimpleSlider extends React.Component {

  constructor(props) {

    super(props);

    this.formOrder =  [
      {
        form: LoginForm,
        title: 'Login',
        navigation: [
            {
              text: 'Sign Up',
              id: 1,
            },
            {
              text: 'Forgot Password',
              id: 2,
            }
          ]
      },
      {
        form: SignupForm,
        title: 'Sign Up',
        navigation: [
          {
            text: 'Login',
            id: 0,
          }
        ]
      },
      {
        form: PasswordForgotForm,
        title: 'Forgotten Password',
        navigation: [
          {
            text: 'Login',
            id: 0,
          },
          {
            text: 'Sign Up',
            id: 1,
          },
        ]
      },
    ];

    this.state = {
      slides: [0,0]
    };

    this.slideGoTo = this.slideGoTo.bind(this);

  };

  slideGoTo = (value) => {
    let slides = [value];
    let currentSlideRef = this.state.slides[this.slider.innerSlider.state.currentSlide];
    this.slider.innerSlider.state.currentSlide > 0 ? slides.push(currentSlideRef) : slides.unshift(currentSlideRef);
    this.setState({slides: slides});
  };

  componentWillReceiveProps(props){
    let contentId = props.contentId;
    let slides = [contentId];
    this.setState({slides: slides});
  };

  componentDidUpdate() {

    let goto = 0;
  //  this.slider.slickGoTo(0,true);

    if (this.slider.props.children.length > 1 ){
      this.slider.innerSlider.state.currentSlide > 0 ? goto = 0 : goto = 1;

      // weird little delay
      setTimeout(function () {
        this.slider.innerSlider.slideHandler(goto);
      }.bind(this), 10);

    }

  }

  render() {

    let settings = {
      initialSlide: 0,
      dots: false,
      adaptiveHeight: false,
      infinite: true,
      draggable: false,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: (index) => {},
      onReInit: () => {},
    };

    return (
      <Slider ref={slider => (this.slider = slider)} {...settings}>
        {this.state.slides.map((node, index) =>
          <Slide
            key={index}
            node={this.formOrder[node]}
            slider={this.slider}
            slideGoTo={this.slideGoTo}
          />
        )}
      </Slider>
    );
  }
}

class ModalContent extends React.Component {

  render() {

    console.log(this.props.contentId);

    return (
      <div style={{maxWidth: '620px', display:'block', width: '100%', height: '100%', margin: '0 auto 0'}}>
        <SimpleSlider style={{width:'100%', height:'100%'}} contentId={this.props.contentId}/>
      </div>
    )
  }
}

export default ModalContent;
