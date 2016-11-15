
import React, { Component } from 'react';
import {connect} from 'react-redux';
import actions from './actions'

class Form extends Component{
	newGame(){
			 this.props.dispatch(
            actions.generateRandomNumber()
        );
	}

	getFeedBack(){
		let userInput = this.refs.userGuess.value;
		this.props.dispatch(
            actions.guessNumber(userInput)
        );
        if(this.props.random_number==userInput){
        	this.props.dispatch(
        		actions.
        	);
        }
	}
	render(){
		return(
			<div>
				<input type="text" ref="userGuess"/>
				<button type="button" onClick={this.getFeedBack.bind(this)}>Guess</button>
				<button type="button" onClick={this.newGame.bind(this)}>New Game</button>

        <p>Feedback: {this.props.feedBack}</p>
        <p>Random Number: {this.props.randomNumber}</p>
        <p>Guess Counter: {this.props.counter}</p>
      </div>
		);
	}

}

const mapStateToProps = (state,props)=>{
	return{
		randomNumber: state.random_number,
		feedBack: state.feedback,
		counter:state.counter
	};
	
}

const Container = connect(mapStateToProps)(Form);

export default Container;
