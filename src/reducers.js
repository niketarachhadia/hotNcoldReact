var actions = require('./actions');

var initialhotNcoldState = {};
//var randomNumber=0;

var hotNcoldReducer = function(state,action){
	state = state|| initialhotNcoldState;
	 if (action.type === actions.GENERATE_RANDOM_NUMBER) {
	 	const randomNumber=Math.floor((Math.random() * 100) + 1);
        return {
            random_number: randomNumber,
            counter:0
        }
    }else if (action.type === actions.GUESS_NUMBER) {

    	var difference = Math.abs(state.random_number-action.userNumber);
    	
    	var feedback='';
      var updatedCounter = state.counter+1;
     
    	if(difference>=50){
  			feedback="IceCold"
  		}
  		if(difference>=30 && difference<50){
  			feedback="Cold"
  		}
  		if(difference>=20 && difference<30){
  			feedback="Warm"
  		}
  		if(difference>=10 && difference<20){
  			feedback="Hot"
   		}
   		if(difference>=1 && difference<10){
  			feedback="VeryHot";
  		}
      if(difference==0){
        feedback = "Game over";
      }
    	return {
            random_number: state.random_number,
            feedback:feedback,
            counter:updatedCounter
        }
     }else if(action.type === actions.FETCH_FEWEST_GUESSES){
        var fewestCounter=action.fewestCounter;
        
        return{
          random_number: state.random_number,
            feedback:feedback,
            counter:state.counter,
            fewestCounter:fewestCounter
        }
     }else if(action.type === actions.SAVE_FEWEST_GUESSES){
        var counter=state.counter;
        //AJAX and send counter

        return state
     }

     return state;
}

exports.hotNcoldReducer = hotNcoldReducer;