import {get} from "lodash/fp";

export default (state) => {
  return get('retrieveIpData.currentIP', state);

}
