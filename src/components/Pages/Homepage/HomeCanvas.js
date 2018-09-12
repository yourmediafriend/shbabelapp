import React, { Component } from 'react';
import cx from 'classnames';
import styles from './homepage.scss'

import ReactPIXI from 'react-pixi';
import PIXI from 'pixi.js';

const Sprite = React.createFactory(ReactPIXI.Sprite);
const DisplayObjectContainer = React.createFactory(ReactPIXI.DisplayObjectContainer);

const CupcakeComponent = React.createClass({
  displayName: 'CupcakeComponent',
  // maps from cupcake toppings to the appropriate sprite
  spritemapping : {
    'vanilla' : assetpath('creamVanilla.png'),
    'chocolate' : assetpath('creamChoco.png'),
    'mocha' : assetpath('creamMocha.png'),
    'pink' : assetpath('creamPink.png'),
  },
  render : function () {
    let creamimagename = this.spritemapping[this.props.topping];
    let xposition = this.props.xposition;
    return DisplayObjectContainer(
      {x:xposition, y:100 },
      Sprite({image:creamimagename, y:-35, anchor: new PIXI.Point(0.5,0.5), key:'topping'}, null),
      Sprite({image:assetpath('cupCake.png'), y:35, anchor: new PIXI.Point(0.5,0.5), key:'cake'}, null)
    );
  }
});


class HomeCanvas extends Component {
  render() {
    return (
      <div>
<CupcakeComponent />
      </div>
    )
  }
}

export default HomeCanvas;
