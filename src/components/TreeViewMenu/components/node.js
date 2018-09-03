import React from 'react';
import PropTypes from 'prop-types';
import {VelocityTransitionGroup} from 'velocity-react';
import { NavItem  } from 'reactstrap'
import NodeHeader from './header';
import { flow, get, has, isMatch, includes, map } from 'lodash/fp'

class TreeNode extends React.Component {

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const {node, onToggle} = this.props;
    const {toggled} = node;
    if (onToggle) {
      onToggle(node, !toggled);
    }
  }

  isActiveBranch(obj, currentUrl) {

    const mapChildren=(n) => this.isActiveBranch(n, currentUrl);

    if (isMatch({'url':currentUrl},obj) ) {
      return true;
    }
    else if (has('links', obj)) {
      return  flow(
        get('links'),
        map(mapChildren),
        includes(true)
      )(obj)
    }

    return false;
  }

  animations() {
    const {animations, node} = this.props;
    if (animations === false) {
      return false;
    }
    const anim = Object.assign({}, animations, node.animations);
    return {
      toggle: anim.toggle(this.props),
      drawer: anim.drawer(this.props)
    };
  }

  decorators() {
    // Merge Any Node Based Decorators Into The Pack
    const {decorators, node} = this.props;
    let nodeDecorators = node.decorators || {};
    return Object.assign({}, decorators, nodeDecorators);
  }

  componentWillMount(){
    const {node, onToggle, currentUrl } = this.props;
    const isActiveBranch = this.isActiveBranch(node, currentUrl);
    if (isActiveBranch && node.toggled===undefined) {
      if (node.links) {
        onToggle(node, true);
      }
    }
  }

  render() {
    const {style, node, currentUrl } = this.props;
    const decorators = this.decorators();
    const animations = this.animations();

    // I can probably stop running this twice
    const isActiveBranch = this.isActiveBranch(node, currentUrl);
    return (
      <NavItem style={isActiveBranch ? (style.base, style.base.active) : style.base}>
          {this.renderHeader(decorators, animations, isActiveBranch)}
          {this.renderDrawer(decorators, animations, isActiveBranch)}
      </NavItem>
    );
  }

  renderDrawer(decorators, animations, isActiveBranch) {

    const {node: {toggled}} = this.props;

    console.log(this.props.node);


    if (!animations && !toggled) {
      return null;
    } else if (!animations && toggled) {
      return this.renderChildren(decorators, animations);
    }

    const {animation, duration, ...restAnimationInfo} = animations.drawer;

    return (
      <VelocityTransitionGroup {...restAnimationInfo}
                               ref={ref => this.velocityRef = ref}>
     <div>

        {toggled ? this.renderChildren(decorators, animations) : null}

     </div>
      </VelocityTransitionGroup>
    );

  }

  renderHeader(decorators, animations, isActiveBranch) {
    const {node, style, level, currentUrl } = this.props;
    return (
      <NodeHeader animations={animations}
                  decorators={decorators}
                  level={level}
                  node={Object.assign({}, node) }
                  onClick={this.onClick}
                  style={style}
                  currentUrl={currentUrl}
                  isActiveBranch={isActiveBranch}/>
    );
  }

  renderChildren(decorators) {
    const {animations, decorators: propDecorators, node, style, level, currentUrl} = this.props;
    let children = node.links;

    if (!Array.isArray(children)) {
      children = children ? [children] : [];
    }

    debugger;

    return (
      <div style={{...style.subtree}}>
        <ul style={{...style.subtree.base, ...style.subtree[`level${level}`]}}
            ref={ref => this.subtreeRef = ref}>
          {children.map((child, index) => <TreeNode {...this._eventBubbles()}
                                                    animations={animations}
                                                    decorators={propDecorators}
                                                    key={child.id || index}
                                                    node={Object.assign({}, child)}
                                                    level={level+1}
                                                    style={style}
                                                    currentUrl={currentUrl}/>
          )}
        </ul>
    </div>
    );
  }

  _eventBubbles() {
    const { onToggle } = this.props;
    return {
      onToggle
    };
  }
}

TreeNode.propTypes = {
    style: PropTypes.object.isRequired,
    node: PropTypes.object.isRequired,
    decorators: PropTypes.object.isRequired,
    animations: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
    ]).isRequired,
    isToggled:  PropTypes.bool,
    onToggle: PropTypes.func,
    currentUrl: PropTypes.string,
};

export default TreeNode;
