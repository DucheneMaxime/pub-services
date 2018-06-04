#!/usr/bin/env node
var program = require('commander');

program
    .version('1.0.0')
    .option('-l, --list', 'Get the pubs list')
    .option('-o, --opened', 'Get the opened pubs list')
    .parse(process.argv);
if (program.list) {
    require('../src/main').getListPubs();
}
if(program.opened) {
    require('../src/main').getListOpenPubs();
}