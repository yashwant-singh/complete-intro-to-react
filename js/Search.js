import React from 'react'
// import { Link } from 'react-router'
import ShowCard from './ShowCard'
import Link from './Link'

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
    
    return (
      <div className='search'>
        // <header>
        //   <h1>{this.state.searchTerm}</h1>
        //   <input type='text' placeholder='Search' value={this.state.searchTerm} onChange={this.handleSearchTermXhange} />
        // </header>
        <h2>
          <Link to='/search'>
            Back
          </Link>
        </h2>
        <div>
          {this.props.shows.filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
          .map((show) => {
            return (
              <ShowCard {...show} />
            )
          })
        }
        </div>
      </div>
      )
  }
})

export default Search
