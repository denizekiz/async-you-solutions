var fs    = require("fs");
var fp    = process.argv[2];
var http  = require('http');
var async = require('async');
async.waterfall([function(cb)
{
	fs.readFile(fp,function(err,data)
	{
		if(err) return console.log(error);
		cb(null,data.toString());
	});
},function(data)
{
	http.get(data,function(res)
		{
			var body = "";
			res.on('data',function(chunk)
				{
					body +=chunk.toString();
				});
			res.on('end',function()
				{
					console.log(body);
				});
		});
}]);
