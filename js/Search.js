import React from 'react'
import { Link } from 'react-router'

const Search = React.createClass({
  render () {
    return (
      <Link to='/search' className='browse-all'> or Browse All </Link>
    )
  }
})

export default Search
