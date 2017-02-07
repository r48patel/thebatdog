var express = require('express');
var app = express();
var fs = require('fs');

var gallery_info=[];
var projects_info = fs.readFileSync(__dirname + '/views/templates/pics.txt').toString().split('\n');

for(var i=0; i<projects_info.length;i+=3){
	gallery_info.push({
		url: projects_info[i],
		title: projects_info[i+1],
		desc: projects_info[i+2]
	});
}

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	var title="The Bat Dog"
	var sub_title="a.k.a Bruce"
  response.render('pages/index', {
  	title: title,
  	sub_title:sub_title,
  	gallery_info: gallery_info
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


