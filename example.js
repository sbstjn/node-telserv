var telnet = require('./libs/telserv.js').init();

telnet.registerRooms(['general', 'database']);
telnet.listen(8899);

var pushDatabase = function() {
  telnet.push('database', 'SELECT * FROM `lorem_ipsum` WHERE `dolor` > `sit`');
};

var timeoutId = setTimeout(pushDatabase, 8000);
var timeoutId = setTimeout(pushDatabase, 8047);
var timeoutId = setTimeout(pushDatabase, 8100);
var timeoutId = setTimeout(pushDatabase, 8452);
var timeoutId = setTimeout(pushDatabase, 8652);
var timeoutId = setTimeout(pushDatabase, 8852);
var timeoutId = setTimeout(pushDatabase, 8952);

console.log('\nUse `telnet hostname 8899` to connect\nJoin within the next 8 seconds to see some example output. Choose database room…');