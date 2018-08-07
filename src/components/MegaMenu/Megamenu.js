import React from 'react';
import Animate from 'react-move/Animate';
import { easeQuadOut   } from 'd3-ease';
import {first, getOr, last, forEach, keys, map} from "lodash/fp";
import styles from './headerNavStyles';
import fractalSrc from '../../media/fractal.jpg';

let menuAnimation = easeQuadOut;

class MenuItem extends React.Component {

  renderTitle() {

    const { item:{ name }, level } = this.props;

    if (level===1){
      return (<h3 style={styles.menulist.menuTitle}>{ name }</h3>);
    } else {
      return (<a style={styles.menulist.a} href=''>{ name }</a>);
    }
  }

  renderMenu() {

    const { item:{ children }, level } = this.props;

    if (Array.isArray(children) && children.length){
      return (
       <MenuBuilder
          items = { children }
          level = {level + 1}
        />
      );
    }
  }

  render() {
    return (
      <li>
        {this.renderTitle()}
        {this.renderMenu()}
      </li>
    )
  }
}

class MenuBuilder extends React.Component {

  render() {
    const {items, level } = this.props;
    const compStyle = (level) =>  level===1 ? {...styles.megamenu.layout.columns.base, ...styles.megamenu.layout.columns.oneQuarter} : styles.menulist ;
    return (
      <ul style={{...compStyle(level)}} >
        {items.map((child, index) =>
          <MenuItem key={index} item={child} level={level} />
        )}
      </ul>
    )
  }
}


class NodeMegamenu extends React.Component {

  // split array into x parts
  chunkify(a, n, balanced) {

    if (n < 2)
      return [a];

    let len = a.length,
      out = [],
      i = 0,
      size;

    if (len % n === 0) {
      size = Math.floor(len / n);
      while (i < len) {
        out.push(a.slice(i, i += size));
      }
    }

    else if (balanced) {
      while (i < len) {
        size = Math.ceil((len - i) / n--);
        out.push(a.slice(i, i += size));
      }
    }

    else {

      n--;
      size = Math.floor(len / n);
      if (len % size === 0)
        size--;
      while (i < size * n) {
        out.push(a.slice(i, i += size));
      }
      out.push(a.slice(size * n));

    }

    return out;
  }


  getSumOfArrayValues(a) {
    return a.reduce(function (acc, val) {
      return acc + val;
    }, 0);
  }


  getMaxValueKey(arr, compare) {

    if (arr.length === 0) {
      return -1;
    }

    let max = 0;
    let maxIndex = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max ) {
        if (compare[i].length > 1){
          maxIndex = i;
          max = arr[i];
        }
      }
    }
    return maxIndex;
  }


  shiftValue(arr) {

    let dir = 1;

    const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);

    let b = arr.map((child, index) => {
      return this.getSumOfArrayValues (child.map((child, index) => {return sumValues(Object.values(child))}));
    });

    let pos = this.getMaxValueKey(b, arr);

    let lv = last(arr[pos]);
    let fv = first(arr[pos]);

    if (!(typeof b[pos + dir] === "undefined") && b[pos+dir] + Object.values(lv)[0] < b[pos]) {
      // move forward
      arr[pos + dir].unshift(lv);
      arr[pos].splice(-1, 1);
      return arr;
    }
    else {
      dir = -1;
      if (!(typeof b[pos + dir] === "undefined") && b[pos+dir] + Object.values(fv)[0] < b[pos]) {
        // move backward
        arr[pos + dir].push(fv);
        arr[pos].splice(0, 1);
        return arr;
      }
    }
  }


  splitChildren(children, columns) {

    let a

    let menuListCount =  children.map((child, index) => {
      return {[index] : getOr ([], 'children', child).length }
    });

    a = this.chunkify (menuListCount, columns, true );

    while(this.shiftValue(a));

    return a;

  }


  organiseMenu(node, columns) {

    let children = node.children;
    let columnCount = [];
    let ColumnMenuStructure = []

    if (!Array.isArray(children)) {
      children = children ? [children] : [];
    }

    if (children.length) {
      columnCount = this.splitChildren(children, columns);
      const functionForMap = (value, children) => {
        return children[keys(value)];
      }

      const functionForEach = (value, children) => {
        return ColumnMenuStructure.push(map((value) => {return functionForMap(value, children)} ,value))
      }

      forEach((value) => {return functionForEach(value, children)} , columnCount);

    }

    return ColumnMenuStructure

  }

  render() {
    const {node, level, columns, isHovering } = this.props;
    let ColumnMenuStructure = this.organiseMenu(node, columns);
    return (
      <Animate
        start={() => ({
          transformY: [-100]
        })}
        update={() => ({
          transformY:[isHovering ? 0 : -100 ],
          timing: {duration: 500, ease: menuAnimation},
          events: {
            start() {
             if (isHovering){this.setState({menuDisplay: true}); }
            },
            end() {
              if (!isHovering){this.setState({menuDisplay: false}); }
            },
          },
        })}
      >
        {(state) => {

          const compStyle = () => {
            return isHovering ? {zIndex: 1} : {zIndex: -1};
          }

          const styleDisplay = () => {
            return state.menuDisplay  ? {display: 'block'} : {display: 'none'}
          }

          return (
            <div style={{...styles.megamenu.outer, ...styleDisplay(), ...compStyle()}}>
              <div style={{...styles.megamenu.inner, ...{transform: 'translateY('+state.transformY+'%)'}}}>
                <div style={{...styles.megamenu.layout}}>
                  {ColumnMenuStructure.map((child, index) =>  <MenuBuilder
                      key={index}
                      items = {child}
                      level = {level}
                    />
                  )}
                  <ul style={{...styles.megamenu.layout.columns.base, ...styles.megamenu.layout.columns.oneQuarter, ...{borderRight: 0}}} >
                    <li>
                      <img src={fractalSrc} style={{width:'100%'}} alt='' />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        }}
      </Animate>
    )
  }
}

export default NodeMegamenu;
