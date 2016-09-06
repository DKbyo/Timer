module.exports = function(app,pg){

    app.get('/auth/login', function(req, res){
    	res.setHeader('Content-Type', 'application/json');
    	var data = req.body;
    	console.log(data);
    	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	    client.query('SELECT * FROM tuser where login = $1 and password= $2',
	    	[data.login,data.password], function(err, result) {
		      done();
		      if (err){ 
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
    app.post('/auth', function(req, res){
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
    //other routes..
}