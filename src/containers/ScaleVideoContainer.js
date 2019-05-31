import { connect } from 'react-redux';
import {setVideoScale} from "../actions";
import ScaleVideo from "../components/ScaleVideo";

const mapDispatchToProps = (dispatch) => {
  return {
    set: (scale) => dispatch(setVideoScale(scale))
  }
}

export default connect(null, mapDispatchToProps)(ScaleVideo);