import React from "react";
import PropTypes from 'prop-types';
import {Helmet} from "react-helmet";
import { __ENV__ } from '../../utils/constants';
import {
  get,
} from 'lodash/fp'

const siteUrl = get('siteUrl', __ENV__);
const siteName = get('siteName', __ENV__);

const getTitle = (siteName, pageTitle ) => {
  return pageTitle ? siteName +' - '+ pageTitle : siteName ;
}

const HeaderManager = (props) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{getTitle(siteName, props.pageTitle)}</title>
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  )
};

HeaderManager.propTypes = {
  pageTitle: PropTypes.string,
};

export default HeaderManager;