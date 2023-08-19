import { ButtonInteraction, FileModule, InteractionBuilder, Interactions } from "erine";

export const data: FileModule = {
    data: new InteractionBuilder({
        name: "my_button", // customID
        type: Interactions.Button
    }),
    code: async function(interaction: ButtonInteraction) {
        await interaction.reply("Button response.");
    }
}