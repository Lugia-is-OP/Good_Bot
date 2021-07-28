module.exports = {
    name: 'ping',
    description: "Test Command!",
    execute(client, message, args, Discord) {
        message.channel.send("pong!")
    }
}
 