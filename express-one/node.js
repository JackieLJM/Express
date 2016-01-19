/**
 * Created by JackieLJM on 11/13/15.
 */
var events = require("events");
var eventEmitter = new events.EventEmitter();

function mainLoop(){
    console.log('Starting application');
    eventEmitter.emit('ApplicationStart');
}

function onApplicationStart(){
    console.log('Handling Application Start Event')
}

eventEmitter.on('ApplicationStart',onApplicationStart());