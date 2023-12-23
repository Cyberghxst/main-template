import { Erine, EventBuilder, Events, ModuleData } from "erine";

export const data: ModuleData<EventBuilder> = {
    data: new EventBuilder({
        name: Events.ClientReady,
        once: true
    }),
    code: async function(bot) {
        await bot.sync(['guildId', 'guildId', 'guildId']);
        // or "bot.sync()" for global commands.
        console.log("CLIENT READY AS:", bot.user?.username);
    }
}