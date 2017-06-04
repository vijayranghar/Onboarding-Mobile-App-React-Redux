import React from 'react'
import Slide from '../Slide'

class Slides extends React.Component {
  render () {
    return (
      <div className="slides-wrapper">
        <Slide
        message="The first step of onboarding, that is a thing."
        icon="fa fa-fw fa-comments-o"
        />
        <Slide
        message="Second step of onboarding, showing the things."
        icon="fa fa-fw fa-calendar-plus-o"
        />
        <Slide
        message="Final step of onboarding. Weeee, carousels!"
        icon="fa fa-fw fa-gears"
        />
      </div>
    )
  }
}

export default Slides
