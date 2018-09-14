import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import verge from 'verge';

import { getOr, assign } from 'lodash/fp';
import S from "camel-case-selector";
import * as PIXI from 'pixi.js';


class HomeCanvas extends Component {

  constructor() {
    super(...arguments);
    this.myRef = React.createRef();
  }

  componentDidMount() {

    let app = new PIXI.Application(window.innerWidth, window.innerHeight, { antialias: true });
    let $el = ReactDOM.findDOMNode(this.myRef.current);
    $el.appendChild(app.view);

    app.stage.interactive = true;

    let bg = PIXI.Sprite.fromImage('https://pixijs.io/examples/required/assets/BGrotate.jpg');

    bg.anchor.set(0.5);

    bg.x = app.screen.width / 2;
    bg.y = app.screen.height / 2;

    app.stage.addChild(bg);

    let container = new PIXI.Container();
    container.x = app.screen.width / 2;
    container.y = app.screen.height / 2;

    // add a bunch of sprites
    let bgFront = PIXI.Sprite.fromImage('https://pixijs.io/examples/required/assets/SceneRotate.jpg');
    bgFront.anchor.set(0.5);

    let light2 = PIXI.Sprite.fromImage('https://pixijs.io/examples/required/assets/LightRotate2.png');
    light2.anchor.set(0.5);

    let light1 = PIXI.Sprite.fromImage('https://pixijs.io/examples/required/assets/LightRotate1.png');
    light1.anchor.set(0.5);

    let panda =  PIXI.Sprite.fromImage('https://pixijs.io/examples/required/assets/panda.png');
    panda.anchor.set(0.5);

    container.addChild(bgFront, light2, light1, panda);

    app.stage.addChild(container);

// let's create a moving shape
    let thing = new PIXI.Graphics();
    app.stage.addChild(thing);
    thing.x = app.screen.width / 2;
    thing.y = app.screen.height / 2;
    thing.lineStyle(0);

    container.mask = thing;

    let count = 0;

    app.stage.on('pointertap', function() {
      if (!container.mask) {
        container.mask = thing;
      }
      else {
        container.mask = null;
      }
    });

    let help = new PIXI.Text('Click or tap to turn masking on / off.', {
      fontFamily: 'Arial',
      fontSize: 12,
      fontWeight:'bold',
      fill: 'white'
    });
    help.y = app.screen.height - 26;
    help.x = 10;
    app.stage.addChild(help);

    app.ticker.add(function() {

      bg.rotation += 0.01;
      bgFront.rotation -= 0.01;

      light1.rotation += 0.02;
      light2.rotation += 0.01;

      panda.scale.x = 1 + Math.sin(count) * 0.04;
      panda.scale.y = 1 + Math.cos(count) * 0.04;

      count += 0.1;

      thing.clear();

      thing.beginFill(0x8bc5ff, 0.4);
      thing.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count)* 20);
      thing.lineTo(120 + Math.cos(count) * 20, -100 + Math.sin(count)* 20);
      thing.lineTo(120 + Math.sin(count) * 20, 100 + Math.cos(count)* 20);
      thing.lineTo(-120 + Math.cos(count)* 20, 100 + Math.sin(count)* 20);
      thing.rotation = count * 0.1;
    });

  }


  render() {
    return (
      <div ref={this.myRef} />
    )
  }
}

export default HomeCanvas;
