module.exports = function(app,pg){
/**
*	@api {get} /activity/:login Request
*	@apiName List activities
* 	@apiGroup Activity
* 	@apiParam {Text} User ID
* 	@apiSuccessExample {json} Success-Response:
*	HTTP/1.1 200 OK
*	[
*		{
*			"start": "01:00:00",
*			"length": 20,
*			"descripcion": "Activity 1",
*			"created":"",
*			"updated":""
*		}
*	]	
*/
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

}