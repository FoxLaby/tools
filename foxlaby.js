#!/usr/bin/env node

var path = require("path"),
    fs = require("fs"),
    colors = require('colors'),
    ncp = require('ncp').ncp;

var allProcess = process.argv;
var pathApp = __dirname + '\\app\\ngjs\\';
var destination = path.resolve("./");

var ngjs = function(destination_name = false)
{
    if ( destination_name ) {
        destination = destination + '\\' + destination_name;
    }
    ncp(pathApp, destination, function (err) {
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
}