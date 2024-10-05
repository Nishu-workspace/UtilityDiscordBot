const { Events } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(cleint) {
        console.log(`Ready! Loggged in as ${cleint.user.tag}`);
    },
};