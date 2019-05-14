import React, { Component } from 'react'
import {connect} from 'react-redux';
import Message from '../components/Message';

class MessageContainer extends Component {
  render() {
      var {mess} = this.props;
    return (
      <Message mess = {mess}/>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        mess: state.message
    }
}
export default connect(mapStateToProps)(MessageContainer);
