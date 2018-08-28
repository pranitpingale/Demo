var wdioConfig = require('./wdio.conf.js').config;

var debugConfig = Object.assign(wdioConfig, {

    debug: true,

    execArgv: ['--inspect-brk'], 

    capabilities: [
         {
            maxInstances: 1,
            browserName: 'firefox',
            acceptSslCerts: true,
            acceptInsecureCerts : true,
        }
    ],

    exclude: [
      //none
    ],

    //baseUrl: "https://wssqa.amwaternp.net/selfservice-web/login.do"
    baseUrl: "https://hsynlwsss101.amwaternp.net:8443/selfservice-web/login.do"
});

exports.config = debugConfig;