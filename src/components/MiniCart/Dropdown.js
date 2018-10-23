import React  from 'react';
import Proptypes from 'prop-types';
import styles from './styles.scss';
import cx from "classnames";
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

const Item = props => {
  return (
    <ListGroupItem className={cx(styles.item)}>
      <div className={cx(styles.inner)}>

        <div className={cx(styles.thumbnailWrap)}>
          <div className={cx(styles.thumbnail)}>
            <a href={'#'} className={cx(styles.img)}>
              <img src={'https://i.ytimg.com/vi/Xoe3Nn5vuBg/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLD3dNS3yMvgH6Mc525Xhn5yHbMJ3Q'} alt='' />
            </a>
            <div className={cx(styles.overlay)}>
              thumbnail Overlay
            </div>
          </div>
        </div>
        <div className={cx(styles.detailsWrap)}>
          <a href={'#'}>
            <h3 className={cx(styles.title)}> Who is Banksy?</h3>
          </a>
          <div className={cx(styles.username)}>John Walker</div>
          <div className={cx(styles.count)}>1000k</div>
        </div>
        <div className={cx(styles.pricewrap)}>
          <div className={cx(styles.price)}>£100.00</div>
        </div>

      </div>
    </ListGroupItem>
  )
}

const Dropdown = props => {
  return (
      <div className={cx(styles.miniCartWrap)}>
        <div className={cx(styles.scrollable)}>
          <ListGroup className={cx(styles.miniCart, props.className)}>
            <Item {...props} />
            <Item {...props} />
            <Item {...props} />
            <Item {...props} />
            <Item {...props} />
            <Item {...props} />
            <Item {...props} />
          </ListGroup>
        </div>
        <div className={cx(styles.fixToBottom)}>
          <div className={cx(styles.totalsWrap)}>
            <div className={cx(styles.inner)}>
              <div className={cx(styles.tax, styles.item)}>
                <span className={cx(styles.label)}>Tax</span><span className={cx(styles.pricewrap)}>0.00</span>
              </div>
              <div className={cx(styles.grand, styles.item)}>
                <span className={cx(styles.label)}>Grand Total</span><span className={cx(styles.pricewrap)}>£10.00</span>
              </div>
            </div>
          </div>
          <div className={cx(styles.actionsWrap)}>
            <div className={cx(styles.inner)}>
              <Button type="submit">Checkout</Button>
              <Button type="submit">Cart</Button>
            </div>
          </div>
        </div>

    </div>
  )
};

export default Dropdown;