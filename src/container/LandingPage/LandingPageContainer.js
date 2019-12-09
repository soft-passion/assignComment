import React, { Component } from 'react'
import { LandingPage } from '../../component'

class LandingPageContainer extends Component {
  /**
   * Default constructor
   */
  constructor(props) {
    super()
  }

  /**
   * Render function to view this component
   */
  render() {
    return (
      <div>
        <LandingPage onClick={this.handleButtonsClick} />
      </div>
    )
  }
}

export default LandingPageContainer
