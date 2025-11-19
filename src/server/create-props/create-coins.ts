import { ReplicatedStorage, Workspace } from "@rbxts/services"
import { remotes } from "shared/remotes"
import { addCoin } from "../data"
import { getPlayerFromPart } from "../player-helpers"

let coins = new Instance("Folder", Workspace)
coins.Name = "Coins"

let rng = new Random()

function createCoins() {
	let coin = ReplicatedStorage.CollectibleCoin.Clone()
	coin.CFrame = new CFrame(rng.NextNumber(-512, 512), 12.5, rng.NextNumber(-512, 512))
	coin.Parent = coins
	coin.Touched.Connect((part) => {
		let player = getPlayerFromPart(part)
		if (!player) return
		let coinsCount = addCoin(player.UserId)
		remotes.updateCoins.fire(player, coinsCount)

		coin.Destroy()
	})
}

for (let i = 0; i < 500; i++) {
	createCoins()
}

Workspace.ClickablePart.ClickDetector.MouseClick.Connect((player) => {
	Workspace.ClickablePart.Fire.Enabled = !Workspace.ClickablePart.Fire.Enabled
})
