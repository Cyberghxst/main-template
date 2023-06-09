// This isn't needed because you can restrict prefix usages with ".allowPrefix(false)".
import { SlashCommandBuilder } from "discord.js";
import { Context } from "erine";

const body = {
    data: new SlashCommandBuilder()
        .setName("slash")
        .setDescription("Just a slash command example!"),
    async code(ctx: Context) {
        await ctx.send("Hello world");
    }
};

export { body };