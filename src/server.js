var express = require('express');
var app = express();

app.use(express.static('../public'));
app.use(express.static('../src'));

app.listen(3001);

var fewestCount=0;
app.post('/fewest-guesses/:guessCount',function(req, res){
	if(fewestCount==0){
		fewestCount=req.params.guessCount;
	} else{
		if(fewestCount>req.params.guessCount){
			fewestCount=req.params.guessCount;
		}
	}
	res.status(200);
});

app.get('/fewest-guesses',function(req, res){
		res.status(200).json(fewestCount);
});