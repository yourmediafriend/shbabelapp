import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import socialMediaIconsComp from './SocialMediaIconsComp';

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(socialMediaIconsComp);