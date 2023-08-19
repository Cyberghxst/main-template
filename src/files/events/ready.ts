import { Erine, EventBuilder, Events, FileModule } from "erine";

export const data: FileModule = {
    data: new EventBuilder({
        name: Events.ClientReady,
        once: true
    }),
    code: async function(bot: Erine) {
        await bot.sync();
        console.log("CLIENT READY AS:", bot.user?.username);
    }
}