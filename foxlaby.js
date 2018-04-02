#!/usr/bin/env node

var path = require("path"),
    fs = require("fs"),
    colors = require('colors'),
    ncp = require('ncp').ncp;

var allProcess = process.argv;
var pathApp = __dirname + '\\app\\';
var destination = path.resolve("./");

var ngjs = function(destination_name = false)
{
    if ( destination_name ) {
        destination = destination + '\\' + destination_name;
    }
    ncp(pathApp + 'ngjs\\', destination, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log('Exiting files'.green); 
    });
}


var UiApp = function(destination_name = false)
{
    if ( destination_name ) {
        destination = destination + '\\' + destination_name;
    }
    ncp(pathApp + 'UiApp\\', destination, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log('Exiting files'.green); 
    });
}

if ( allProcess[2] == 'new' ) {
    if ( allProcess[3] == 'ngjs' ) {
        ngjs(allProcess[4]);
    }
    if ( allProcess[3] == 'ui' ) {
        UiApp(allProcess[4]);
    } else {
        console.log('We do not have such a thing in "new" !!!'.red); 
    }
} else {
    console.log('You can use only "new" !!!'.red); 
}