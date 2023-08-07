const express = require('express');
const EventEmitter = require('events');
//const { events } = require('./product');
const app = express();

const event = new EventEmitter();
let   count = 0;
event.on('countApi',() =>{
    count++;
    console.log(count)

})


app.get('/',(req,resp)=>{
    resp.send('DONE')
    event.emit('countApi')


});

app.listen(4000);

