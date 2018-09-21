import React from 'react';
import Animate from 'react-move/Animate';
import { easeQuadOut   } from 'd3-ease';
import {first, getOr, get, last, forEach, keys, map, flow} from "lodash/fp";
import styles from './megaMenu.scss';
import cx from 'classnames'
import { Col, ListGroup, ListGroupItem } from 'reactstrap';

import fractalSrc from '../../media/fractal.jpg';

let menuAnimation = easeQuadOut;

class MenuItem extends React.Component {

  renderTitle() {

    const { item:{ name }, level } = this.props;

    if (level===1){
      return (<h3 className={styles.menuTitle}>{ name }</h3>);
    } else {
      return (<a href=''>{ name }</a>);
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
      <ListGroupItem className={styles.menuList}>
        {this.renderTitle()}
        {this.renderMenu()}
      </ListGroupItem>
    )
  }
}

class MenuBanner extends React.Component {

  getSrc = (image) => {
    switch (image) {
      case 'fractalSrc':
        return fractalSrc;
      default: return;
    }
  }

  render() {
    return (
      <img src={this.getSrc(this.props.image)} alt={''} style={{width:'100%'}}/>
    )
  }
}

class ExtraContent extends React.Component {


  createMarkup = (markUp) => {
    return {__html: markUp};
  };

  getContent = (node, pos) => flow(
                              get(pos),
                              first,
                              get('content')
                            )(node);

  getType = (node, pos) => flow(
                              get(pos),
                              first,
                              get('type')
                            )(node);

  render() {

    const {node, pos, columns} = this.props;

    if (this.getType(node, pos) === 'html') {
      return <Col className={cx('column', pos)} style={{flexBasis: (100/columns) + '%', flexGrow: 0}} dangerouslySetInnerHTML={ this.createMarkup(this.getContent(node, pos)) } />
    }
    else if (this.getType(node, pos) === 'image') {
      return <Col className={cx('column', pos)} style={{flexBasis: (100/columns) + '%', flexGrow: 0}}><MenuBanner image={this.getContent(node, pos)} /></Col>
    }

    return null;

  }

}


class MenuBuilder extends React.Component {

  listGroup = (items, level) => {
    return (
      <ListGroup>
        {items.map((child, index) =>
          <MenuItem key={index} item={child} level={level} />
        )}
      </ListGroup>
    );
  }

  render() {
    const {items, level, columns } = this.props;
    return level===1 ? <Col className="column" style={{flexBasis: (100/columns) + '%', flexGrow: 0}}>{this.listGroup(items, level)}</Col> : this.listGroup(items, level);
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

    if (!get('children',node) && !get('before',node) && !get('after',node)) {
      return null;
    }

    let columnCnt = columns;

    if (getOr([],'before', node).length) {
      columnCnt--;
    }
    if (getOr([],'after', node).length) {
      columnCnt--;
    }
    // this is in the wrong place, should'nt need to calaculate on every hover
    let ColumnMenuStructure = this.organiseMenu(node, columnCnt);

    return (
      <Animate
        start={() => ({
          transformY: [-100]
        })}
        update={() => ({
          transformY:[isHovering ? 0 : -100 ],
          timing: {duration: 0, ease: menuAnimation},
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

          return (
            <div className={cx(styles.megaMenu, state.menuDisplay ? styles.show : '')}  style={isHovering ? {zIndex: 1} : {zIndex: -1}}  >
              <div className={cx(styles.inner)} style={{...{transform: 'translateY('+state.transformY+'%)'}}}>
                <div className={cx(styles.layout)}>
                  <ExtraContent pos={'before'} columns={columns} node={node} />
                  {ColumnMenuStructure.map((child, index) =>  <MenuBuilder
                      key={index}
                      items = {child}
                      level = {level}
                      columns = {columns}
                    />
                  )}
                  <ExtraContent pos={'after'}  columns={columns} node={node} />
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
