import { ServerStorage, Workspace } from "@rbxts/services"
import { playerHasTool } from "server/player-helpers"

Workspace.FlashlightGiver.ProximityPrompt.Triggered.Connect((player) => {
	if (!playerHasTool(player, "Flashlight")) {
		ServerStorage.Tools.Flashlight.Clone().Parent = player.WaitForChild("Backpack")
	}
})
