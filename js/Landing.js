import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { setSearcTerm } from './actionCreators'
const { string, func, object } = React.PropTypes

const Landing = React.createClass({
  contextTypes: {
    router: object
  },
  propTypes: {
    searchTerm: string,
    dispatch: func,
    dispatchSetSearcTerm: func
  },

  handleSearchTermChange (event) {
    this.props.dispatchSetSearcTerm(event.target.value)
  },
  handleSubmit (event) {
    event.preventDefult()
    this.contextTypes.router.transitionTo('/search')
  },

  render () {
    console.log('hi')
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
        </form>
        <Link to='/search'>or Browse All</Link>
      </div>
    )
  }
})

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetSearcTerm (searchTerm) {
      dispatch(setSearcTerm(searchTerm))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)

