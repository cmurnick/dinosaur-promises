"use strict";

var dom = require('./dom');

var dinosaurs = [];

var initializer = function(){
	dom({name: "T-rex"});
};


var getDinosaurs = function() {
	return dinosaurs;
};

module.exports = {initializer:initializer, getDinosaurs:getDinosaurs};