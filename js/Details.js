import React from 'react'
import Header from './Header'
import axios from 'axios'

const {shape, string} = React.PropTypes
const Details = React.createClass({
   propTypes: {
    show: shape({
      title: string,
      year: string,
      poster: string,
      trailer: string,
      imdbID: string
    })
  },

  getInitialState () {
    return { 
      omdbData: {}
    }
  },
  componentDidMount () {
    console.log('component did mount');
    // axios.get(`https://api.themoviedb.org/3/find/${this.props.show.imdbID}?api_key=db971c94a628dcda7871231a08fdede6&language=en-US&external_source=imdb_id`)
    axios.get(`https://api.themoviedb.org/3/find/${this.props.show.imdbID}?api_key=db971c94a628dcda7871231a08fdede6&language=en-US&external_source=imdb_id`)
    .then((response) => {
      this.setState({ omdbData: response.data.tv_results[0]})
    }).catch(( error ) => {
      console.error('axios error ', error)
    })
  },
  render () {
     const { title, description, year, poster, trailer } = this.props.show
    let rating
    if (this.state.omdbData.vote_average) {
      rating = <h3>{this.state.omdbData.vote_average}</h3>
    } else {
      rating = <img src='/public/img/loading.png' alt='loading indicator' />
    }

    return (
      <div className='details'>
         <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {rating}
          <img src={`/public/img/posters/${poster}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' 
          allowFullScreen />
        </div>
      </div>
    )
  }
})

// Stateless function component

// const Details= (props) =>{
//     return <h1>{props.params.id}</h1>
// }

export default Details
