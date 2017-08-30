
var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
	render: function() {
		return (
				div(null,
						h1(null, 'check out this component')
					)
			)
	}
})

var MyTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
	render: function() {
		return(
			
			div(null,
					MyTitleFact(MyTitle),
					MyTitleFact(MyTitle),
					MyTitleFact(MyTitle)
				)
			
			)
			
	}

})
ReactDOM.render(React.createElement(MyFirstComponent),document.getElementById('app'))