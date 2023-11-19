const http = require ('http');
const readline = require('readline');
const querystring = require('querystring');

const r1 = readline.createInterface({input: process.stdin})

r1.on('line', line => {
  http.get(
    `http://localhost:1337/chat?${querystring.stringify({message: line})}`
  )
})

http.get('http://localhost:1337/sse', res => {
  res.on('data', data => console.log(data.toString()))
})

