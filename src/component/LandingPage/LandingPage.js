import React, { Component } from 'react'
import axios from 'axios'
import { AddComment } from '../../component'

class LandingPage extends Component {
  /**
   * Default constructor
   */
  constructor(props) {
    super()
    this.state = {
      comments: []
    }
  }

  /**
   * Life cyle API that is invoked immediately before a component is mounted
   */
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/comments`).then(res => {
      const comments = res.data
      this.setState({ comments })
    })
  }

  /**
   * Render function to view this component
   */
  render() {
    return (
      <div>
        <AddComment />
      </div>
    )
  }
}

export default LandingPage
