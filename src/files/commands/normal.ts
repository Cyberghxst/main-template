import { ActionRowBuilder, ButtonBuilder, ButtonStyle, CommandBuilder, Context, EmbedBuilder, ModuleData } from "erine";

export const data: ModuleData<CommandBuilder>[] = [{
    data: new CommandBuilder({
        name: "ping",
        description: "Returns the client websocket latency.",
        as_prefix: true,
        as_slash: true
    }),
    code: async function(ctx: Context) {
        const embed = new EmbedBuilder();
        embed.setTitle(ctx.bot.user?.username + " latency.")
        .setDescription(ctx.bot.ws.ping + " ms")
        .setColor("Random");

        await ctx.send({ embeds: [embed] });
    }
},{
    data: new CommandBuilder({
        name: "button",
        description: "Sends a button.",
        as_slash: false,
        as_prefix: true
    }),
    code: async function(ctx: Context) {
        const row = new ActionRowBuilder<ButtonBuilder>();
        const button = new ButtonBuilder();
        button.setCustomId("my_button")
        .setLabel("Press me!")
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(false);

        row.setComponents(button);

        await ctx.send({
            content: "Here is the button!",
            components: [row]
        });
    }
}];