var unirest = require('unirest');

var API_KEY = "iypgLANLlophnMZaV0";
var FD_ENDPOINT = "prokuresanchit";
var id = USER_ID;// id of user to update 
var PATH = "/api/v2/contacts";
var URL =  "https://" + FD_ENDPOINT + ".freshdesk.com"+ PATH + "/" + id;//change id to update

var fields =  
  {
    "name": "Shubham",
    "email": "shubham@gmail.com",
    "address": "Sarpriya vihar",
    "description": "Prokure",
    "phone": "12345678",
    "mobile": "9912341095"
  };


var Request = unirest.put(URL);

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