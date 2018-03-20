console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')

// var user = os.userInfo();
// fs.appendFile('greetings.txt', `Hello ${user.username}. You are ${notes.age}.`, (err) => { if (err) throw err; });
var res = notes.add(5,42);
console.log(res);