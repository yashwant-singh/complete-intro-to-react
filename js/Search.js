import React from 'react'
// import { Link } from 'react-router'
import ShowCard from './ShowCard'
import Header from './Header'

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
        <Header
          showSearch
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.handleSearchTermXhange}
        />

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
