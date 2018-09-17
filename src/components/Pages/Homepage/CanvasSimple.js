import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import verge from 'verge';

import { getOr, assign } from 'lodash/fp';
import S from "camel-case-selector";
import * as PIXI from 'pixi.js';

let bg_1 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536939919/backgrounds/images/brutalist_1.gif";
let bg_2 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536939226/backgrounds/images/brutalist_2.gif";
let bg_3 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536939226/backgrounds/images/brutalist_3.gif";
let bg_4 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536939226/backgrounds/images/brutalist_4.gif";
let bg_5 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536939226/backgrounds/images/brutalist_5.gif";
let bg_6 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536939226/backgrounds/images/brutalist_6.gif";
let bg_7 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536939226/backgrounds/images/brutalist_7.gif";
let bg_8 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536939226/backgrounds/images/brutalist_8.gif";
let bg_9 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536939226/backgrounds/images/brutalist_9.gif";
let bg_10 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536939226/backgrounds/images/brutalist_10.gif";
let bg_11= "https://res.cloudinary.com/dghff7rpa/image/upload/v1536939226/backgrounds/images/brutalist_11.gif";

let bg_12= "https://res.cloudinary.com/dghff7rpa/image/upload/v1537142824/backgrounds/images/brutalist.jpg";
let bg_13= "https://res.cloudinary.com/dghff7rpa/image/upload/v1537145752/backgrounds/images/brutal-trash-polka.jpg";


let bgImages_Brutalist= [bg_13, bg_10, bg_3];

let textBanner = ['Power','Exploitation','Corruption','Despair', 'Fake News','Exploitation','Shaming','Trolls'];

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;



class HomeCanvas extends Component {

  constructor() {
    super(...arguments);
  }

  componentWillMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  }

  componentDidMount() {
    let container;
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    this.app = new PIXI.Application(window.innerWidth, window.innerHeight, { antialias: true, backgroundColor: '0x191A1E' });
    this.mount.appendChild(this.app.view);
    this.ticker = new PIXI.ticker.Ticker();

    container = new PIXI.Container();
    
    this.bg_A = PIXI.Sprite.fromImage(bgImages_Brutalist[0]);
    this.bg_B = PIXI.Sprite.fromImage(bgImages_Brutalist[0]);

    this.bg_A.anchor.set(0.5);
    this.bg_A.width = this.app.screen.width;
    this.bg_A.height = this.app.screen.height;
    this.bg_A.x = this.app.screen.width / 2;
    this.bg_A.y = this.app.screen.height / 2;
    this.bg_A.alpha = 0.5;

    this.bg_B.anchor.set(0.5);
    this.bg_B.width = this.app.screen.width;
    this.bg_B.height = this.app.screen.height;
    this.bg_B.x = this.app.screen.width / 2;
    this.bg_B.y = this.app.screen.height / 2;


    container.addChild(this.bg_B);
    this.app.stage.addChild(container);

    container = new PIXI.Container();
    this.app.stage.addChild(container);

    this.myMask = new PIXI.Graphics();
    this.drawGraphics(this.myMask);

    container.addChild(this.myMask);
    container.mask = this.myMask

    this.bg_Container = new PIXI.Graphics();
    this.drawGraphics(this.bg_Container);

    container.addChild(this.bg_Container);

    this.addText()

    this.stopTicker();
    this.ticker.add(this.textAnimation)
    this.startTicker();

    this.app.stage.interactive = true;
    this.app.stage.mousemove = this.stageMouseMove.bind(this);

  }

  componentDidUpdate() {

    if (this.text_A){
      this.text_A.text = textBanner[this.props.activeSceneId].toUpperCase();
      this.text_A.style.letterSpacing = 25;
    }
    if (this.text_B){
      this.text_B.text = textBanner[this.props.activeSceneId].toUpperCase();
    }
  }


  componentWillUnmount() {
    this.stopTicker();
    this.mount.removeChild(this.app.domElement);
  }


  onResize = () => {

    if (this.app){
      const parent = this.app.view.parentNode;
      this.app.renderer.resize(parent.clientWidth, parent.clientHeight);
      this.drawGraphics(this.myMask);
      this.drawGraphics(this.bg_Container);
      this.text_A.x = this.app.screen.width/2;
      this.text_A.y = this.app.screen.height/2;
      this.text_B.x = this.app.screen.width/2;
      this.text_B.y = this.app.screen.height/2;
    }

  };


  drawGraphics(shape) {
    let border = 200;
    shape.lineStyle(0);
    shape.clear();
    shape.beginFill(0x000000,1);
    shape.moveTo(0+border,0+border);
    shape.lineTo(this.app.screen.width-border,0+border);
    shape.lineTo(this.app.screen.width-border,this.app.screen.height-border);
    shape.lineTo(0+border,this.app.screen.height-border);
    shape.endFill();
  }

  startTicker() {
    this.ticker.start();
  }

  stopTicker() {
    this.ticker.stop();
  }

  addText() {

    let style = new PIXI.TextStyle({
      align: 'center',
      fontFamily: 'Helvetica, sans-serif',
      fontSize: 250,
      fontWeight: 700,
      fill: ['#ffffff'],
      letterSpacing: 0,
      dropShadow: false,
      wordWrap: false,
      wordWrapWidth: window.innerWidth + 200,
      padding: 50,
      cacheAsBitmap: true
    });

    let container = new PIXI.Container();
    let sprite = PIXI.Sprite.fromImage(bgImages_Brutalist[0]);


    sprite.width = this.app.screen.width;
    sprite.height = this.app.screen.height;
    sprite.x = this.app.screen.width / 2;
    sprite.y = this.app.screen.height / 2;
    sprite.anchor.set(0.5);
    sprite.alpha = 0.5;

    this.text_A = new PIXI.Text(textBanner[this.props.activeSceneId].toUpperCase(), style);
    this.text_A.anchor.set(0.5);
    this.text_A.x = this.app.screen.width/2;
    this.text_A.y = this.app.screen.height/2;

    style = new PIXI.TextStyle({
      align: 'center',
      fontFamily: 'Helvetica, sans-serif',
      fontSize: 180,
      fontWeight: 700,
      fill: ['#ffffff'],
      letterSpacing: 25,
      dropShadow: false,
      wordWrap: false,
      wordWrapWidth: window.innerWidth + 200,
      padding: 50,
    });

    this.text_B = new PIXI.Text(textBanner[this.props.activeSceneId].toUpperCase(), style);
    this.text_B.anchor.set(0.5);
    this.text_B.x = this.app.screen.width/2;
    this.text_B.y = this.app.screen.height/2;

    this.app.stage.addChild(this.text_B);

    container.addChild(sprite);
    container.addChild(this.text_B);

    this.app.stage.addChild(this.text_A);
    container.mask = this.text_A

    this.app.stage.addChild(container);





  }

  textAnimation = (deltaTime) => {
    // do something every frame
    this.text_A.style.letterSpacing += 0.5;
  }


  stageMouseMove(event){
    let mouseposition = event.data.global;

    // Get distance from center of stage
    let stageCenter = {
      x: this.app.screen.width/2,
      y: this.app.screen.height/2
    };

    let distCenter = this.getDistanceFromAB(mouseposition, stageCenter);
    let distMax = this.getDistanceFromAB({x:0,y:0} , stageCenter);
    let distPerc = distCenter / distMax;

/*
    let distCorner = this.getDistanceFromAB({x:0,y:0} , {x:200,y:200});
    let cornerPerc = distCorner / distMax;
    let borderPercX = 200/this.app.screen.width/2;
    let borderPercY = 200/this.app.screen.height/2;
*/

    let x = 0.1 * distPerc;

    this.bg_A.scale.set(1-x);
    this.bg_B.scale.set(1+x);


  }

  getDistanceFromAB(pointA, pointB) {
    return Math.sqrt(Math.pow(pointA.x - pointB.x,2) + Math.pow(pointA.y - pointB.y,2));
  }


  render() {
    return (
      <div
        activeSceneId={this.props.activeSceneId}
        style={{ width: '100%', height: '100%' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default HomeCanvas;
