import React from 'react'
// import { Link } from 'react-router'
import preload from '../public/data.json'
import ShowCard from './ShowCard'

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermXhange (event) {
    this.setState({searchTerm: event.target.value})
  },
  render () {
    console.log(preload.shows)
    return (
      <div>
        <header>
          <h1>{this.state.searchTerm}</h1>
          <input type='text' placeholder='Search' value={this.state.searchTerm} onChange={this.handleSearchTermXhange} />
        </header>
        <div>
          {preload.shows.filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase) >= 0).map((show, index) => {
            return (
              <ShowCard {...show} key={index} id={index} />
            )
          })
        }
        </div>
      </div>
      )
  }
})

export default Search
