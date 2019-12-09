import React, { Component } from 'react'
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles'
import { AddComment } from '../../component'
import InfiniteScroll from "react-infinite-scroll-component";

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(6),
    [theme.breakpoints.up(1000 + theme.spacing(6))]: {
      width: 1000,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }
})

class LandingPage extends Component {
  /**
   * Default constructor
   */
  constructor(props) {
    super()
    this.state = {
      comments: [],
      hasMore: true,
      limit: 20
    }
  }

  /**
   * Life cyle API that is invoked immediately before a component is mounted
   */
  componentDidMount() {
    this.fetchMoreData()
  }

  fetchMoreData = () => {
  
    let currentLimit = this.state.comments.length + this.state.limit

    axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=${currentLimit}`).then(res => {
      const comments = res.data
      if (this.state.comments.length >= res.data.length) {
        this.setState({
          hasMore: false
        })
        return 
      } else {
        this.setState({ comments })
      }     
    })
  }

  /**
   * Render function to view this component
   */
  render() {
    const { classes } = this.props

    return (
      <div>
        <AddComment />
        <h1 className={classes.layout}>Comment List</h1>
        <InfiniteScroll
          dataLength={this.state.comments.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Endless Scroll</b>
            </p>
          }
        >
          <ul>
            {this.state.comments.map(comment => (
              <div className={classes.layout}>
                <li
                  key={comment.id}
                >
                  <p><b>User ID:</b> {comment.id}</p>
                  <p><b>Email:</b> {comment.email}</p>
                  <p><b>Name:</b> {comment.name}</p>
                  <p><b>Body:</b> {comment.body}</p>
                </li>
              </div>
            ))}
          </ul>
        </InfiniteScroll>
      </div>
    )
  }
}

export default  withStyles(styles)(LandingPage)
