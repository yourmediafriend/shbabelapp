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

  componentDidMount() {
    let container;
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    this.app = new PIXI.Application(window.innerWidth, window.innerHeight, { antialias: true, backgroundColor: '0x191A1E' });
    this.mount.appendChild(this.app.view);

    container = new PIXI.Container();
    
    this.bg_A = PIXI.Sprite.fromImage(bgImages_Brutalist[0]);
    this.bg_B = PIXI.Sprite.fromImage(bgImages_Brutalist[0]);

    this.bg_A.anchor.set(0.5);
    this.bg_B.anchor.set(0.5);

    this.bg_A.x = this.app.screen.width / 2;
    this.bg_A.y = this.app.screen.height / 2;

    this.bg_B.x = this.app.screen.width / 2;
    this.bg_B.y = this.app.screen.height / 2;

    container.addChild(this.bg_B);
    this.app.stage.addChild(container);

    container = new PIXI.Container();

    let myMask = new PIXI.Graphics();
    myMask.lineStyle(0);
    myMask.clear();
    myMask.beginFill(0x000000,1);
    // myMask.drawCircle(window.innerWidth/2, window.innerHeight/2, window.innerHeight/3)

    let border = 200;
    myMask.moveTo(0+border,0+border);
    myMask.lineTo(this.app.screen.width-border,0+border);
    myMask.lineTo(this.app.screen.width-border,this.app.screen.height-border);
    myMask.lineTo(0+border,this.app.screen.height-border);
    myMask.endFill()
    container.addChild(myMask);
    this.app.stage.addChild(container);

    container.mask = myMask

    let bg_Container = new PIXI.Graphics();
    bg_Container.lineStyle(0);
    bg_Container.clear();
    bg_Container.beginFill(0xff00ea,1);
    bg_Container.moveTo(0+border,0+border);
    bg_Container.lineTo(this.app.screen.width-border,0+border);
    bg_Container.lineTo(this.app.screen.width-border,this.app.screen.height-border);
    bg_Container.lineTo(0+border,this.app.screen.height-border);
    bg_Container.endFill()

    container.addChild(bg_Container);
    container.addChild(this.bg_A);

    this.addText()

    this.app.stage.interactive = true;
    this.app.stage.mousemove = this.stageMouseMove.bind(this);

  }

  addText() {

    let style = new PIXI.TextStyle({
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

    let richText = new PIXI.Text(textBanner[1].toUpperCase(), style);

    richText.anchor.set(0.5);

    richText.x = this.app.screen.width/2;
    richText.y = this.app.screen.height/2;

    this.app.stage.addChild(richText);


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
        style={{ width: '100%', height: '100%' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default HomeCanvas;
