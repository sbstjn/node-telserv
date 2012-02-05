var telnet = require('./libs/telserv.js').init();

telnet.registerRooms(['general', 'error', 'database']);
telnet.listen(8899);