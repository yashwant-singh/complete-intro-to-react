import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
       <div
                <MyTitle title= 'Props are great' color= 'rebeccapurple'/>
                <MyTitle title= 'Use props ever where' color= 'mediumaquamarine'/>,
                <MyTitle title= 'Props are the best' colorr= 'peru'/>
        </div>

        )
  }

})
ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
