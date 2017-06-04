import React, { Component, PropTypes } from 'react'
import Slides from './Slides'
import {increment,decrement} from './Actions'
import store from './index'
import { connect } from 'react-redux'
import FontAwesome from 'react-fontawesome'
import './App.css'

class App extends Component {

  handlePrev () {
  store.dispatch(decrement())
  }
  handleNext () {
  store.dispatch(increment())
  }
  render() {
    const {counter} = this.props
    return (
      <div className="on-boarding-wrapper" data-selected={counter}>
        <div className="background"></div>
          <Slides />
          <div className="next-prev-btns">
            <FontAwesome name='chevron-left' data-step={counter} onClick={this.handlePrev.bind(this)} />
            <FontAwesome name='chevron-right' data-step={counter} onClick={this.handleNext.bind(this)} />
          </div>
          <ul className="indicators" data-step={counter}>
            <li><FontAwesome name='circle' /></li>
            <li><FontAwesome name='circle' /></li>
            <li><FontAwesome name='circle' /></li>
          </ul>
          </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter:state.counter
  }
}
App.propTypes = {
  counter: PropTypes.number.isRequired,
}
export default connect (
  mapStateToProps,
)(App);
