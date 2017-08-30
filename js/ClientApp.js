/*global ReactDome*/


var div = React.DOM.div		
var h1 = React.DOM.h1
var MyTitle = React.createClass({
	render() {
			return(
				div(null ,
						h1(null, 'Checkout this component')
					)
				)
			}

})

var MyFirstComponent = React.createClass({
	render: function() {
		return (
			div(null,
				React.createElement(MyTitle)
			))
	}
})

ReactDom.render(React.createElement(MyFirstComponent),document.getElementById('app'));