import React from 'react'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators'

const { string, func, object } = React.PropTypes
const Landing = React.createClass({

  contextTypes: {
    router: object
  },
  propTypes: {
    searchTerm: string,
    dispatchSetSearchTerm: func
  },

  handleSearchTermChange (event) {
    this.props.dispatchSetSearchTerm(event.target.value)
  },

  // handleSearchTermChange (event) {
  //   this.props.dispatch(setSearchTerm(event.target.value))
  // },

  handleSearchSubmit (event) {
    event.preventDefault()
    this.context.router.transitionTo('/search')
  },

  render () {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
        </form>
        <a>or Browse All</a>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetSearchTerm (searchTerm) {
      dispatch(setSearchTerm(searchTerm))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
