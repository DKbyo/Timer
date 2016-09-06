module.exports = function(app){

    app.get('/auth/login', function(req, res){
    	res.setHeader('Content-Type', 'application/json');
    	res.send(JSON.stringify({ response: 200,message:"OK" }));
    });

    //other routes..
}