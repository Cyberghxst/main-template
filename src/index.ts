// For JavaScript use: const { ErineClient } = require("erine");
import { ErineClient, Context } from "erine"; // Context is just needed as a type.
import { GatewayIntentBits } from "discord.js";

// Object destructuration.
const { Guilds, GuildMessages, MessageContent } = GatewayIntentBits;

// New client instance.
const client = new ErineClient({
    intents: [
        Guilds,
        GuildMessages,
        MessageContent
    ],
    prefix: "!"
    /**
     * prefix can be also a function:
     * prefix: async function(ctx: Context) {
     *      return db.get(ctx.guild.id + "_prefix") ?? "!"
     * }
     */
});

// Loading sources
client.load_commands("src/commands").then(() => console.log("Commands loaded!"));
client.load_events("src/events").then(() => console.log("Events loaded!"));

// Client login.
client.login("BOT TOKEN HERE");