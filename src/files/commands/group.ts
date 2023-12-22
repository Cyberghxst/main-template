import { CommandBuilder, Context, FileModule, GroupBuilder, ParamsBuilder } from "erine";

export const data: FileModule = {
    data: new GroupBuilder({
        name: "fun",
        description: "Fun commands.",
        as_slash: true,
        as_prefix: false
    })
    .addCommand({
        data: new CommandBuilder({
            name: "say",
            description: "Repeats the given text."
        }),
        params: new ParamsBuilder()
        .addString({
            name: "text",
            description: "The text to repeat.",
            required: true,
            ellipsis: true
        }),
        code: async function(ctx: Context) {
            const text = ctx.get<string>("text")!;
            await ctx.send(text);
        }
    })
}