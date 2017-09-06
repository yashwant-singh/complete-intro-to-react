import React from 'react'
import {Link} from 'react-router'
const Header = React.createClass({
  render () {

    let utilSpace

    if (this.props.showSearch) {
        utilSpace = (<input type='text' placeholder='Search' value={this.props.searchTerm} onChange={this.props.handleSearchTermChange} />)
    } else {
      utilSpace=(
        
        <h2>
          <Link to='/search'>
            Back
          </Link>
        </h2>

      )
  }
    return (
        <header>
          <h1>
            <Link to='/'>
              Service Video
            </Link>
          </h1>
          {utilSpace}
        </header>
      )
  }
})

const { func, bool, string } = React.PropTypes

Header.propType = {
  handleSearchTermChange: func,
  showSearch: bool,
  searchTerm: string
}
export default Header
