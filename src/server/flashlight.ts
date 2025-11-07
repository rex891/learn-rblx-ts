import { ServerStorage, Workspace } from "@rbxts/services";
import { playerHasTool } from "shared/player";

let flashlight = ServerStorage.Tools.Flashlight;

Workspace.FlashlightGiver.ProximityPrompt.Triggered.Connect((player) => {
	if (!playerHasTool(player, "Flashlight")) {
		flashlight.Clone().Parent = player.WaitForChild("Backpack");
	}
});
