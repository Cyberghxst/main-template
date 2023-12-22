// for CommonJS use: const { Erine, GatewayIntentBits, HelpCommand } = require("erine");
import {
    Erine,
    GatewayIntentBits as I,
    HelpCommand
} from "erine";

const client = new Erine({
    intents: [
        I.Guilds,
        I.GuildMessages,
        I.MessageContent
    ],
    guildOnly: true,
    helpCommand: HelpCommand, // Enables !help by default.
    /**
     * you can use an async function here too.
     * async prefix (ctx) {
     *    return "!"
     * }
     */
    prefix: "!",
    replyOnEdit: false
});

client.load("./src/files")
    .then(async () => {
        await client.login("TOKEN");
    });