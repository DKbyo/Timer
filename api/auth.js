module.exports = function(app,pg){
	 /** 
	 * @api {post} /auth/login Login 
	 * @apiName Login
	 * @apiGroup Auth
	 *
	 * @apiParamExample {json} Request-Example:
	 *     {
	 *       "login": "danyel",
	 *		 "password": "danyel"
	 *     }
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
	 *       "response": "200",
	 *       "message": "OK"
	 *     }
	 *
	 * @apiErrorExample {json} Error-Response:
	 *     HTTP/1.1 404 Not Found
	 *     {
	 *       "error": "UserNotFound"
	 *     }
	 */
    app.post('/auth/login', function(req, res){
    	res.setHeader('Content-Type', 'application/json');
    	var data = req.body;
    	console.log(data);	
    	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	    client.query('SELECT * FROM tuser where login = $1 and password= $2',
	    	[data.login,data.password], function(err, result) {
		      done();
		     
		      if (err || result.rows.length == 0){ 
		      	console.error(err); 
		      	res.send(JSON.stringify({ response: 500,
		      		message:"Invalid user and password"
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
    app.post('/auth/signup', function(req, res){
    	res.setHeader('Content-Type', 'application/json');
    	var data = req.body;
    	console.log(data);
    	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	    client.query('INSERT INTO tuser (login,password,private,created,updated) values($1,$2,$3,$4,$5)',
	    	[data.login,data.password,data.private,new Date(),new Date()], function(err, result) {
		      done();
		      if (err){ 
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

     app.put('/auth', function(req, res){
    	res.setHeader('Content-Type', 'application/json');
    	var data = req.body;
    	console.log(data);
    	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	    client.query('UPDATE tuser set password = $3,private = $4, updated = $5 where login = $1 and password= $2',
	    	[data.login,data.password,data.newpassword,data.private,new Date()], function(err, result) {
		      done();
		      console.log(result);
		      if (err){ 
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

     app.delete('/auth', function(req, res){
    	res.setHeader('Content-Type', 'application/json');
    	var data = req.body;
    	console.log(data);
    	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	    client.query('DELETE tuser where login = $1 and password= $2',
	    	[data.login,data.password], function(err, result) {
		      done();
		      console.log(result);
		      if (err){ 
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

    //other routes..
}