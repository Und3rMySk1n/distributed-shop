var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {
    conn.createChannel(function(err, ch) {
        var query = 'online-shop-bus';
        var msg = 'Hello World!';

        ch.assertQueue(query, {durable: false});
        ch.sendToQueue(query, Buffer.from(msg));
        console.log(" [x] Sent %s", msg);
    });
    setTimeout(function() { conn.close(); process.exit(0) }, 500);
});