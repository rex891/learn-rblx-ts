import { Players } from "@rbxts/services"

export function playerHasTool(player: Player, toolname: string): boolean {
	return (
		player.Character?.FindFirstChildOfClass("Tool")?.Name === toolname ||
		player.WaitForChild("Backpack").FindFirstChild(toolname) !== undefined
	)
}

export function playerFromHit(part: Part) {
	let character = part.FindFirstAncestorOfClass("Model")
	let player = Players.GetPlayerFromCharacter(character)
	return $tuple(player, character)
}
