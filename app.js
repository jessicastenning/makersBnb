var express = require('express');
var app = express();
var spacesDB = require('./server/models').spaces;
var collection = [];

spacesDB.findAll( {}
).then(function(spaces){
  spaces.forEach(function(space){
  collection.push({id: space.get('id'), title: space.get('title'), description: space.get('description'), nightPrice: space.get('nightPrice')})
  })
})



// spacesDB.create({ title: 'ellie space', description: 'very nice', nightPrice: '4'})

app.get('/', function(req, res){
  res.send('Hello, MakersBnB!');
});

app.listen(3000, function(){
  console.log('MakersBnB up and running on port 3000')
});
