import React from 'react'
// import { Link } from 'react-router'
import preload from '../public/data.json'
import ShowCard from './ShowCard'

const Search = React.createClass({
  render () {
    console.log(preload.shows)
    return (
      <div>
        {preload.shows.map((show) => {
          return (
            <ShowCard show={show} key={show.imdbID} />
           )
        })}
      </div>
      )
  }
})

export default Search
