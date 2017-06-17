var unirest = require('unirest');

var API_KEY = YOUR_API_KEY;//removed my api key, replace with prokure's api
var FD_ENDPOINT = YOUR_DOMAIN;

var PATH = "/api/v2/contacts";
var URL =  "https://" + FD_ENDPOINT + ".freshdesk.com"+ PATH;

var fields = {
  name : 'Pulkit',  
  email: 'pulkitbatra@gmail.com',
  address: 'Dwarka',
  description: 'your description',
  phone: '25085475',
  mobile: '9910881095' 
};

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