module.exports = function(app,pg){
/**
*	@api {get} /activity/:login List activities
*	@apiName List
* 	@apiGroup Activity
* 	@apiParam {Text} User ID
*
* 	@apiSuccessExample {json} Success-Response:
*	HTTP/1.1 200 OK
*	{
*		response:200,
*		activities:
*		[
*			{
*				"start": "01:00:00",
*				"length": 20,
*				"descripcion": "Activity 1",
*				"created":"",
*				"updated":""
*			}
*		]
*	}
*	
* 	@apiErrorExample {json} Success-Response:
*	HTTP/1.1 200 OK
*	{
*		response:500,
*		activities:[]
*	}	
*/
    app.get('/activity/:login', function(req, res){
       	res.setHeader('Content-Type', 'application/json');
    	console.log("List activities");
    	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	    client.query('SELECT idActivity, start,length,description,created,updated FROM tactivity where login = $1',
	    	[req.params['login']], function(err, result) {
		      done();
		     
		      if (err || result.rows.length == 0){ 
		      	console.error(err); 
		      	res.send(JSON.stringify({ response: 500,
		      		activities:[]
			    }));
		      }
		      else { 
		      	res.send(JSON.stringify({ response: 200,
			    		activities:result.rows
			   	}));
		      }
		    });
		});
    });
/**
*	@api {get} /activity Create activity
*	@apiName Create
* 	@apiGroup Activity
*
* 	@apiSuccessExample {json} Success-Response:
*	HTTP/1.1 200 OK
*	{
*		response:200,
*		message:"OK"
*	}
*	
* 	@apiErrorExample {json} Success-Response:
*	HTTP/1.1 200 OK
*	{
*		response:500,
*		message:"Error"
*	}	
*/
    app.post('/activity', function(req, res){
       	res.setHeader('Content-Type', 'application/json');
    	console.log("Add activities");
    	var data = req.body;
    	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	    client.query('INSERT INTO tactivity (login,start,length,description,updated,created) values ($1,$2,$3,$4,$5,$6)',
	    	[data.login,data.start,data.length,data.description,new Date(),new Date()], function(err, result) {
		      done();
		      if (err ){ 
		      	console.error(err); 
		      	res.send(JSON.stringify({ response: 500,
		      		message:err
			    }));
		      }
		      else { 
		      	res.send(JSON.stringify({ response: 200,
			    	message:"OK"
			   	}));
		      }
		    });
		});
    });
/**
*	@api {delete} /activity Delete activity
*	@apiName Delete
* 	@apiGroup Activity
*
* 	@apiSuccessExample {json} Success-Response:
*	HTTP/1.1 200 OK
*	{
*		response:200,
*		message:"OK"
*	}
*	
* 	@apiErrorExample {json} Success-Response:
*	HTTP/1.1 200 OK
*	{
*		response:500,
*		message:"Error"
*	}	
*/
 app.delete('/activity/:idActivity', function(req, res){
       	res.setHeader('Content-Type', 'application/json');
    	console.log("Delete activities");
    	var data = req.body;
    	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	    client.query('DELETE FROM tactivity where idActivity = $1',
	    	[req.params["idActivity"]], function(err, result) {
		      done();
		      if (err || result.rowCount ==0 ){ 
		      	console.error(err); 
		      	res.send(JSON.stringify({ response: 500,
		      		message:err
			    }));
		      }
		      else { 
		      	res.send(JSON.stringify({ response: 200,
			    	message:"OK"
			   	}));
		      }
		    });
		});
 });
/**
*	@api {put} /activity Update activity
*	@apiName Update
* 	@apiGroup Activity
*
* 	@apiSuccessExample {json} Success-Response:
*	HTTP/1.1 200 OK
*	{
*		response:200,
*		message:"OK"
*	}
*	
* 	@apiErrorExample {json} Success-Response:
*	HTTP/1.1 200 OK
*	{
*		response:500,
*		message:"Error"
*	}	
*/
 app.put('/activity', function(req, res){
       	res.setHeader('Content-Type', 'application/json');
    	console.log("Update activity");
    	var data = req.body;
    	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	    client.query('UPDATE tactivity set start = $2, length=$3, description=$4,updated=$5,login=$6 where idActivity = $1',
	    	[data.idActivity,data.start,data.length,data.description,new Date(),data.login], function(err, result) {
		      done();
		      if (err || result.rowCount ==0 ){ 
		      	console.error(err); 
		      	res.send(JSON.stringify({ response: 500,
		      		message:err
			    }));
		      }
		      else { 
		      	res.send(JSON.stringify({ response: 200,
			    	message:"OK"
			   	}));
		      }
		    });
		});
    });

}