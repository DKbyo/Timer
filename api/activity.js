module.exports = function(app){

    app.get('/activity', function(req, res){
       	res.setHeader('Content-Type', 'application/json');
    	res.send(JSON.stringify({ response: 200,
    		activities:[
    			{
    				id:1
    			}
    		]
    	 }));
    });

    //other routes..
}