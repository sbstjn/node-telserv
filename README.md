[node-telserv](http://github.com/semu/node-telserv) is a simple telnet server using Node.js. I needed to provide a simple monitoring interface, telnet seemed like a legit interface for developers and so [node-telserv](http://github.com/semu/node-telserv) was born. Supporting multiple rooms it's easy to separate log messages by application or category.

See `example.js` for a basic server implementation with two rooms and some pre-defined timed events. Available rooms have to defined with `registerRooms` in order to send events to all followers with provided `push` function:

    var telnet = require('./libs/telserv.js').init();
    telnet.registerRooms(['general', 'database']);
    telnet.push('database', 'SELECT * FROM `lorem_ipsum` WHERE `dolor` > `sit`');

![telserv telnet](http://semu.mp/screenshots/telserv-client-20120205-193149.png)