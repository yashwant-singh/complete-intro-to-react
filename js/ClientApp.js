import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Match } from 'react-router'
import Landing from './Landing'
import Search from './Search'
import EmpInfo from './EmpInfo'
import Details from './Details'
import preload from '../public/data.json'
import '../public/normalize.css'
import '../public/style.css'
const { arrayOf, shape, string } = React.PropTypes

const App = React.createClass({
  proptTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string
    }))
  }, 
  render () {
    return (
      <HashRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={(props)=>{return <Search shows={preload.shows} {...props} />}
        } 
        />
          <Match pattern='/empinfo' component={EmpInfo} />
          <Match pattern='/details/:id' component={ (props) => {
            const show = preload.shows.filter((show) => 
              props.params.id === show.imdbID)
                return <Details show={show} {...props} />
          }}/>
        </div>
      </HashRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
