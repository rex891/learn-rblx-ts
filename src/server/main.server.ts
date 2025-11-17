import { Players } from "@rbxts/services"
import "server/create-props/checkpoints"
import "server/create-props/create-cans"
import "server/create-props/create-coins"
import "server/create-props/flashlight"
import "server/weapons"

import { loadPlayerData, savePlayerData } from "./data"

Players.PlayerAdded.Connect((player) => {
	loadPlayerData(player)
	player.CharacterAdded.Connect((character) => {
		character.ChildAdded.Connect((child) => {
			if (child.IsA("Tool")) print(`${player} equipped a ${child}`)
		})
	})
})

Players.PlayerRemoving.Connect((player) => {
	savePlayerData(player.UserId)
})
