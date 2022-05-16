const express = require('express');
const app = express();
var faunadb = require("faunadb"),
  q = faunadb.query
    var client = new faunadb.Client({
    secret: 'fnAEks-yzJAAyEQ_V6ZaV6gU8uj8T_2BtM0i4Sr6',
    domain: 'db.eu.fauna.com',
    scheme: 'https',
  })

 var client2 = new faunadb.Client({
    secret: 'fnAEkuGkYVAAx1CoAVpctxGHOL7sjPzo4DQL263q',
    domain: 'db.eu.fauna.com',
    scheme: 'https',
  })

 

 app.get('/login', function(req, res) {

    res.sendFile('login.html', {root: __dirname })
        
});

app.get('/home', function(req, res) {

  res.sendFile('home.html', {root: __dirname })
      
});


 
app.listen(process.env.PORT || 3000, () => {
  console.log("Ready")
})
