const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());


const rides = [
{rideId: 1, name: 'ola', ridesTaken: 0, ridesOffered: 0, gender: 'male', location: 'Mushin', destination:'lekki' },
{rideId: 2, name: 'ope', ridesTaken: 0, ridesOffered: 0, gender: 'male', location: 'Mushin', destination:'lekki' }
];

app.get('/', (req, res)=>{
	res.send('hello Olababa');
});

//fetch all ride offers
app.get('/api/v1/rides', (req, res) => {
	res.sendFile('rides.html', options, (err)=> {
		if (err) {
		  next(err);
		} else {
		  console.log('Sent:', fileName);
		}
	  });
});

//fetch a single ride offer
app.get('/api/v1/rides/:rideId', (req, res) => {
  ride = rides.find(c => c.rideId === parseInt(req.params.rideId));
  if(!ride) res.status(404).send('no ride');
  res.send(ride);
	
});

//create ride offer
app.post('/api/v1/rides', (req, res) => {

const schema ={
    name: Joi.string().min(3).required()
}

const result = Joi.validate(req.body, schema);

    if(result.error){
        //400 Bad request
        res.status(400).send(result.error.details[0].message);
        return;
    }
	const ride = {
		rideId: rides.length + 1,
		name: req.body.name
	};
	rides.push(ride);
	res.send(ride);
});

//request to join a ride
app.post('/api/v1/rides/:rideId/request', (req, res) => {

	const schema ={
		name: Joi.string().min(3).required()
	}
	
	const result = Joi.validate(req.body, schema);
	
		if(result.error){
			//400 Bad request
			res.status(400).send(result.error.details[0].message);
			return;
		}
		const ride = {
			rideId: rides.length + 1,
			name: req.body.name
		};
		rides.push(ride);
		res.send(ride);
	});
	


app.put('/api/v1/rides/:rideId', (req, res)=>{

});

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}...`));