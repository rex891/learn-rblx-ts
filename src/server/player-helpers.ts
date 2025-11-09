import { Players } from "@rbxts/services"

export function playerHasTool(player: Player, toolname: string): boolean {
	return (
		player.Character?.FindFirstChildOfClass("Tool")?.Name === toolname ||
		player.WaitForChild("Backpack").FindFirstChild(toolname) !== undefined
	)
}

export function getPlayerFromPart(part: BasePart) {
	let character = part.FindFirstAncestorOfClass("Model")
	return Players.GetPlayerFromCharacter(character)
}
