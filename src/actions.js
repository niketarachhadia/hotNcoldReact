var fetch = require('isomorphic-fetch');

var fetchGuesses = function(repository) {
    return function(dispatch) {
        var url = 'https://api.github.com/repos/' + repository;
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var description = data.description;
            return dispatch(
                fetchDescriptionSuccess(repository, description)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchDescriptionError(repository, error)
            );
        });
    }
};

var GENERATE_RANDOM_NUMBER = 'GENERATE_RANDOM_NUMBER';
var generateRandomNumber = function() {
    return {
        type: GENERATE_RANDOM_NUMBER
        
    };
};

var GUESS_NUMBER = 'GUESS_NUMBER';
var guessNumber = function(userNumber) {
    return {
        type: GUESS_NUMBER,
        userNumber: userNumber
    }
};
var FETCH_FEWEST_GUESSES = 'FETCH_FEWEST_GUESSES';
var fetchFewestGuesses = function(fewestCount) {
    return {
        type: FETCH_FEWEST_GUESSES,
        fewestCount:fewestCount        
    };
};

var SAVE_FEWEST_GUESSES= 'SAVE_FEWEST_GUESSES';
var saveFewestGuesses = function() {
    return {
        type: SAVE_FEWEST_GUESSES
    };
};

exports.FETCH_FEWEST_GUESSES = FETCH_FEWEST_GUESSES;
exports.fetchFewestGuesses = fetchFewestGuesses;
exports.SAVE_FEWEST_GUESSES = SAVE_FEWEST_GUESSES;
exports.saveFewestGuesses = saveFewestGuesses;


exports.GENERATE_RANDOM_NUMBER = GENERATE_RANDOM_NUMBER;
exports.generateRandomNumber = generateRandomNumber;
exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;