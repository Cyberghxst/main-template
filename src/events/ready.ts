import type { ErineClient, Event } from "erine";

export const event: Event = {
    name: "ready",
    async code(client: ErineClient) {
        await client.skyfold.sync(client.token as string, client.user?.id as string);
        console.log("Slash commands uploaded to the Discord API!");
        console.log("Successfully logged in as: ".concat(client.user?.username as string));
    }
}