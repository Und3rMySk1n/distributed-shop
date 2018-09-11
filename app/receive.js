var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {
    conn.createChannel(function(err, ch) {
        var query = 'online-shop-bus';

        ch.assertQueue(query, {durable: false});
        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", query);
        ch.consume(query, function(msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }, {noAck: true});
    });
});