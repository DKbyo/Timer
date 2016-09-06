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
	 *       "message": "OK",
	 *		 "private": true
	 *     }
	 *
	 * @apiErrorExample {json} Error-Response:
	 *		HTTP/1.1 200 OK
	 *		{
	 *			"response": "200",
	 *			"message": "Invalid user and password"
	 *		}
	 */
    app.post('/auth/login', function(req, res){
    	res.setHeader('Content-Type', 'application/json');
    	var data = req.body;
    	console.log("Login");
    	console.log(data);	
    	//TODO: Hash MD5 password?
    	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	    client.query('SELECT private FROM tuser where login = $1 and password= $2',
	    	[data.login,data.password], function(err, result) {
		      done();
		     
		      if (err || result.rows.length == 0){ 
		      	console.error(err); 
		      	res.send(JSON.stringify({ response: 500,
		      		message:"Invalid user and password"
			    }));
		      }
		      else { 
		      	  /*req.session.regenerate(function(){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
			        req.session.user = data.login;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
			        res.redirect('back');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
			      }); */         
		      	res.send(JSON.stringify({ response: 200,
			    		message:"OK",
			    		private:result.rows[0].private
			   	}));
		      }
		    });
		});
    });

     /** 
	 * @api {post} /auth/signup Create an account 
	 * @apiName Create
	 * @apiGroup Auth
	 *
	 * @apiParamExample {json} Request-Example:
	 *     {
	 *       "login": "danyel",
	 *		 "password": "danyel",
	 *		 "private":true
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
	 *	HTTP/1.1 200 OK
	 *	{
	 *		 "response": "500",
	 *		 "message": "Error"
	 *	}
	 */
    app.post('/auth/signup', function(req, res){
    	res.setHeader('Content-Type', 'application/json');
    	var data = req.body;
    	console.log("Signup");
    	console.log(data);
    	//Hash MD5 password?
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
     /** 
	 * @api {put} /auth Update an account
	 * @apiName Update
	 * @apiGroup Auth
	 *
	 * @apiParamExample {json} Request-Example:
	 *     {
	 *       "login": "danyel",
	 *		 "password": "danyel",
	 *		 "newpassword":"danyel2",
	 *		 "private":true
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
	 *	HTTP/1.1 200 OK
	 *	{
	 *		 "response": "500",
	 *		 "message": "Error"
	 *	}
	 */
     app.put('/auth', function(req, res){
    	res.setHeader('Content-Type', 'application/json');
    	var data = req.body;
    	console.log("Update auth");
    	console.log(data);
    	//Hash MD5 password?
    	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	    client.query('UPDATE tuser set password = $3,private = $4, updated = $5 where login = $1 and password= $2',
	    	[data.login,data.password,data.newpassword,data.private,new Date()], function(err, result) {
		      done();
		      if (err || result.rowCount ==0){ 
		      	console.error(err); 
		      	res.send(JSON.stringify({ response: 500,
		      		message:"User not found"
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
	 * @api {delete} /auth Delete an account
	 * @apiName Delete
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
	 *	HTTP/1.1 200 OK
	 *	{
	 *		"response": "500",
	 *		"message": "Error"
	 *	}
	 */
     app.delete('/auth', function(req, res){
    	res.setHeader('Content-Type', 'application/json');
    	var data = req.body;
    	console.log("Delete auth");
    	console.log(data);
    	//Hash MD5 Password?
    	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	    client.query('DELETE FROM tuser where login = $1 and password= $2',
	    	[data.login,data.password], function(err, result) {
		      done();
		      if (err || result.rowCount ==0){ 
		      	console.error(err); 
		      	res.send(JSON.stringify({ response: 500,
		      		message:"User not found"
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