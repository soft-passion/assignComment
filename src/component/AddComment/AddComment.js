import React, { Component } from 'react'
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
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
  },
  button: {
    marginLeft: theme.spacing(1)
  },
  stepButtons: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: 'flex',
    justifyContent: 'flex-end'
  }
})

class AddComment extends Component {
  /**
   * Default constructor
   */
  constructor(props) {
    super()
    this.state = {
      email: '',
      body: '',
      name: ''
    }
  }
  /**
   * Handle function for setting form values to state.
   */
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    if (this.state.email && this.state.name && this.state.body) {

      let data = {
        email: this.state.email,
        name: this.state.name,
        body: this.state.body
      }

      axios.post('http://test.steps.me/test/testAssignComment', data)
    }
  }

  /**
   * Render function to view this component
   */
  render() {
    const { classes } = this.props

    return (
      <div className={classes.layout}>
        <Grid container>
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <form onSubmit={this.handleSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel>Email</InputLabel>
                <Input name="email" value={this.state.email} onChange={this.handleChange} onBlur={this.handleBlur} autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel>Name</InputLabel>
                <Input name="name" value={this.state.name} onChange={this.handleChange} onBlur={this.handleBlur} />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel>Comment Body</InputLabel>
                <Input name="body" value={this.state.body} onChange={this.handleChange} onBlur={this.handleBlur} />
              </FormControl>
              <div className={classes.stepButtons}>
                <Button type="submit" variant="contained" color="primary" size="large" className={classes.button}>
                  Upload
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default  withStyles(styles)(AddComment)
