import React from "react";
import {Helmet} from "react-helmet";
import { __ENV__ } from '../../utils/constants';
import {
  get,
} from 'lodash/fp'

import applTouchIcon57x57 from './media/apple-touch-icon-57x57.png'


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

export default HeaderManager;