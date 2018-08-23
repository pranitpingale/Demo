var wdioConfig = require('./wdio.conf.js').config;

var debugConfig = Object.assign(wdioConfig, {

    debug: true,

    execArgv: ['--inspect'], 

    capabilities: [
         {
            maxInstances: 1,
            browserName: 'chrome',
            acceptSslCerts: true,
            acceptInsecureCerts : true,
        }
    ],

    exclude: [
      //none
    ],

    baseUrl: "https://wssqa.amwaternp.net/selfservice-web/login.do"

});

exports.config = debugConfig;