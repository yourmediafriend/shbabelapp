import React from 'react'
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';
import cx from 'classnames';

import { get } from "lodash/fp";
import { searchModalClose } from "../../modules/Search";
import { OneColumnCenter }  from '../Layout';
import { SearchForm }  from '../Forms';
import Icon from '../Icons';

import styles from './modalStyles.scss';

const ModalCloseButton = ({clickEvent}) => {
  return (
    <div className={styles.modalClose} onClick={clickEvent}>
      <Icon icon={'close'} color={'#fff'} size={'100%'} />
    </div>
  )
}

const SearchModal = ({searchIsOpen, searchModalClose}) => {

  return (
    <Animate
      start={() => ({
        modalOpacity: [0],
        modalDisplay: 'none',
      })}

      update={() => ({
        modalOpacity: [searchIsOpen ? 1 : 0],
        timing: {duration: 500, ease: easeExpOut},
        events: {
          start() {
            if (searchIsOpen){this.setState({modalDisplay: 'block'});}
          },
          end() {
            // dispatch action Opening
            //console.log('notAnimating');
            if (!searchIsOpen){this.setState({modalDisplay: 'none'});}
          },
        },
      })}
    >
      {(state) => {
        return (
          <div className={cx(styles.searchModal)}  style={{display: state.modalDisplay, opacity: state.modalOpacity}} >
            <div>
              <OneColumnCenter contentMain={ <SearchForm /> }/>
              <ModalCloseButton clickEvent={ searchModalClose } />
            </div>
          </div>
        );
      }}
    </Animate>
  )

};

SearchModal.propTypes = {
  searchIsOpen: PropTypes.bool,
  searchModalClose: PropTypes.func,
  modalClassName: PropTypes.string,
};

export const mapStateToProps = (state) => {
  return {
    searchIsOpen: get('searchModal.searchIsOpen', state),
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchModalClose
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SearchModal);
