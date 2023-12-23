import { ButtonInteraction, FileModule, InteractionBuilder, Interactions, ModuleData } from "erine";

export const data: ModuleData<InteractionBuilder> = {
    data: new InteractionBuilder({
        name: "my_button", // customID
        type: Interactions.Button
    }),
    code: async function(interaction: ButtonInteraction) {
        await interaction.reply("Button response.");
    }
}