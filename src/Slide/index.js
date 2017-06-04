import React from 'react'
import './style.css'

class Slide extends React.Component {
  render () {
    return (
      <div className="slide">
        <i className={this.props.icon}></i>
        <p className="message">{this.props.message}</p>
      </div>
    )
  }
}

export default Slide
