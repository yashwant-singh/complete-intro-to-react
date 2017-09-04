import React from 'react'
const {string} = React.PropTypes
const ShowCard = React.createClass({

  propTypes: {
    poster: string,
    title: string,
    year: string,
    description: string
  },
  render () {
    return (
      <div className='show-card'>
        <img src={`/public/img/posters/${this.props.show.poster}`} />
        <div>
          <h3>{this.props.show.title}</h3>
          <h4> ({this.props.show.year})</h4>
          <p>{this.props.show.description}</p>
        </div>
      </div>
      )
  }
})

export default ShowCard
