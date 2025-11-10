import { Players } from "@rbxts/services"
import "server/create-props/checkpoints"
import "server/create-props/create-cans"
import "server/create-props/create-coins"
import "server/create-props/flashlight"

import Remotes from "shared/remotes"
import { loadPlayerData, savePlayerData } from "./data"

Players.PlayerAdded.Connect((player) => {
	Remotes.Server.Get("RemFuncExample").SetCallback((player, text) => `Got: ${text} from ${player.Name}!!!`)
	loadPlayerData(player)
})

Players.PlayerRemoving.Connect((player) => {
	savePlayerData(player.UserId)
})
