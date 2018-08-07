import querystring from 'querystring';

import {
  call,
} from 'redux-saga/effects';

import request from './request';

/**
 * Convert a map into a query string.
 *
 * @param {object} query - The map to convert.
 */
const getQueryString = (query) => querystring.stringify(query);

/**
 * Build a URL.
 *
 * Given a query string and a URL, resolve this into one URL.
 *
 * @param {string} endpoint - The base URL.
 * @param {string} queryString - The query string.
 * @return {string} Resolved URL.
 */
const getUrl = (endpoint, queryString) => {
	if (endpoint.indexOf('?') === -1) {
		return `${endpoint}?${queryString}`;
	} else {
		return `${endpoint}&${queryString}`;
	}
}

export default function *(endpoint, query) {

   const url = getUrl(
      endpoint,
      getQueryString(query)
    );

    const params = {
      method: 'GET',
    };

    return yield call(request, url, params);
}
