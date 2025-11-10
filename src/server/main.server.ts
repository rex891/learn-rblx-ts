import { Players } from "@rbxts/services"
import "server/create-props/checkpoints"
import "server/create-props/create-cans"
import "server/create-props/create-coins"
import "server/create-props/flashlight"
import "server/remote-functions"

import { loadPlayerData, savePlayerData } from "./data"

Players.PlayerAdded.Connect((player) => {
	loadPlayerData(player)
})

Players.PlayerRemoving.Connect((player) => {
	savePlayerData(player.UserId)
})
