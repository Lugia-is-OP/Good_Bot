module.exports = (Discord, client, message) => {
    const prefix = require('../../config.json')
    if(!message.content.startsWith(prefix) || message.author.bot ) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);

    if(!command) return;

    try {
        command.execute(client, message, cmd, args, Discord);
    } catch (err) {
        console.log(err);
    }
}