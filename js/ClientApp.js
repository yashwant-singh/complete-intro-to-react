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

var MyFirstComponent = (
		div(null,
			React.createElement(MyTitle,null),
			React.createElement(MyTitle,null),
			React.createElement(MyTitle,null)
		)

	)

ReactDom.render(MyFirstComponent,document.getElementById(''));