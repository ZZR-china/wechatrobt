const request_http = require('request');

const requestGet = (url) =>{
  return new Promise ((resolve, reject)=>{
    request_http.get(url, (err,httpResponse,body)=>{
      resolve(body);
    })
  })
}

module.exports = exports
exports.requestGet = requestGet;