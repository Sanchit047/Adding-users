var unirest = require('unirest');

var API_KEY = "iypgLANLlophnMZaV0";
var FD_ENDPOINT = "prokuresanchit";

var PATH = "/api/v2/tickets";
var URL =  "https://" + FD_ENDPOINT + ".freshdesk.com"+ PATH;

var fields = {
  'email': 'dummy2@gmail.com',
  'subject': 'Dummy ticket1',
  'description': 'testing values',
  'status': 4,
  'priority': 4,
  'name': 'Shetty'
}

var Request = unirest.post(URL);

Request.auth({
  user: API_KEY,
  pass: "X",
  sendImmediately: true
})
.type('json')
.send(fields)
.end(function(response){
  console.log(response.body)
  console.log("Response Status : " + response.status)
  if(response.status == 201){
    console.log("Location Header : "+ response.headers['location'])
  }
  else{
    	console.log("X-Request-Id :" + response.headers['x-request-id']);
  }
});