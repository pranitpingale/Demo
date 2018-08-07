var json = require('json-file');
var file = json.read('./pageObjects/dashboard.page.json');

var jsonFilter = require('jsonpath');
var testData = json.read('./utilities/testData.json');