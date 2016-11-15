import React, { Component } from 'react';
import Form from './Form';


class Game extends Component{
	render(){
		return(
			<div>
				<h1>Hot N Cold Game</h1>
				<div>
					<h2>Make your Guess!</h2>
					<Form/>
				</div>
			</div>
		);
	}
}


export default Game;
