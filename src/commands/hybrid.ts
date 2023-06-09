import { Bucket, Context, CommandBuilder, ParamsBuilder, Plugins } from "erine";

export const body = {
    data: new CommandBuilder()
        .setName("say")
        .setDescription("Repeat a message.")
        .allowPrefix(true)
        .allowSlash(true),
    params: new ParamsBuilder()
        .addString({
            name: "text",
            description: "The text to repeat.",
            required: true,
            long: true, // Retieves all the user input.
            max_length: 3500
        }),
    plugins: [Plugins.cooldown(60, Bucket.Member)],
    async code(ctx: Context) {
        const text = ctx.get<string>("text");
        await ctx.send({ content: text as string, allowedMentions: { parse: [] } });
    }
};