import React, { Component } from 'react';
 
class About extends Component{
	
	constructor(props) {
		super(props);
this.state={};
this.submitRecipe= this.submitRecipe.bind(this);
	}

    submitRecipe() {
   alert("button click");
   this.props.history.push('/');
    }

	render () {
		return (
         	<div>
				<h1>HI AM ABOUT PAGE</h1>
				<button onClick={this.submitRecipe}>M going crazy now</button>
			</div>
		);
	}
} 

export default About;