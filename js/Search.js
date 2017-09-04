import React from 'react'
// import { Link } from 'react-router'
import preload from '../public/data.json'

const Search = React.createClass({
  render () {
     console.log(preload.shows[0]);
    return (
      <div className='search'>
        <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>
      </div>
    )
  }
})

export default Search
