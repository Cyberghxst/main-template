import { CommandBuilder, Errors, GroupBuilder, ParamsBuilder, Plugins, codeBlock } from "erine"
import { inspect } from "util"

export const data = {
    data: new GroupBuilder({
        name: "test",
        description: "Group template to test plugins.",
        as_slash: false
    })
    .addCommand({
        data: new CommandBuilder({
            name: "eval",
            description: "Evaluates JavaScript code."
        }),
        plugins: [
            // Plugins to check ownership
            Plugins.check(async (ctx) => {
                if (!ctx.bot.ops.owners?.includes(ctx.author.id))
                    throw new Errors.NotOwner(ctx)
                else return true
            })
        ],
        params: new ParamsBuilder()
        .addString({
            name: 'code',
            description: 'JavaScript code to be evaled.',
            required: true
        }),
        code: async (ctx) => {
            // Retrieves code to be evaled.
            const code = ctx.get<string>('code')!

            // Util vars.
            let temp: any, result: string

            // Trying to eval.
            try {
                temp = await eval(code)
            } catch {
                throw new Errors.InvalidParam(ctx, 'Cannot eval the provided code.')
            }

            // String conversion.
            result = typeof temp === 'string' ? temp : typeof temp === 'object' ? inspect(temp) : temp.toString()

            // Send the results.
            await ctx.send(codeBlock(result))
        }
    }),
}