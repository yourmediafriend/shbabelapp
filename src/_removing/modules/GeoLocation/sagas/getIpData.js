import iplocation from 'iplocation';
import publicIp from 'public-ip';


import {
  get,
} from 'lodash/fp';

import {
  call,
  put,
  select,
} from 'redux-saga/effects';

import {
  failureToRetrieveIpData,
  successToRetrieveIpData,
} from '../reducers/retrieveIpData';

const findLocalIP = () => {
  return new Promise(r=>{let w=window,a=new (w.RTCPeerConnection||w.mozRTCPeerConnection||w.webkitRTCPeerConnection)({iceServers:[]}),b=()=>{};a.createDataChannel("");a.createOffer(c=>a.setLocalDescription(c,b,b),b);a.onicecandidate=c=>{try{c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r)}catch(e){}}})
}

const findPublicIP = () => {
  let response;
  response = publicIp.v4().then(ip => {
    return ip;
  })
  return response;
}


export default function * () {
  let response;
  let myIp;

  try {

    myIp = yield call(findPublicIP);
    response = yield call(iplocation, myIp);

    return yield [
      put(successToRetrieveIpData(response))
    ];

  } catch (e) {
    console.error(e);
    return yield put(failureToRetrieveIpData());
  }

}
