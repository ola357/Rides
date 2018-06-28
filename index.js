import routes from './routes/routes';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());

/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
*/

app.get('/', (req, res)=>{
	res.send('Hi! Welcome to Ride my Way');
});

// Ride Routes
app.use(routes.router);

// for invalid routes
app.get('/*', (req, res) => {
	res.status(404).send('Page NOT found');
});

//fetch all ride offers
/* app.get('/api/v1/rides', (req, res) => {
	res.send(rides, (err)=> {
		if (err) {
		  next(err);
		} else {
		  console.log('Sent: the file succesfully');
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

}); */
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}...`));
module.exports= index;
