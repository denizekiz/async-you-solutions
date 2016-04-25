var async = require('async');
var url   = [process.argv[2],process.argv[3]];
var http  = require('http');

async.series(
	{
		requestOne:function(done)
		{
			http.get(url[0],function(res)
				{
					res.on('data',function(chunk)
						{
							done(null,chunk.toString())
						});
				});
			
		},
		requestTwo:function(done)
		{
			http.get(url[1],function(res)
				{
					res.on('data',function(chunk)
					{
						done(null,chunk.toString());
					});
				});
		}
	},function(err,results)
	{
		console.log(results);
	});