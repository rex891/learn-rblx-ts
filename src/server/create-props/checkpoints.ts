import { Workspace } from "@rbxts/services"
import { getPlayerFromPart } from "server/player-helpers"

for (const checkpoint of Workspace.Checkpoints.GetChildren() as Part[]) {
	let v = checkpoint.GetAttribute("Stage")
	checkpoint.Touched.Connect((otherPart) => {
		let player = getPlayerFromPart(otherPart)
	})
}
