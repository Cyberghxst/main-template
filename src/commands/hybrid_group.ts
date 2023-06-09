import { Bucket, Context, CommandBuilder, GroupBuilder, Plugins } from "erine";

const body = {
    data: new GroupBuilder()
        .setName("bot")
        .setDescription("Bot commands.")
        .allowPrefix(false)
        .allowSlash(true)
        .addCommand({
            data: new CommandBuilder()
                .setName("ping")
                .setDescription("Retrieves the client websocket ping.")
                .setAliases("latency"),
            plugins: [Plugins.cooldown(3, Bucket.Member)],
            async code(ctx: Context) {
                await ctx.send("My ping is: ".concat(ctx.bot.ws.ping.toString()));
            }
        })
        .addCommand({
            data: new CommandBuilder()
                .setName("info")
                .setDescription("Retrieves technical information about the client.")
                .setAliases("about"),
            // Arrow functions can be used too.
            code: async (ctx: Context) => {
                const texts = [
                    "Node.JS:" + process.version,
                    "Erine:2.0.0"
                ].map((str: string) => `**${str.split(":")[0]}**: ${str.split(":")[1]}`).join("\n");
                await ctx.send(texts);
            }
        })
}

export { body };