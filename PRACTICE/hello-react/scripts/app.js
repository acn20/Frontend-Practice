
class App extends React.Component {
	constructor(props) {
		super(props);//props vine de la properties
	}

	render() {
		return (
			<div>Hello react</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("myApp")
)

// class Animal {
// 	constuctor(name) {
// 		this.name = name;
// 	}
	
// }

// class Dog extends Animal {
// 	constructor(name) {
// 		super(name); // calls constructor of parent class and pases the name argument
// 	}
// }