import React, { Component } from 'react';
import cx from 'classnames';
import { Button } from 'reactstrap';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import styles from './widget.scss';


class Widget extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);

    const { cookies } = props;
    this.state = {
      name: cookies.get('name') || 'Ben'
    };

  }

  handleSubmit () {
    const { cookies } = this.props;
    cookies.set('name', 'TIT', { path: '/' });
  }

  render() {

    const { name } = this.state;

    return (
      <div className={cx(styles.widget, this.props.className)}>
        <div className={styles.inner}>
          <div className={styles.body}>
            {name}
          </div>
          <div className={styles.footer}>
            <Button type="submit"  onClick={this.handleSubmit.bind(this)} >Set Cookie!</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default withCookies(Widget);
